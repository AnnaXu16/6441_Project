import securityConcepts from './securityConcepts.js'

// These concepts appear in the quiz but are not part of the matching activity yet.
const quizConcepts = [
  {
    id: 'social-engineering',
    term: 'Social engineering',
    definition: 'Manipulating people into revealing information, granting access, or performing an unsafe action by exploiting trust, emotion, or normal behaviour.',
  },
  {
    id: 'password-strength',
    term: 'Password strength',
    definition: 'How difficult a password is to guess or crack. Longer passwords made from unpredictable words or characters are generally stronger than short, common, or personal passwords.',
  },
  {
    id: 'multi-factor-authentication',
    term: 'Multi-factor authentication (MFA)',
    definition: 'Verifying identity with two or more different types of evidence, such as something you know, something you have, or something you are.',
  },
  {
    id: 'phishing',
    term: 'Phishing',
    definition: 'A deceptive email, message, website, or call designed to steal information or persuade someone to perform an unsafe action.',
  },
  {
    id: 'urgency-manipulation',
    term: 'Urgency manipulation',
    definition: 'Creating artificial time pressure so that a person reacts quickly instead of pausing to inspect, question, or verify a request.',
  },
  {
    id: 'security-policy',
    term: 'Security policy',
    definition: 'A set of organisational rules describing how information, accounts, devices, and systems should be accessed, handled, shared, and protected.',
  },
]

const glossaryTerms = [...securityConcepts, ...quizConcepts].sort((first, second) =>
  first.term.localeCompare(second.term)
)

export default glossaryTerms
