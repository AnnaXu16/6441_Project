import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import glossaryTerms from '../data/glossaryTerms'

export default function Glossary() {
  const [search, setSearch] = useState('')
  const { hash } = useLocation()
  const query = search.trim().toLowerCase()
  const visibleTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(query) || item.definition.toLowerCase().includes(query)
  )

  // Links from an analysis open and centre the matching glossary definition.
  useEffect(() => {
    if (!hash) return

    const target = document.getElementById(hash.slice(1))
    if (!target) return

    target.open = true
    target.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [hash])

  return (
    <section className="glossary-page page-width">
      <Link className="back-link" to="/">← Home</Link>

      <div className="glossary-title">
        <p className="eyebrow">REFERENCE LIBRARY</p>
        <h1>Security Glossary</h1>
      </div>

      <div className="glossary-tools">
        <label htmlFor="glossary-search">Find a term</label>
        <input
          id="glossary-search"
          type="search"
          value={search}
          onChange={event => setSearch(event.target.value)}
          placeholder="Search terms or definitions"
        />
        <span>{visibleTerms.length} terms</span>
      </div>

      <div className="glossary-list">
        {visibleTerms.map((item, index) => (
          <details className="glossary-item" id={item.id} key={item.id}>
            <summary>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item.term}</strong>
              <b aria-hidden="true">+</b>
            </summary>
            <div className="glossary-definition">
              <p>{item.definition}</p>
            </div>
          </details>
        ))}

        {visibleTerms.length === 0 && (
          <div className="glossary-empty" role="status">
            <strong>No matching term.</strong>
            <p>Try a different word or phrase.</p>
          </div>
        )}
      </div>

    </section>
  )
}
