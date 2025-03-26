# Social Engineering Patterns Database

<p align="center">
  <img src="https://via.placeholder.com/200x200?text=SherpaAI" alt="SherpaAI Logo" width="200" height="200">
</p>

<p align="center">
  <strong>Recognizing and defending against manipulation tactics in digital communications</strong>
</p>

## Overview

This document catalogs common social engineering patterns that SherpaAI is designed to detect and defend against. By understanding these tactics, users can better protect themselves and their networks from manipulation.

## Psychological Triggers Exploited

<details open>
<summary>Fundamental human tendencies leveraged in social engineering</summary>

| Trigger | Description | Example Patterns |
|:--------|:------------|:-----------------|
| **Authority** | Tendency to comply with requests from perceived authorities | Impersonation of bosses, officials, or support staff |
| **Scarcity** | Fear of missing out on limited opportunities | Time-limited offers, exclusive access claims |
| **Social Proof** | Reliance on others' actions to determine proper behavior | "Everyone else is doing it" messaging, fake testimonials |
| **Liking** | Tendency to comply with people we like or find attractive | Building rapport before making requests, attractiveness bias |
| **Reciprocity** | Feeling obligated to return favors | Small gifts before big requests, unsolicited assistance |
| **Commitment** | Desire to be consistent with prior statements or actions | Getting small commitments before larger ones |
| **Fear** | Emotional response to perceived threats | Warnings about account closures, legal consequences |
| **Urgency** | Pressure to act quickly without careful consideration | Countdown timers, "act now" messaging |

</details>

## Common Attack Patterns

### Phishing and Information Extraction

<details>
<summary>Tactics designed to extract sensitive information</summary>

| Pattern | Indicators | Defense Strategy |
|:--------|:-----------|:-----------------|
| **Credential Harvesting** | • Requests for login details<br>• Spoofed login pages<br>• Urgent account verification requests | • Verification outside the requesting channel<br>• URL inspection<br>• Multi-factor authentication |
| **Financial Information Solicitation** | • Requests for payment details<br>• Unexpected invoice or payment notifications<br>• Banking verification requests | • Independent verification of financial requests<br>• Communication through official channels only<br>• Financial institution verification protocols |
| **Personal Information Mining** | • Excessive questions about personal details<br>• "Getting to know you" games and quizzes<br>• Seemingly innocent biographical questions | • Information sharing limitations<br>• Question motivation assessment<br>• Privacy setting reviews |
| **Document Requests** | • Urgent requests for sensitive documents<br>• Unusual file format requirements<br>• Attachments that require enabling macros | • Independent verification<br>• Secure document sharing methods<br>• No enabling of untrusted macros |

</details>

### Identity and Trust Manipulation

<details>
<summary>Tactics leveraging identity deception or trust exploitation</summary>

| Pattern | Indicators | Defense Strategy |
|:--------|:-----------|:-----------------|
| **Authority Impersonation** | • Claims of being from IT, HR, or executive team<br>• Unusual requests justified by authority position<br>• Pressure to violate normal procedures | • Established verification protocols<br>• Out-of-band confirmation<br>• Reporting unusual authority requests |
| **Trusted Contact Impersonation** | • Messages from "friends" with unusual requests<br>• Slight variations in email addresses or usernames<br>• Communication style inconsistencies | • Secondary verification methods<br>• Direct confirmation via different channel<br>• Behavioral pattern recognition |
| **Platform Alert Spoofing** | • Messages claiming to be system notifications<br>• Alerts about account issues requiring immediate action<br>• Official-looking but slightly off branding | • Direct platform login to verify alerts<br>• Never clicking embedded links in alerts<br>• Checking sender details carefully |
| **Relationship Building for Exploitation** | • Unusually rapid relationship development<br>• Excessive flattery and validation<br>• Quick escalation to requests for assistance | • Relationship progression rate analysis<br>• Request pattern monitoring<br>• External validation of new contacts |

</details>

### Pressure and Manipulation Tactics

<details>
<summary>Tactics creating pressure or emotional manipulation</summary>

| Pattern | Indicators | Defense Strategy |
|:--------|:-----------|:-----------------|
| **Artificial Urgency Creation** | • Extreme time pressure<br>• Threats of negative consequences for delay<br>• "Emergency" situations requiring immediate action | • Enforced cooling-off period<br>• Independent verification of urgency<br>• Established emergency protocols |
| **Emotional Manipulation** | • Appeals to fear, guilt, or sympathy<br>• Claims of dire consequences<br>• Sob stories and crisis narratives | • Emotional response awareness<br>• Third-party perspective seeking<br>• Verification of crisis claims |
| **False Scarcity** | • Limited-time offers<br>• Claims of limited availability<br>• Countdown timers and deadlines | • Market research for reality checks<br>• Competitive offer comparison<br>• Artificial deadline recognition |
| **Isolation Techniques** | • Requests for secrecy<br>• "Don't tell anyone about this"<br>• Discouragement from seeking advice | • Transparency commitments<br>• Consulting trusted advisors<br>• Recognizing isolation red flags |

</details>

### Technical Deception

<details>
<summary>Tactics using technical means for deception</summary>

