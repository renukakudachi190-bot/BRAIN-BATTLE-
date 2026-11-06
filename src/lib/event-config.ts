// ============================================================
// THE BRAIN BATTLE - Event Configuration
// Edit this file to customize all event details.
// ============================================================

export const eventConfig = {
  // ---- EVENT IDENTITY ----
  name: "The Brain Battle",
  tagline: "Think Fast. Compete Hard. Claim the Crown.",
  description:
    "The Brain Battle is an intense 60-minute inter-college quiz and aptitude championship designed for the sharpest minds. Test your logic, knowledge, speed and problem-solving skills in a high-energy face-off. Limited slots available. Register now and prove you have what it takes to be crowned the ultimate Brain Champion!",

  shortDescription:
    "A high-octane 60-minute quiz & aptitude showdown. Only the sharpest minds will survive.",

  category: "Quiz & Aptitude Championship",
  theme: "Dark Intellectual / Neural",

  // ---- DATE & TIME ----
  startDate: "2026-11-07",
  endDate: "2026-11-07",
  startTime: "16:00",
  endTime: "17:00",
  timezone: "IST (Indian Standard Time)",
  displayDate: "7 November 2026",
  displayTime: "4:00 PM – 5:00 PM IST",
  duration: "1 Hour",

  // ---- VENUE ----
  venueName: "CBALC PG Building",
  venueFloor: "4th Floor",
  venueAddress: "CBALC PG Building, 4th Floor",
  venueFull: "CBALC PG Building, 4th Floor",
  isOnline: false,
  googleMapsLink: "",

  // ---- ORGANIZER ----
  organizerName: "Event Management Students",
  organizerEmail: "brainbattle.events@gmail.com",
  organizerPhone: "+91 98765 43210",
  websiteUrl: "",

  // ---- SOCIAL ----
  social: {
    instagram: "https://instagram.com/thebrainbattle",
    whatsapp: "",
    twitter: "",
  },

  // ---- REGISTRATION (Google Form) ----
  registrationUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfuRsYl8njQQ2LQf8vlm_o1---L7gWosk8O96VIoPUmq544aQ/viewform?usp=publish-editor",
  registrationMode: "google-form" as const,
  registrationOpen: true,
  registrationDeadline: "2026-11-07T15:30:00+05:30",

  // ---- BRANDING ----
  colors: {
    primary: "#00E5FF",
    secondary: "#A855F7",
    accent: "#FBBF24",
    background: "#05050A",
    surface: "#0C0C14",
    surfaceHover: "#12121C",
    text: "#F1F5F9",
    textMuted: "#94A3B8",
    border: "#1E293B",
  },

  fonts: {
    heading: "Orbitron, Rajdhani, system-ui, sans-serif",
    body: "Inter, system-ui, sans-serif",
  },

  // ---- CONTENT ----
  about: {
    title: "About The Brain Battle",
    content: `The Brain Battle is not your ordinary quiz. In just 60 minutes, participants will face a rapid-fire mix of logical reasoning, general knowledge, puzzles, and aptitude challenges designed to push mental limits.

Whether you are a quiz veteran or a first-timer with a sharp mind, this is your arena. Compete solo or as part of the energy of a live college event. Only registered participants will be allowed entry.

Secure your spot — seats are limited.`,
  },

  schedule: [
    {
      time: "3:45 PM",
      title: "Reporting & Check-in",
      description: "Arrive early, get your entry confirmed.",
    },
    {
      time: "4:00 PM",
      title: "The Brain Battle Begins",
      description: "60 minutes of intense quiz & aptitude rounds.",
    },
    {
      time: "5:00 PM",
      title: "Results & Closing",
      description: "Winners announced and event concludes.",
    },
  ],

  prizes: [
    {
      place: "1st",
      title: "Brain Champion",
      description: "Trophy + Certificate + Exciting prizes",
      highlight: true,
    },
    {
      place: "2nd",
      title: "Runner Up",
      description: "Medal + Certificate + Prizes",
      highlight: false,
    },
    {
      place: "3rd",
      title: "Second Runner Up",
      description: "Medal + Certificate",
      highlight: false,
    },
  ],

  rules: [
    "Open to college students (bring valid ID).",
    "Event duration is strictly 60 minutes.",
    "Only registered participants will be allowed entry.",
    "Mobile phones must be on silent / flight mode during the event.",
    "Decision of the quiz masters is final.",
    "Respect the venue and fellow participants.",
  ],

  contact: {
    email: "brainbattle.events@gmail.com",
    phone: "+91 98765 43210",
    message: "Have questions? Reach out to the Event Management team.",
  },
} as const;

export type EventConfig = typeof eventConfig;
