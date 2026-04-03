# HireJPS.com -- Portfolio Site Reference

Captured 2026-04-04. Reference for building RA's portfolio site (ras-portfolio).

## Site Owner
- **Name:** Jerick P. Salinas
- **Location:** Naga City, Philippines
- **Email:** jerickpsalinas@gmail.com
- **Socials:** Upwork, Fiverr, LinkedIn, GitHub (@jerickpsalinas)
- **Positioning:** "AI Automation Specialist | Web Designer | GoHighLevel CRM Expert"

## Tech Stack
- **Framework:** React (SPA, Vite build)
- **Styling:** Tailwind CSS (dark theme, red accent color)
- **Hosting:** Likely Vercel or Netlify (static SPA)
- **Booking:** Calendly integration (30-min discovery call)
- **AI Chat:** "Talk to JPS AI" floating button (custom chatbot)
- **i18n:** 12 languages (EN, ES, DE, FR, NL, IT, BR, SA, CN, JP, PH, KR)
- **Dark mode:** Toggle in nav

## Site Structure (7 sections, single page)

### 1. Hero (#home)
- "Available for Projects" green badge (status indicator)
- Large name: "Jerick P. Salinas"
- Subtitle: "AI Automation Specialist | Web Designer | GoHighLevel CRM Expert"
- Bio paragraph (1 paragraph, ~50 words)
- CTAs: "View My Work" + "View Resume"
- Professional photo (suit, arms crossed, right side)
- Floating tech icons (code, globe, settings, link, etc.) animated around photo
- "SCROLL" indicator at bottom center

### 2. Services (#services)
- Section title: "Services Offered"
- Subtitle: value prop summary
- 4 cards in 2x2 grid:
  1. **AI Automation Specialist** -- workflows, chatbots, process automation, GHL integration
  2. **Web Designer** -- responsive sites, landing pages, e-commerce, UX
  3. **GoHighLevel CRM Setup & Optimization** -- white-label, pipelines, funnels, AI conversations
  4. **Full-Stack Growth Solutions** -- combines all three: CRM + websites + funnels
- Each card: red icon, bold title, detailed paragraph

### 3. Experience (#experience)
- Section title: "Work Experience"
- Timeline layout (vertical line with dot)
- Single entry:
  - **Sep 2018 - Dec 2025:** Senior Coordinator Data Process Support, Unisys Managed Services Corporation
  - Description paragraph + 7 bullet points

### 4. Projects (#works)
- Section title: "Previous Projects"
- Filter tabs: All | Zapier | Make.com | n8n | GoHighLevel | Web Design
- Project cards (2 per row):
  1. **Smart Lead Automation** (Zapier) -- lead enrichment, priority splitting, real-time alerts
     - Tags: Youform, Apollo, Google Sheets, Gmail, Slack
  2. **End-to-End Lead Management** (Zapier) -- Asana-Gmail workflow, follow-ups, onboarding
     - Tags: Asana, Gmail, Google Drive
  3. **AI Content Repurposing** (Zapier) -- long-form to social media assets
     - Tags: Google Drive, Facebook, Discord
  4. **Auto Sort Gmail Attachments** (Make.com) -- Gmail to Drive automation
     - Tags: Gmail, Google Gemini AI, Google Drive, Google Sheets
  5. **Automated Export Xero to Asana** (Make.com) -- bank transactions to task management
     - Tags: Asana, Xero, Google Sheets
- Each card: workflow screenshot, platform label, title, description, "Read more", tech tags
- "View Workflow" button on each

### 5. Certificates (#certificates)
- Section title: "Certificates & Training"
- 6 certificate cards (3 per row) with actual certificate images:
  1. HighLevel CRM Full Training -- Technical Virtual Assistants PH, Jan 7, 2026
  2. No Code Automation with Make.com -- Dec 18, 2025
  3. AI Automation with n8n -- Dec 29, 2025
  4. Prompt Engineering -- Dec 18, 2025
  5. WordPress Web Page Building -- Jan 5, 2026
  6. No Code Automation with Zapier -- Dec 17, 2025
