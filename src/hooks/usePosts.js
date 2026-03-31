// src/hooks/usePosts.js
// All hooks read from local data — no async, no loading spinners, no network.

import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  getPosts,
  getPost,
  getPostsByAuthor,
  getRecentPosts,
  getCategories,
  getComments,
  getRelatedPosts,
} from '../services/posts.js'

export function usePosts(opts = {}) {
  const { page = 1, perPage = 9, category, tag, search } = opts
  return useMemo(
    () => getPosts({ page, perPage, category, tag, search }),
    [page, perPage, category, tag, search]
  )
}

export function usePost(slug) {
  return useMemo(() => getPost(slug), [slug])
}

export function useAuthorPosts(authorSlug, opts = {}) {
  const { page = 1, perPage = 9 } = opts
  return useMemo(
    () => getPostsByAuthor(authorSlug, { page, perPage }),
    [authorSlug, page, perPage]
  )
}

export function useSidebarData() {
  return useMemo(() => ({
    recentPosts: getRecentPosts(5),
    categories:  getCategories(),
  }), [])
}

export function useComments(slug) {
  return useMemo(() => getComments(slug), [slug])
}

export function useRelatedPosts(slug, count = 3) {
  return useMemo(() => getRelatedPosts(slug, count), [slug, count])
}

// Reads ?page=, ?category=, ?tag=, ?q= from URL automatically
export function usePostsFromUrl(perPage = 9) {
  const [searchParams] = useSearchParams()
  const page     = Number(searchParams.get('page')     ?? 1)
  const category = searchParams.get('category') ?? undefined
  const tag      = searchParams.get('tag')      ?? undefined
  const search   = searchParams.get('q')        ?? undefined
  return usePosts({ page, perPage, category, tag, search })
}
