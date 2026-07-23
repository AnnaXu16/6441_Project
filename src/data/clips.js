// Add future clip details here when the written analysis is ready.
const clips = [
  {
    id: 'you-public-profile',
    film: 'You',
    title: 'Building a Profile from Public Information',
    cover: '/you-public-profile-cover.jpg',
    coverPosition: 'center',
    coverSource: 'https://resizing.flixster.com/zF9WWt7bLE2c3p66TlFgyfFR9Ng=/620x336/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15725175_i_h8_aa.jpg',
    youtubeId: '3ewK8g87y5o',
    videoTitle: 'Joe Goldberg - Stalker Extraordinaire | You',
    youtubeEnd: 143,
    analysisSections: [
      {
        title: 'Attack Overview: Building a Profile from Public Information',
        paragraphs: [
          'This scene shows how Joe is able to build a detailed profile of Guinevere Beck using only a small amount of information. After meeting her in the bookstore, he knows her name and also a few details from their conversation. He then go online and searches it, finding her social media accounts.',
          'This behaviour can be described as [[Open-Source Intelligence|osint]], also known as [[OSINT|osint]]. What it means is collecting and analysing information that is publicly available. This can include social media post, photos, comments and online profile. Joe looks through Beck’s posts, friendships and conversations etc and was able to get a better idea on her daily routine, relationship and interests. Individually, each piece of information doesn\'t seem very harmful, but when Joe combines them together, he is able to create a much more complete profile of her.',
          'At this stage, his action can also be described as [[passive reconnaissance|passive-reconnaissance]]. This is because at this point Joe only gathers information without directly interacting with Beck. He didn\'t do anything like stealing her password or install malware. As a result, this makes his activity difficult for Beck to notice. From her perspective, nothing unusual has happened, even though Joe already knows a large amount about her life.',
          'The situation then becomes more serious. Joe uses the information he collected to find Beck’s home address, identify her apartment and watch her through the windows. Later, he even enters her apartment and went through her laptop. The attack therefore moves from OSINT and online profiling to physical surveillance and [[unauthorised access|unauthorised-access]]. The scene shows how public information can be aggregated and used to create a serious privacy and physical security threat.',
        ],
      },
      {
        title: 'Information Aggregation: Risks and Consequences',
        paragraphs: [
          'The main problem in this scene is not only that Beck shares information online, but Joe is able to combine many different pieces of information together. This is called [[information aggregation|information-aggregation]]. It means collecting small detail from different sources and connecting them so these information can create a much more complete picture',
          'This would create serious privacy risk because after sharing on the internet Beck loses control over how her information is being used. She might just post the information to share her life with friends but Joe was able to use it for a completely different purpose. This shows public information does not mean the person gives [[consent|consent]] for anyone to collect or analyse.',
          'There are also many possible consequences from this type of profiling. In this case Joe choose to stalk her, other attacker can use the information to create targeted [[phishing|phishing]] message, or [[impersonation|impersonation]]. Attackers can pretend to share the same interest with her in order to gain trust. In more serious situations, these information can even lead to physical safety risks.',
          'In this scene, the consequences become physical because Joe use online information to locate Beck’s home and watch her in real life. This shows how a [[digital footprint|digital-footprint]] can affect more than online privacy. Once enough information is aggregated, it can create [[risks|risk]] to a person’s identity, relationships and personal safety.',
        ],
      },
      {
        title: 'Privacy Awareness and Human Behaviour',
        paragraphs: [
          'The main human weakness in this scene is Beck didn\'t expect someone would study her profile with a harmful purpose. This is a very common security problem as people often judges risk base on what normal people would do, rather than what motivated attacker would do. It also shows Beck\'s lack of privacy awareness. It shows Beck focusing more on expressing herself than on possible security risk.',
          'Therefore, this creates a gap between the way Beck expects her information to be used and the way Joe actually uses it. This is why users need to think beyond their intended audience when sharing personal details online.',
        ],
      },
      { title: 'Cognitive Failure: Confirmation Bias and Narrative Construction' },
      { title: 'Real-World Cybersecurity Connection: Social Engineering, Cyberstalking and Targeted Attacks' },
      { title: 'Defensive Controls: Reducing the Digital Attack Surface' },
    ],
  },
  {
    id: 'catch-me-pilot',
    film: 'Catch Me If You Can',
    title: 'The Pilot Impersonation',
    cover: '/catch-me-pilot-cover.jpg',
    coverPosition: 'center 38%',
    coverSource: 'https://decider.com/wp-content/uploads/2020/01/catch-me-if-you-can-on-netflix.jpg?quality=75&strip=all&w=1200',
    youtubeId: 'QtavKOeUGnA',
    videoTitle: 'Impersonating a Pilot | Catch Me If You Can',
  },
  {
    id: 'home-alone-defences',
    film: 'Home Alone',
    title: 'Setting Up the Defences',
    cover: '/home-alone-defences-cover.png',
    coverPosition: 'center bottom',
    coverSource: 'https://media.vanityfair.com/photos/5fb2a90dcd94174b01e5ed11/master/w_1600%2Cc_limit/home-alone-movie-house-embed-inset.png',
    youtubeId: 'Ig7YCukLNys',
    videoTitle: 'Home Alone (1990) - Kevin sets up traps around his home scene',
  },
  {
    id: 'focus-pickpocket',
    film: 'Focus',
    title: 'Pickpocketing Through Misdirection',
  },
  {
    id: 'focus-gambling',
    film: 'Focus',
    title: 'Manipulating Decisions in the Gambling Scene',
    cover: '/focus-gambling-cover.jpg',
    coverPosition: 'center',
    coverSource: 'https://i.ytimg.com/vi/SKL20MFjoNQ/hqdefault.jpg',
    youtubeId: 'SKL20MFjoNQ',
    videoTitle: 'Focus - Gambling Scene | Number 55 (HD)',
  },
]

export default clips
