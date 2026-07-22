import { useState } from 'react'
import { Link } from 'react-router-dom'
import securityConcepts from '../data/securityConcepts'

// Start with a short selection; the full glossary can be populated later.
const starterTerms = securityConcepts.slice(0, 6)

export default function Glossary() {
  const [search, setSearch] = useState('')
  const query = search.trim().toLowerCase()
  const visibleTerms = starterTerms.filter(item =>
    item.term.toLowerCase().includes(query)
  )

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
          placeholder="Search the starter glossary"
        />
        <span>{visibleTerms.length} terms</span>
      </div>

      <div className="glossary-list">
        {visibleTerms.map((item, index) => (
          <details className="glossary-item" key={item.id}>
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
            <strong>No matching term yet.</strong>
            <p>Try another search, or check again when more terms are added.</p>
          </div>
        )}
      </div>

    </section>
  )
}
