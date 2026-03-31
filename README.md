# Khajanji Intraspaces — React + Vite

A fully standalone React website for an architecture studio.  
No backend. No CMS. No WordPress. Just React, Vite, and local data files.

---

## Quick start

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173` with hot reload.

```bash
npm run build    # production build → dist/
npm run preview  # preview the build locally
```

---

## Project structure

```
src/
├── data/
│   ├── posts.js        ← All blog posts, authors, comments, categories
│   └── site.js         ← Site name, nav links, pages content, contact info
├── services/
│   ├── posts.js        ← Query/filter/paginate posts (pure JS, no fetch)
│   └── pages.js        ← Read static page content
├── hooks/
│   ├── usePosts.js     ← usePosts, usePost, useComments, useRelatedPosts…
│   └── usePages.js     ← usePage, useSiteInfo, useNavLinks
├── components/
│   ├── layout/         ← Layout, Header, Footer, SubHeader
│   ├── post/           ← PostCard, PostMeta, Comment
│   └── ui/             ← SearchForm, Sidebar, Pagination
├── pages/
│   ├── HomePage.jsx    ← Hero slider, about, portfolio, services sections
│   ├── PageView.jsx    ← Generic static page (about, services, etc.)
│   ├── BlogPost.jsx    ← Single post with comments + related posts
│   ├── Archive.jsx     ← Blog list with category/tag filtering
│   ├── SearchPage.jsx  ← Search results
│   ├── AuthorPage.jsx  ← Author profile + posts
│   └── NotFound.jsx    ← 404 page
├── styles/
│   └── global.css      ← CSS variables, resets, utility classes
├── App.jsx             ← Routes
└── main.jsx            ← Entry point
```

---

## How to add content

### Add a blog post
Edit `src/data/posts.js` — copy an existing post object and change the fields:

```js
{
  id: 7,
  slug: 'my-new-project',
  title: 'My New Project',
  excerpt: 'Short summary shown on cards.',
  content: `<p>Full HTML content here.</p>`,
  date: '2024-06-01',
  featuredImage: '/images/my-project.jpg',   // put image in /public/images/
  author: { name: 'Anna Hoffmann', slug: 'anna-hoffmann', avatar: '...' },
  categories: ['Residential'],
  tags: ['minimalism'],
  commentCount: 0,
}
```

### Edit a static page
Edit `src/data/site.js` under the `pages` object:

```js
export const pages = {
  about: {
    slug: 'about',
    title: 'About the studio',
    content: `<p>Your HTML content here.</p>`,
  },
  // add more pages here…
}
```

### Update nav links
Edit the `navLinks` array in `src/data/site.js`.

### Update contact / site info
Edit the `siteInfo` object in `src/data/site.js`.

---

## Routes

| Path              | Page           |
|-------------------|----------------|
| `/`               | Home           |
| `/blog`           | Blog archive   |
| `/blog/:slug`     | Single post    |
| `/author/:name`   | Author page    |
| `/search?q=…`     | Search results |
| `/about`          | About page     |
| `/portfolio`      | Portfolio page |
| `/services`       | Services page  |
| `/media`          | Media page     |
| `/contact`        | Contact page   |
| `*`               | 404 page       |

---

## Tech stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [React 18](https://react.dev) | UI library |
| [React Router v6](https://reactrouter.com) | Client-side routing |
| CSS Modules | Scoped component styles |

No other dependencies. No API calls. No environment variables.
