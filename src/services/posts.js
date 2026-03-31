// src/services/posts.js
// Pure JS data service — reads from src/data/posts.js. No network calls.

// src/services/posts.js
// To add content: edit src/data/posts.js

import { posts, categories, authors, comments } from '../data/posts.js'

// ── helpers ──────────────────────────────────────────────────────────────────

function paginate(array, page, perPage) {
  const total      = array.length
  const totalPages = Math.max(1, Math.ceil(total / perPage))
  const start      = (page - 1) * perPage
  const items      = array.slice(start, start + perPage)
  return { items, total, totalPages }
}

// ── posts ────────────────────────────────────────────────────────────────────

export function getPosts({ page = 1, perPage = 9, category, tag, search } = {}) {
  let filtered = [...posts]

  if (category) {
    filtered = filtered.filter(p =>
      p.categories.some(c => c.toLowerCase() === category.toLowerCase())
    )
  }

  if (tag) {
    filtered = filtered.filter(p =>
      p.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    )
  }

  if (search) {
    const q = search.toLowerCase()
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.content.toLowerCase().includes(q)
    )
  }

  // Newest first
  filtered.sort((a, b) => new Date(b.date) - new Date(a.date))

  const { items, total, totalPages } = paginate(filtered, page, perPage)
  return { posts: items, total, totalPages }
}

export function getPost(slug) {
  return posts.find(p => p.slug === slug) ?? null
}

export function getPostsByAuthor(authorSlug, { page = 1, perPage = 9 } = {}) {
  const author = authors.find(a => a.slug === authorSlug) ?? null
  const filtered = posts
    .filter(p => p.author.slug === authorSlug)
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  const { items, total, totalPages } = paginate(filtered, page, perPage)
  return { posts: items, author, total, totalPages }
}

export function getRecentPosts(count = 5) {
  return [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count)
}

export function getCategories() {
  return categories
}

export function getComments(slug) {
  return comments[slug] ?? []
}

export function getRelatedPosts(currentSlug, count = 3) {
  const current = getPost(currentSlug)
  if (!current) return []

  return posts
    .filter(p => p.slug !== currentSlug)
    .filter(p => p.categories.some(c => current.categories.includes(c)))
    .slice(0, count)
}
