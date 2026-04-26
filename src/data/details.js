export const blogDetails = [
  {
    slug: "designing-medication-interfaces",
    heroImage: "/landing/project5.webp",
    sections: [
      {
        type: "text",
        heading: "Why Medication UI Fails Patients",
        body: "Prescription errors kill thousands every year — and bad interface design is often the silent culprit. When nurses, doctors, and pharmacists work inside cluttered, unintuitive dashboards, cognitive load spikes and mistakes follow. The gap between clinical intent and digital reality has never been more dangerous. Studies show that up to 70% of medication errors in hospital settings can be traced back to interface confusion — not human incompetence. Designers who work in healthcare carry a responsibility that most product teams never face: the consequences of a bad microcopy decision aren't a lower conversion rate, they're a patient harmed.\n\nMost medication interfaces were designed by engineers solving database problems, not designers solving human problems. The result is a generation of tools that expose system logic to clinical users who need task clarity. Drop-down menus that list 400 drug variants with no search. Confirmation screens that appear so frequently that staff learn to dismiss them without reading. Alert fatigue so severe that critical warnings get ignored alongside trivial ones.",
        bullets: [
          "Ambiguous dosage fields that accept invalid inputs without warning.",
          "Confirmation dialogs that train users to click through without reading.",
          "Color-coded alerts that fail users with color blindness.",
          "No clear visual hierarchy between urgent and routine information.",
        ],
        extra:
          "The problem isn't that healthcare organizations don't care about design. It's that procurement processes, regulatory requirements, and legacy infrastructure have made it nearly impossible to prioritize the user. Vendors win contracts on feature checklists, not usability scores. And once a system is embedded in a hospital's workflow, switching costs are so high that bad UX becomes permanent infrastructure.\n\nThis is why the shift toward design thinking in clinical settings is so significant. When designers get access to real clinical environments — shadowing nurses during handover, observing pharmacists processing discharge orders, sitting with junior doctors navigating unfamiliar interfaces at 3am — the problems become viscerally clear. And so do the solutions.",
        quote: {
          text: "Good medical UI makes the wrong action structurally harder than the right one.",
          author: "Dr. Kwame Asante, Clinical Systems Lead",
        },
      },
      {
        type: "image",
        src: "/landing/project2.jpg",
        alt: "Medication dashboard wireframe",
      },
      {
        type: "text",
        heading: "Design Principles That Save Lives",
        body: "The best medication interfaces borrow from aviation and nuclear control rooms. Constraint-based design and redundant visual cues aren't UX flourishes — they're safety infrastructure.",
      },
      {
        type: "text",
        heading: "What to Build Next",
        body: "Start with the highest-risk interactions: dosage entry, allergy confirmation, and discharge medication lists. Test with real clinical staff under realistic time pressure — not in a quiet usability lab.",
      },
    ],
  },
  {
    slug: "ux-in-clinical-trial-portals",
    heroImage: "/landing/project2.jpg",
    sections: [
      {
        type: "text",
        heading: "The Problem with Trial Data Portals",
        body: "Clinical trial portals are built for compliance, not people. The result: researchers spend hours hunting for data that should take seconds to find. Poor information architecture, dense tables with no filtering, and zero contextual guidance make these tools feel like filing cabinets from 1998. And yet, the data inside them is some of the most consequential data in medicine — trial results that determine whether a drug reaches patients, whether a treatment gets approved, whether a hypothesis that took a decade to form gets validated or abandoned.\n\nThe irony is sharp. Organizations spend hundreds of millions developing new therapies, then route the data through interfaces so hostile that coordinators maintain parallel spreadsheets just to stay oriented. Shadow systems proliferate — sticky notes, personal spreadsheets, screenshot folders — because the official tool doesn't support the actual workflow. This isn't a user education problem. It's a design failure at institutional scale.\n\nWhat makes trial portals uniquely difficult is the range of users they serve. A principal investigator needs high-level protocol oversight. A trial coordinator needs granular patient-level data entry. A data manager needs export pipelines and audit trails. A sponsor monitor needs deviation tracking and site comparison. Most portals try to serve all of them through a single undifferentiated interface — and end up serving none of them well.",
        bullets: [
          "No progressive disclosure — everything is shown at once.",
          "Export flows buried under five layers of navigation.",
          "Zero onboarding for new trial coordinators.",
          "No role-based views despite radically different user needs.",
        ],
        extra:
          "The consequences aren't just friction. Delayed data entry creates protocol deviations. Missed anomaly flags lead to patient safety events. Coordinators burning out on bad software leave trials understaffed. The UX problem is a clinical operations problem, and increasingly, sponsors and CROs are starting to treat it as one.\n\nThe most forward-thinking trial teams are bringing UX researchers into site assessment visits. Not to evaluate the software — to understand how coordinators actually work, what their mental models are, where their attention goes during a busy clinic day. That research becomes the foundation for a portal redesign that doesn't just look cleaner, but actually maps to how humans move through a complex, high-stakes workflow.",
        quote: {
          text: "When we redesigned the trial dashboard, coordinator time-on-task dropped by 40% in the first month.",
          author: "Sarah Mensah, UX Research Lead",
        },
      },
      {
        type: "image",
        src: "/landing/project3.jpg",
        alt: "Clinical trial dashboard",
      },
      {
        type: "text",
        heading: "What Good Looks Like",
        body: "The best clinical portals treat researchers like power users: keyboard shortcuts, saved filter presets, and inline data annotation. They surface anomalies automatically instead of making users hunt.",
      },
      {
        type: "text",
        heading: "Where to Start",
        body: "Shadow a trial coordinator for a full day before touching Figma. Build for the workarounds people already use — sticky notes, spreadsheets, screenshot folders — and you'll build something they'll actually adopt.",
      },
    ],
  },
  {
    slug: "design-thinking-pharmaceutical-compliance",
    heroImage: "/landing/project3.jpg",
    sections: [
      {
        type: "text",
        heading: "Compliance Doesn't Have to Be Painful",
        body: "Pharmaceutical compliance tools have a reputation for being unusable by design — as if suffering through the interface proves you took it seriously. But that reputation is a legacy of a procurement culture that valued audit trails over usability, and checkbox completion over actual understanding. Design thinking is dismantling that culture one workflow at a time. When you apply empathy-first research to regulatory submissions, adverse event reporting, and change control processes, you find that clarity and compliance aren't opposites — they're the same goal expressed differently.\n\nThe traditional compliance tool was built around the regulator's information needs, not the user's cognitive needs. Every field exists because someone, somewhere, decided it needed to be captured. But fields don't capture themselves. Humans fill them in, under time pressure, in complex clinical environments, often without adequate training. When a form is confusing, people guess. When a workflow is opaque, people skip steps. When an interface demands more attention than the task warrants, people make mistakes — and those mistakes show up in submissions, in audits, in warning letters.\n\nDesign thinking reframes the compliance question. Instead of asking 'what does the regulation require us to capture', it asks 'how does a skilled professional move through this process, and how do we make that movement frictionless while capturing everything we need'. The answer often looks radically different from what a requirements document would produce.",
        bullets: [
          "Plain-language prompts reduce form abandonment by up to 60%.",
          "Visual progress indicators improve completion rates on long submissions.",
          "Contextual help cuts support tickets without adding clutter.",
          "Role-based views reduce cognitive load for specialized users.",
        ],
        extra:
          "One of the most powerful shifts is moving from document-centric to task-centric design. Traditional compliance tools present users with forms — pages of fields that mirror the structure of a regulatory dossier. Task-centric design presents users with jobs to be done: report this event, review this deviation, approve this change. The underlying data captured is identical. But the experience of capturing it is transformed.\n\nThe pharmaceutical companies that have made this shift report not just better usability scores, but measurably better data quality. When people understand what they're doing and why, they do it more carefully. Compliance isn't just about capturing data — it's about capturing accurate data, consistently, across thousands of interactions. Good design is the most reliable mechanism for making that happen.",
        quote: {
          text: "We stopped asking what the regulation requires and started asking how a human moves through this process. The output looks completely different.",
          author: "Ama Owusu, Product Design Director",
        },
      },
      {
        type: "image",
        src: "/landing/project4.jpg",
        alt: "Compliance workflow redesign",
      },
      {
        type: "text",
        heading: "The Regulatory Tightrope",
        body: "The challenge is designing within tight regulatory constraints without letting those constraints become an excuse for bad UX. The regulation doesn't decide how to surface information — the designer does.",
      },
      {
        type: "text",
        heading: "Making It Stick",
        body: "Design thinking in regulated industries only works if legal and compliance teams are in the room from day one. When everyone understands the user's journey, the conversation shifts from 'you can't do that' to 'how do we do that safely'.",
      },
    ],
  },
  {
    slug: "patient-first-digital-experiences",
    heroImage: "/landing/project4.jpg",
    sections: [
      {
        type: "text",
        heading: "Designing for Vulnerability",
        body: "Patients interacting with digital health tools are often scared, in pain, or exhausted. They're not in the mindset to learn new software. They're managing diagnoses they didn't ask for, navigating systems that weren't designed for them, and trying to make decisions with information they don't fully understand. Patient-first design acknowledges this reality and builds for it — stripping away every unnecessary decision, every confusing label, every interaction that assumes a calm, focused, digitally literate user who has time to explore.\n\nThe gap between how healthcare organizations think about their digital products and how patients actually experience them is one of the most consequential design problems in modern life. Organizations see portals, apps, and patient-facing tools as efficiency plays — ways to reduce call center volume, automate appointment booking, push information that used to require a staff member. Patients experience them as gatekeepers standing between them and the care they need. That mismatch produces tools that technically work but functionally fail.\n\nThe research is unambiguous: patients abandon digital health tools at dramatically higher rates than consumer apps. Not because the technology is worse, but because the stakes are higher and the design support is lower. A confused user in an e-commerce checkout leaves money on the table. A confused patient in a medication management app misses a dose, skips a follow-up, or makes a decision based on incomplete information. The consequences of abandonment aren't just business metrics — they're health outcomes.",
        bullets: [
          "Use plain language — no medical jargon without immediate explanation.",
          "Minimize required fields on intake forms; ask only what's needed right now.",
          "Provide clear, human-written next steps after every action.",
          "Design for intermittent use — patients don't log in every day.",
        ],
        extra:
          "Trust is the invisible architecture of every patient-facing product. Every interaction either deposits into or withdraws from a patient's trust account. A clear, human-sounding confirmation email after an appointment booking is a deposit. A cryptic error message with no recovery path is a withdrawal. A form that asks for the same information the patient already provided to their doctor is a withdrawal. A system that remembers their preferences and surfaces relevant information proactively is a deposit.\n\nThe organizations building the best patient digital experiences treat trust as a design material with the same intentionality they bring to color, typography, and layout. They audit every touchpoint for trust signals. They test with patients who have low health literacy, high anxiety, and limited digital experience — not just with the engaged, tech-savvy patients who show up enthusiastically for usability sessions. They treat the hardest-to-reach patients as the design brief, not the edge case.",
        quote: {
          text: "Patients don't abandon apps because they're ugly. They abandon them because the app doesn't understand what they're going through.",
          author: "Dr. Efua Boateng, Digital Health Strategist",
        },
      },
      {
        type: "image",
        src: "/landing/project5.webp",
        alt: "Patient portal interface",
      },
      {
        type: "text",
        heading: "Trust as a Design Material",
        body: "In consumer apps, trust is a nice-to-have. In patient-facing tools, it's the product. Transparent data handling, human-sounding copy, and responsive error states all signal: we see you, we're on your side.",
      },
      {
        type: "text",
        heading: "Beyond Accessibility Compliance",
        body: "WCAG compliance is the floor, not the ceiling. True patient-first design tests with older adults, people with low digital literacy, and users managing chronic conditions who access your product dozens of times a week.",
      },
    ],
  },
];

export function getBlogDetailBySlug(slug) {
  return blogDetails.find((b) => b.slug === slug) ?? null;
}
