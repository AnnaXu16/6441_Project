// Quiz content is kept separate so questions can be edited without changing the page layout.
const quizQuestions = [
  {
    question: 'What is social engineering?',
    options: [
      'Breaking encryption using powerful computers',
      'Manipulating people into revealing information or performing an unsafe action',
      'Installing antivirus software',
      'Testing network speed',
    ],
    correctIndex: 1,
    explanation: 'Social engineering targets human trust, behaviour, and decision-making rather than attacking technology directly. An attacker may use a convincing story, urgency, authority, or fear to persuade someone to reveal information or perform an unsafe action.',
  },
  {
    question: 'A person accepts evidence supporting their belief and ignores evidence against it. What is this?',
    options: ['Confirmation bias', 'Least privilege', 'Defence in depth', 'Authentication failure'],
    correctIndex: 0,
    explanation: 'Confirmation bias is the tendency to notice and accept information that supports an existing belief while discounting contradictory evidence. In security situations, it can make a believable story seem trustworthy because the target focuses only on details that match their expectations.',
  },
  {
    question: 'Which password is the strongest?',
    options: ['password123', 'Anna2002', 'Summer2026', 'River-Cloud-Window-84'],
    correctIndex: 3,
    explanation: 'A longer password made from several unrelated words is generally harder to guess or crack than a short, predictable password. Personal names, common phrases, years, and simple number patterns are easier for attackers and automated tools to predict.',
  },
  {
    question: 'What is multi-factor authentication?',
    options: [
      'Using the same password on several accounts',
      'Verifying identity using two or more different types of evidence',
      'Changing a password twice',
      'Logging in from two devices',
    ],
    correctIndex: 1,
    explanation: 'Multi-factor authentication verifies identity with two or more different types of evidence, such as something you know, something you have, or something you are. Because the factors are different, a stolen password alone is usually not enough to access the account.',
  },
  {
    question: 'What is phishing?',
    options: [
      'A method of improving Wi-Fi speed',
      'A fake message designed to steal information or convince someone to act',
      'A secure file-sharing method',
      'A type of password manager',
    ],
    correctIndex: 1,
    explanation: 'Phishing uses a deceptive email, text message, website, or call to steal information or persuade someone to take an unsafe action. These messages often imitate a trusted organisation and use urgency or fear to discourage careful checking.',
  },
  {
    question: 'A caller claims to be from your bank and knows your name and address. What should you conclude?',
    options: [
      'The caller must be genuine',
      'The caller has proved their identity',
      'The information may have come from public records or a data breach',
      'The caller is safe because they sound professional',
    ],
    correctIndex: 2,
    explanation: 'Knowing personal information does not prove a caller’s identity because those details may come from public sources, social media, or a data breach. End the call and contact the bank through an official number you find independently before discussing the account.',
  },
  {
    question: 'An email creates urgency by saying your account will be deleted in ten minutes. Why is this suspicious?',
    options: [
      'Real organisations never send emails',
      'Urgency can pressure people into acting without checking',
      'Deleted accounts cannot be restored',
      'All urgent messages are scams',
    ],
    correctIndex: 1,
    explanation: 'Artificial urgency can push people to react quickly before they inspect the sender, link, or request. A safer response is to pause and verify the claim through the organisation’s official website or contact details rather than using the message itself.',
  },
  {
    question: 'What does a digital footprint include?',
    options: [
      'Only files stored on your computer',
      'Information created by your online activities',
      'Only your passwords',
      'The physical size of your device',
    ],
    correctIndex: 1,
    explanation: 'A digital footprint includes information produced by online activities, such as posts, searches, account details, purchases, location data, and browsing records. Some of it is shared deliberately, while other information may be collected automatically in the background.',
  },
  {
    question: 'A colleague asks you to share a confidential file through their personal email because the company system is unavailable. What is the best response?',
    options: [
      'Send it because the colleague is trusted',
      'Upload it to a public file-sharing service',
      'Refuse to bypass policy and confirm an approved alternative',
      'Remove the file name and send it anyway',
    ],
    correctIndex: 2,
    explanation: 'Trust in a colleague does not remove the need to protect confidential information or follow organisational policy. Confirm the request through an approved channel and use an authorised alternative so the file remains protected and accountable.',
  },
  {
    question: 'Which situation best illustrates a failure of authentication rather than authorisation?',
    options: [
      'A verified user accesses a file outside their role',
      'A system accepts an attacker as a legitimate user',
      'An employee receives too many permissions',
      'A database stores old records',
    ],
    correctIndex: 1,
    explanation: 'Authentication checks whether someone is genuinely the identity they claim to be, so accepting an attacker as a legitimate user is an authentication failure. Authorisation happens after identity is established and controls which files, systems, or actions that user is permitted to access.',
  },
]

export default quizQuestions