- Each has skill tags underneath (e.g., "CRM & Pipeline Management", "Sales Funnels")

### 6. Pricing (#pricing)
- Section title: "Pricing Plans"
- 4 pricing cards side by side:
  1. **Starter** -- $499/one-time (3 workflows, basic CRM, email support, 1 revision, 7-day)
  2. **Professional** -- $1,299/one-time (10 workflows, full CRM, API integrations, AI features, priority support, 3 revisions, 14-day) -- "Most Popular" badge
  3. **Enterprise** -- Custom (unlimited, custom integrations, dedicated support, strategy, training, maintenance)
  4. **Web Design** -- $799/one-time (WordPress/Elementor, mobile responsive, SEO, contact forms, speed optimization, 2 revisions, 10-day)
- Center overlay: "High Value. Honest Pricing. Revealing Soon."

### 7. Contact (#contact)
- Section title: "Let's Connect"
- Two CTAs: "Book a Call" (Calendly) + "Send Message" (Facebook Messenger)
- "Free 30-minute discovery call - No commitment required"
- 3 info cards: Email | Facebook (JPS Services) | Location (Naga City)
- Social icons: Upwork, Fiverr, LinkedIn, GitHub

### Footer
- JPS logo + copyright

### Floating Elements
- "Talk to JPS AI" chat button (bottom right, persistent)
- Scroll-to-top button (bottom left)
- Language selector popup on first visit

## Design Patterns
- **Color scheme:** Dark background (#0e0e0e), red accent (#c72525), white text
- **Typography:** Bold italic serif for section titles, clean sans-serif for body
- **Cards:** Dark cards with subtle border, slight glow on hover
- **Background:** Floating tech icons (code brackets, globe, settings, link icons) as decorative elements
- **Animations:** Icons float/rotate around hero photo
- **Layout:** Full-width sections, max-width content container
- **Nav:** Sticky top nav with section links, active section highlighted in red

## What RA Can Adapt

### Same structure, different stack:
| JPS | RA's Version |
|-----|-------------|
| AI Automation (Zapier/Make/n8n) | AI Automation (Claude Code, Python, Agentic Systems) |
| Web Design (WordPress) | Web Design (React/Vite, Tailwind, Vercel) |
| GoHighLevel CRM | Meta Ads + Messenger Automation |
| Full-Stack Growth | Full AI-Powered Sales Funnel |

### Projects RA can showcase:
1. **DuberyMNL Content Pipeline** -- end-to-end caption > image > post automation
2. **AI Image Generation System** -- NB2/kie.ai prompt engineering + batch generation
3. **Meta Ads Automation** -- dayparting, creative staging, performance analysis
4. **Family Dashboard** -- real-time family life tracker with auto-deploy
5. **Messenger Chatbot** -- AI-powered customer engagement bot
6. **EA System** -- Claude Code as executive assistant with persistent memory

### Tools/skills to learn (from JPS):
- **n8n** -- open-source workflow automation (already in backlog)
- **Make.com** -- visual automation builder (similar to what RA does in Python)
- **GoHighLevel** -- all-in-one CRM for agencies (white-label opportunity)
- **Zapier** -- mainstream automation (easy to learn, good for client work)

## Screenshots
All saved in `.tmp/hirejps-ref/` (DuberyMNL repo):
- 01-hero.png -- Hero section with professional photo
- 02-services-top.png -- Services heading + first 2 cards
- 02-services-bottom.png -- GHL + Full-Stack cards
- 03-experience.png -- Work experience timeline
- 04-projects-top.png -- Projects heading + filter tabs
- 04-projects-cards.png -- First 2 project cards
- 04-projects-cards2.png -- More project cards
- 05-certificates.png -- Certificates with images
- 06-pricing-top.png -- Pricing heading + card tops
- 06-pricing-cards.png -- "High Value. Honest Pricing." overlay
- 07-contact.png -- Contact section with CTAs
- 08-footer.png -- Footer + social links
- full-text.txt -- Complete page text content
- sections-map.json -- Section structure data
