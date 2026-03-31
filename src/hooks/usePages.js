// src/hooks/usePages.js
import { useMemo } from 'react'
import { getPage, getSiteInfo, getNavLinks } from '../services/pages.js'

export function usePage(slug) {
  return useMemo(() => getPage(slug), [slug])
}

export function useSiteInfo() {
  return useMemo(() => getSiteInfo(), [])
}

export function useNavLinks() {
  return useMemo(() => getNavLinks(), [])
}
