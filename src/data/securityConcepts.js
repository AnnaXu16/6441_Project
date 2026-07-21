// Terms are stored separately so the matching activity can easily grow later.
const securityConcepts = [
  { id: 'impersonation', term: 'Impersonation', definition: 'Pretending to be another person or a trusted organisation to gain information, access, or cooperation.' },
  { id: 'data-breach', term: 'Data breach', definition: 'An incident where sensitive, confidential, or protected information is accessed, exposed, or stolen without permission.' },
  { id: 'osint', term: 'OSINT', definition: 'Open-source intelligence; collecting and analysing information from publicly available sources such as websites, social media, and public records.' },
  { id: 'authority-bias', term: 'Authority bias', definition: 'The tendency to trust or follow someone because they appear powerful, senior, professional, or official.' },
  { id: 'risk', term: 'Risk', definition: 'The possibility that a threat will exploit a vulnerability and cause harm, considering both likelihood and impact.' },
  { id: 'trust-exploitation', term: 'Trust exploitation', definition: 'Taking advantage of a person’s trust in an individual, organisation, relationship, or familiar situation.' },
  { id: 'least-privilege', term: 'Least privilege', definition: 'Giving users only the minimum access and permissions they need to perform their tasks.' },
  { id: 'consent', term: 'Consent', definition: 'Freely given and informed permission for personal information to be collected, used, or shared.' },
  { id: 'sunk-cost-fallacy', term: 'Sunk cost fallacy', definition: 'Continuing with a decision because time, money, or effort has already been invested, even when stopping would be safer or more reasonable.' },
  { id: 'vulnerability', term: 'Vulnerability', definition: 'A weakness in a system, process, or human behaviour that could be exploited by a threat.' },
  { id: 'defence-in-depth', term: 'Defence in depth', definition: 'Using multiple layers of security so that if one control fails, other protections are still in place.' },
  { id: 'incident-response', term: 'Incident response', definition: 'The process of identifying, containing, investigating, and recovering from a cybersecurity incident.' },
  { id: 'framing-effect', term: 'Framing effect', definition: 'The tendency to make different decisions depending on how the same information is presented or worded.' },
  { id: 'confirmation-bias', term: 'Confirmation bias', definition: 'The tendency to focus on information that supports an existing belief while ignoring conflicting evidence.' },
  { id: 'halo-effect', term: 'Halo effect', definition: 'Allowing one positive characteristic, such as confidence or professional appearance, to influence the overall judgement of a person.' },
  { id: 'tailgating', term: 'Tailgating', definition: 'Entering a restricted area by closely following an authorised person without using valid access credentials.' },
  { id: 'digital-footprint', term: 'Digital footprint', definition: 'The information and traces created by a person’s online activities, including posts, searches, accounts, and location data.' },
  { id: 'authorisation', term: 'Authorisation', definition: 'Determining what resources or actions an authenticated user is permitted to access.' },
  { id: 'authentication', term: 'Authentication', definition: 'Verifying that a person, account, or device is genuinely who or what it claims to be.' },
  { id: 'identification', term: 'Identification', definition: 'Claiming or stating an identity, such as entering a username, email address, employee number, or presenting an ID card.' },
]

export default securityConcepts
