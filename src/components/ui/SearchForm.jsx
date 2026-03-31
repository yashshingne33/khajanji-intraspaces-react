import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SearchForm.module.css'

export default function SearchForm({ placeholder = 'Search…', autoFocus = false }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const q = query.trim()
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <form
      role="search"
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <label htmlFor="search-input" className={styles.srOnly}>
        Search
      </label>
      <input
        id="search-input"
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={styles.input}
        required
      />
      <button type="submit" className={styles.btn} aria-label="Submit search">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      </button>
    </form>
  )
}
