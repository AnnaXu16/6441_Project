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
      {
        title: 'Defence and Risk Reduction',
        paragraphs: [
          'One of the most effective defences is to reduce how much personal information is publicly available online. User can choose to set their social media account to private and regularly review who can see their posts. Privacy settings should also be regularly reviewed and user should avoid posting sensitive informations such as their live location, home address and workplace as these details can help an attacker identify and locate them in real life.',
          'User can also review their older posts, tagged photos and information shared by friend. This is because even when someone doesn’t directly reveal sensitive information online, other people may expose it through tags, comments or group photos. Therefore, to further reduce [[risk|risk]] users can also turn off automatic location tagging and require approval before tagged posts appear on a profile.',
          'Another defense is reducing identity linkability. Use the same username and profile photo across every platform would makes it very easy for someone to connect different accounts together. As a result, using different usernames for different accounts and limiting identifying details can make it harder for attackers to connect profile from multiple platforms and make [[information aggregation|information-aggregation]] more difficult.',
          'It is also important to avoid posting in real time. Sharing photo after leaving the place can reduce the chance of other people use the information to track the users movements. Users should think about whether a post can reveal more than it intended, like street sign, building number, work badge etc.',
          'These defences can’t completely stop someone like Joe, however, they can significantly reduce the amount of useful information available online, make information aggregation more difficult and limit the attackers ability to create an accurate profile.',
        ],
      },
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
    analysisSections: [
      {
        title: 'Attack Overview: Constructing a False Identity',
        paragraphs: [
          'In this scene, Frank decides to pretend to be a Pan Am pilot. He first researched the pilot role thoroughly., gets a pilot uniform and acting as if he is a real pilot. Even though he has no qualification or any experience, the uniform makes his identity look very believable to people around him.',
          'Furthermore, Frank doesn\'t rely only on the uniform, he also acts really confident and behaves like he belong in the airline environment. He understands that a convincing identity depends on both appearance and behaviour. So if he looks nervous, other people can begin to start question him. By appearing calm and professional, Frank was able to make the false identity seem very believable.',
          'People normally see pilots as respectable and trustworthy professionals. The Pan Am uniform therefore becomes a visible symbol of authority and status. Therefore, when people see Frank as a pilot, they are less likely to question him.',
          'As a result, Frank was able to exploit this trust and [[authority bias|authority-bias]] people have to cash fraudulent checks successfully. Bank employees are more willing to accept the checks because they believe he is a pilot working for a respected airline. This is an [[impersonation attack|impersonation]] because Frank uses a false identity to gain trust and cooperation. It is also a form of [[social engineering|social-engineering]] because he was able to manipulate how other people see him instead of directly attacking the bank’s system. In the end the attacks work really well because people focus on the convincing identity he presents and do not carry out enough independent verification.',
        ],
      },
      {
        title: 'Impersonation, Pretexting and Authentication Failure',
        paragraphs: [
          'There is an important difference between [[impersonation|impersonation]] and identity fraud. Impersonation is the act of pretending to be another person or in this case, claiming a role that someone doest actually have. Identity fraud on the other hand happen when this false identity is used to obtain money. Therefore, for Frank, he use impersonation to creates his fake identity, while the fraud (cash fake checks) is what the he does with it.',
          'Frank’s method is also an example of [[pretexting|pretexting]]. Pretexting is when an attacker creates a believable background story to support a false identity. Frank doesn;t only claim to be a pilot. He creates a complete professional role that explains who he is, where he works and why other people should cooperate with him.',
          'The false identity then become reusable. Frank can present the same pretext to different banks, airline employee and other companies. Each successful interaction makes the identity appear to be more legitimate and help to create more opportunities for future fraud.',
          'This also shows the difference between [[identification|identification]] and [[authentication|authentication]]. Frank identifies himself by claiming that he is a Pan Am pilot, but this claim does not prove that his identity is genuine. What other people should do is to authenticate the claim by checking reliable evidence or official employee records. Without independent verification, Frank turn his false identity and pretext into repeated identity fraud.',
        ],
      },
      {
        title: 'Security Weakness: Verification and Authority Bias',
        paragraphs: [
          'The main security weakness shown in this scene is that people relies too much on appearance and professional status instead of proper verification. Instead of checking if Frank is actually employed by Pan Am, they rely on visual signals like his uniform and professional behaviour. These signals can support an identity claim, but they should not be treated as proof.',
          'This connects to [[authority bias|authority-bias]]. People are often more likely to trust someone who appears important, powerful or professional. Since pilots are normally seen as responsible and reputable, people assume that someone looked like pilot is also honest. This allows Frank to receive higher level of trust from the bank than an ordinary customer would receive.',
          'The attack also takes advantage of the [[halo effect|halo-effect]]. This happens when one positive characteristic influences how someone judges the rest of a person. In Franks case, his professional image causes people to make other assumptions, such as believing that he is financially reliable and that his check is genuine. However, being a pilot would not actually prove that a check is valid.',
          'Another security weakness is that Frank was able to distract the bank employee during the transaction. He acts friendly and asks her on a date, which moves her attention away from carefully checking his identity and the check. This is [[attention manipulation|attention-manipulation]] because Frank changed what the employee focuses on during the transaction. When her attention is divided, she is likely to miss warning signs and not verify Frank properly',
          'Therefore in the scene, the system failed because the verification process depends too much on human judgement. What the bank should do is to independently verify Frank’s identity and the validity of the check. When the bank allow professional appearance to influence security decisions, attacker can bypass controls without needing to break into any technical system',
        ],
      },
      {
        title: 'Defence and Risk Reduction',
        paragraphs: [
          'The most important defence against this kind of attack is to perform independent identity verification. The bank shouldn’t just accept Frank’s identity because he wears a pilot uniform or claims to work for Pan Am. Instead the staff should request official identification and verify them. The verification process should be the same for every customer, no matter their professions and how they appear.',
          'The bank should also verify the check. Even if Frank’s identity is genuine, this doesn’t prove that the check is valid. Staff should confirm if the check is actually genuine, check the account detail, signature and available funds before giving him any money.',
          'Staff training is also important as Frank target young female bank employees and uses personal attention to influence them. For example, in the scene by asking employee on a date, it distract her from checking the transaction carefully. Therefore bank employees should also be trained to recognise when friendliness is used to influence a security decision. They should continue following the normal verification process even if the customer appears charming. Staff should also feel comfortable to ask manager for support when a customer appears to try to move the conversation away from the transaction.',
          'On the other hand, Pan Am also needs stronger control over its uniform and employee credentials. A uniform should not be enough to enter staff only area or receive employee benefit. The employee identification should be verified every time. Lost uniform and identification should also be reported quickly so they can’t be used for [[impersonation|impersonation]].',
          'Finally, the bank and airline should use [[defence in depth|defence-in-depth]]. This means using several security controls instead of depending on only one. Identity documents, employee records, check verification and manager approval etc can work together. If Frank successfully bypasses one control, the other controls may still detect or stop the fraud.',
        ],
      },
    ],
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
    analysisSections: [
      {
        title: 'Defence Overview: Protecting the House',
        paragraphs: [
          'In this scene, Kevin knows that the two burglars are planning to break into his house. He decided to prepare the house in advance and build up defensive barriers. He uses the entrance, stair, hallway and various household objects to slow the burglars down and make it harder for them to reach him.',
          'From a security perspective, Kevin in this movie is acting as the defender. He first considers where the burglars are most likely to enter and how they would move through the house. He then places different traps along the possible path. This is very similar to planning security controls.',
          'Kevin does not depend on only one defence. He creates many traps and each one is designed to affect the burglars at different stages of the breakin. Therefore this creates [[multiple layers of protection|defence-in-depth]].',
          'This scene also shows that defence is not only about completely stopping an attacker at the first point of entry. Kevin’s goal is to plan and control the burglars’ movement, waste their time and make them difficult to reach him. So even when they bypass one trap, they would immediately face another one.',
          'Overall, the scene shows that defence is an active process involving lots of stages, including design (set up the defence plan), preparation and response.',
        ],
      },
      {
        title: 'Defence in Depth',
        paragraphs: [
          'The main security concept shown in this scene is [[defence in depth|defence-in-depth]]. This means security should not depend on one control being completely successful. Instead, the system should use several different controls to work together, so the failure of one layer doesn’t cause the entire defence to fail.',
          'In the movie Kevin uses this concept and have different traps for different stages of the break in. For example, before the burglars enter, he pours water on the outdoor steps, which then freeze and cause them to repeatedly slip. This is the first layer of defense. Although it doesn’t completely stop them, but it slows them down and makes entering the house much harder. After they reach the door, they face many other traps. For example, Kevin heats the door handles to cause Harry burn his hand when he tried to open the door. Marv later enters through a window but steps on glass ornaments that Kevin placed on the floor before. When they finally enter, there are many more other traps waiting for them inside.',
          'Because the traps are different, the burglars can’t defeat the whole defence by learning how to avoid only one of them. Being more careful on the ice does not protect them from the hot door handle or the swinging paint cans. As a result, the main strength of Kevin’s defence is the combined effect of all these controls. Individually, most of the traps only cause a bit delay or injury, but combining them together they make the burglars slower, much more frustrated and less able to continue the attack. This is very similar to security, where multiple controls such as [[multi factor authentication|multi-factor-authentication]], firewalls, access restrictions and monitoring are often used together. Therefore even when one layer fails, the other layers can still work effectively to reduce the attacker’s progress.',
        ],
      },
      {
        title: 'Weaknesses in Kevin’s Defence',
        paragraphs: [
          'Although Kevin’s defence is very effective at slowing down the burglars, it also has many security limitations. First of all, the traps are mainly reactive, meaning they only affect Harry and Marv after they have already reached the house. They cant prevent the break in and they also don’t remove the threat. This shows that a control can appear successful while still failing to achieve its main security purpose. Kevin ‘s traps cause the burglars many difficulties, but they continue moving through the house and getting closer to him.',
          'Another limitation is that Kevin’s traps can’t identify who is interacting with them. The traps respond to anyone who enters the area, no matter if the person is an attacker or an authorised person. For example, a neighbour or a police officer can also slip on the frozen stairs or touch the heated door handle. In security, a control should be able to separate legitimate users from unauthorised users. Kevin’s traps doesn’t perform any [[authentication|authentication]], so they could easily affect the wrong person.',
          'The traps also create new [[risks|risk]] inside the house. Traps like glass ornaments, fire, or slippery surface can easily cause harm to Kevin as well as the burglars. They can also damage the house potentially or make it more difficult to escape during another emergency. This is important because security controls should reduce the overall risk, rather than replacing one threat with several new ones. A control that stops one attacker but creates another serious risk would not be an appropriate solution.',
          'Another problem is that Kevin is the only person responding to the break in. There is no backup defender to notify other people when the attack begins. So if Kevin becomes injured or trapped, the whole defence system would fail. This creates a single point of failure because the success of the plan depends on one person only. A more reliable defence would include detection, communication and an [[incident response|incident-response]] plan instead of depending only on traps.',
          'This can also be connected to cybersecurity. A badly configured firewall may block genuine users, an overly strict login system may lock out the real account owner, and an automatic security tool may incorrectly treat safe activity as an attack. These are examples of security controls creating additional problems. Therefore, controls should be tested to make sure they are safe, reliable and suitable for the threat. The scene shows that having many defences is useful, but more controls do not automatically create better security if those controls introduce new risks.',
          'As a result, the main lesson from these limitations is that a defence shouldn’t only be judged by if it causes difficulties for attacker. It should also judge how accurately it responds, if it protect authorised people or not and whether it creates new risks. Kevin’s traps are effective against Harry and Marv, but they wont about to tell the difference between a real threat and an innocent person. This can also lead to [[false positive|false-positive]], where someone authorised is treated as attacker.',
          'At the same time, a defence can also fail to respond when the attacker avoids the expected path, which is similar to a [[false negative|false-negative]]. For example, if the burglars entered through an unprotected area, some traps would never be triggered. This shows that security control need to be carefully designed and tested, rather than simply added in large numbers.',
        ],
      },
    ],
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
    analysisSections: [
      {
        title: 'Attack Overview',
        paragraphs: [
          'In this scene, Nicky and Jess are watching a football game with a wealthy gambler called Liyuan Tse. Nicky begins to make different bets with Tse and the amount of money they bet gradually increases. Nicky appeared to be losing control and eventually loses all of the money his team earned. This makes Tse believe that Nicky is desperate and willing to make a very risky final bet.',
          'For the final bet, Nicky asks Tse to choose any player on or off the field. Jess then has to correctly guess the number of the player he selected. This challenge appears almost impossible because there are many different players and Jess does not know which person Tse has chosen. From Tse’s perspective, he is making a completely free and random choice.',
          'However, the entire situation has already been prepared by Nicky and his team. Before the game, they repeatedly exposed Tse to the number 55 through different objects, signs, sounds and people around him. During the final bet, Nicky’s team member Farhad is also positioned near the field wearing the number 55. This helps Jess choose the same number after she recognises him. Jess was not told about the full plan, so her worried reaction during the bet appears genuine.',
          'The attack works because Nicky didn’t directly tell Tse which number to choose. Instead, he controls the information around Tse and makes number 55 feel familiar. Tse believes that he made the decision independently, when his attention and memory have actually been influenced in advance. This is a form of [[social engineering|social-engineering]] because the attack changes how the target thinks and makes decisions rather than attacking any technical system.',
        ],
      },
      {
        title: 'Attention Manipulation  and the Illusion of Choice',
        paragraphs: [
          'The main technique used by Nicky’s team is [[attention manipulation|attention-manipulation]]. Instead of directly asking Tse to choose number 55, the team changes the environment around him. This allows them to influence what information enters his attention while making the process appear natural.',
          'This technique is also called [[priming|priming]]. Priming happen when information someone experiences earlier affects how they respond to other things later. By repeatedly exposing Tse to 55, Nicky made it easy for him to remember. When Tse is later asked to quickly choose a player, this number is already familiar and available in his mind, even if he can’t explain exactly why.',
          'The attack also takes advantage of the [[familiarity effect|familiarity-effect]]. People can sometimes prefer or trust something simply because they have seen it before. Number 55 feel like a natural choice to Tse as he doesn’t remember all of the earlier signals, so he believes that the idea came from himself.',
          'As a result, this creates an [[illusion of free choice|illusion-of-choice]]. Tse is technically allowed to select any player, but Nicky has already influenced which option is most likely to attract his attention. This is what makes the manipulation difficult to notice because Tse still feels that he is in control.',
          'The scene the attacker also uses risk escalation and emotional decision making. As the bets become larger, Tse becomes more involved and confident because he has already won the earlier rounds. Therefore the final bet appear more like a good opportunity instead of a warning sign. This makes him less likely to stop and question why Nicky is willing to make such a risky bet.',
          'Jess is also an important part of the manipulation as she doesn’t know the full plan. Her fear and confusions during the final bet are real, so her genuine emotional reaction makes the situation more believable to Tse so he doesn’t think it is a scam.',
          'In real life, attackers also often control what information a target notices. A [[phishing|phishing]] message may highlight an urgent warning to create a [[sense of urgency|urgency-manipulation]] to make suspicious information less noticeable. The user can believe they are making an independent decision, even though the attacker has carefully designed the situation to guide their attention.',
        ],
      },
      {
        title: 'Defence and Risk Reduction',
        paragraphs: [
          'One important defence against this type of manipulation is to slow down before making a [[high risk|risk]] decision. Nicky’s attack works because Tse is asked to choose quickly while he is excited and focused on the possibility of winning. Taking a break can reduce the emotional pressure and give the person time to think properly and question why one option feels more familiar than the other',
          'People should also avoid trusting a choice only because it feels natural. If one number immediately comes to mind, they can take time to think about if they recently seen it somewhere. They can also use an independent method to make the decision. For example, a random number generator would make it nearly impossible for an attacker to predict the final choice through [[priming|priming]].',
          'Setting limits before entering a risky situation is another useful defence. A person can decide in advance how much money they are prepared to lose and stop when that limit is reached. Furthermore it is also useful to get an independent opinion from someone who is not emotionally involved in the situation. A second person may notice unusual behaviour or warning signs that the target has missed.',
          'In real life, people should be careful when a message tries to control their attention or trying to create a [[sense of urgency|urgency-manipulation]]. The best thing to do is to pause, inspect and verify the request through a separate method. For example, when receiving a [[scam message|phishing]] claiming to be the bank, instead of click on the link inside the message, a better way to deal with it is to contact the bank through its official website.',
          'Overall, these defences can’t completely prevent someone from trying to influence a decision. However, slowing down, setting limits and using independent verification can make the manipulation less effective.',
        ],
      },
    ],
  },
]

export default clips
