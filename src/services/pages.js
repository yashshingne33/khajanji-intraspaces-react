// src/services/pages.js
// Serves static page content from src/data/site.js — no network calls.

import { pages, siteInfo, navLinks } from '../data/site.js'

export function getPage(slug) {
  return pages[slug] ?? null
}

export function getAllPages() {
  return Object.values(pages)
}

export function getSiteInfo() {
  return siteInfo
}

export function getNavLinks() {
  return navLinks
}