| Pattern | Indicators | Defense Strategy |
|:--------|:-----------|:-----------------|
| **Malicious Link Distribution** | • Shortened or obscured URLs<br>• Disguised executable files<br>• Links with slight misspellings of legitimate domains | • URL expansion and inspection<br>• Hovering to reveal true destinations<br>• Link scanning tools |
| **Attachment-Based Attacks** | • Unexpected attachments<br>• Unusual file extensions<br>• Requests to enable macros or content | • Attachment scanning<br>• Alternative file sharing methods<br>• No enabling of untrusted content |
| **Fake Website Redirection** | • URLs similar to legitimate sites<br>• Poor grammar or design inconsistencies<br>• Unusual payment methods | • Direct URL entry<br>• Bookmark usage for frequent sites<br>• SSL certificate verification |
| **QR Code Manipulation** | • Unexpected QR codes in communications<br>• Pressure to scan immediately<br>• Limited context for why scanning is necessary | • QR preview tools<br>• Alternative verification methods<br>• Scanning only from trusted sources |

</details>

## Emerging Tactics

<details>
<summary>Recently observed or evolving manipulation strategies</summary>

| Tactic | Description | Detection Approach |
|:-------|:------------|:-------------------|
| **Deepfake Social Engineering** | Using AI-generated voice or video to impersonate trusted contacts | • Verification challenges<br>• Behavioral inconsistency detection<br>• Out-of-band confirmation |
| **Multi-Platform Orchestration** | Coordinated attacks across multiple communication channels | • Cross-platform pattern correlation<br>• Timeline analysis<br>• Request synchronization detection |
| **AI-Assisted Conversation** | Using AI tools to craft highly personalized and persuasive messages | • Linguistic pattern analysis<br>• Consistency evaluation<br>• Knowledge verification challenges |
| **Identity Mapping Exploitation** | Leveraging data from multiple sources to create highly credible impersonations | • Progressive detail verification<br>• Knowledge timeline analysis<br>• Contextual information checks |
| **Legitimate Service Abuse** | Using legitimate platforms and services as vectors for attacks | • Service usage pattern analysis<br>• Context-sensitive link verification<br>• Platform-specific security protocols |

</details>

## Environmental Factors

<details>
<summary>Contextual elements that increase vulnerability</summary>

| Factor | Impact | Mitigation Strategy |
|:-------|:-------|:--------------------|
| **Crisis Situations** | Reduced critical thinking during emergencies | • Pre-established crisis protocols<br>• Trusted emergency contacts<br>• Crisis-specific security rules |
| **Remote Work Isolation** | Less access to informal verification channels | • Virtual verification networks<br>• Regular security check-ins<br>• Dedicated verification channels |
| **High-Pressure Periods** | Increased vulnerability during deadlines or high stress | • Calendar-aware security protocols<br>• Extra verification during key periods<br>• Stress-aware security practices |
| **Organizational Changes** | Confusion during transitions enabling deception | • Change management security protocols<br>• Verified announcement channels<br>• Transition-specific verification requirements |
| **Cultural Differences** | Exploitation of cultural communication norms | • Culture-specific security awareness<br>• Explicit verification norms<br>• Cultural context pattern recognition |

</details>

## Protection Mechanisms

### Pattern Recognition

SherpaAI employs advanced machine learning algorithms to identify linguistic, behavioral, and contextual patterns associated with social engineering attempts:

- **Linguistic Analysis**: Detecting language patterns common in manipulation attempts
- **Behavioral Baselines**: Establishing normal communication patterns to identify anomalies
- **Contextual Awareness**: Understanding the relationship context in which communication occurs
- **Temporal Analysis**: Identifying suspicious timing patterns in communication sequences
- **Cross-Platform Correlation**: Connecting related manipulation attempts across channels

### Intervention Approaches

SherpaAI offers multiple levels of intervention when potential manipulation is detected:

- **Awareness Nudges**: Subtle alerts highlighting potential manipulation indicators
- **Verification Prompts**: Suggested verification steps when suspicious patterns are detected
- **Guided Analysis**: Walking users through assessing the legitimacy of communications
- **Network Alerts**: Optional notifications to trusted contacts about suspicious activities
- **Pattern Reporting**: Contributing to community protection through anonymous pattern sharing

### Education Components

Beyond detection, SherpaAI includes educational elements to build user resilience:

- **Pattern Libraries**: Searchable database of known tactics and defenses
- **Simulation Training**: Safe practice environments for recognizing manipulation
- **Post-Detection Explanations**: Learning opportunities after each detected attempt
- **Vulnerability Assessments**: Personalized feedback on individual vulnerability factors
- **Community Insights**: Crowd-sourced wisdom on emerging tactics and defenses

## Research Methodology

<details>
<summary>How SherpaAI stays current with evolving tactics</summary>

### Data Sources

- **Academic Research**: Partnerships with cybersecurity and social psychology researchers
- **Threat Intelligence**: Integration with established security feeds and databases
- **User Reporting**: Anonymized pattern submissions from the SherpaAI community
- **Dark Web Monitoring**: Tracking emerging tactics discussed in attacker communities
- **Security Community Collaboration**: Active participation in security information sharing

### Pattern Validation

- **Multi-factor Verification**: Requiring multiple indicators before pattern confirmation
- **False Positive Analysis**: Continuous refinement based on feedback
- **Penetration Testing**: Regular testing with new and evolved tactics
- **Expert Review**: Human expertise applied to pattern identification and categorization
- **Effectiveness Metrics**: Measuring real-world protection outcomes

</details>

---

<p align="center">
  <em>This pattern database is continuously updated as new tactics emerge and evolve.</em>
</p> 