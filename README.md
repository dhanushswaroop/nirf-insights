# NIRF Insights

# Build NIRF Insights — Landing Homepage

Create a polished, modern and minimal landing homepage for a web application called **NIRF Insights**, developed as part of a BTech project for the subject **Data Handling and Visualization (DHV)**.

The website is an analytics platform for exploring India's National Institutional Ranking Framework (NIRF) rankings from 2017 to 2025.

The design should closely follow the visual direction described below. Prioritize simplicity, visual hierarchy, usability and low cognitive load. Do not add unnecessary sections or dashboard elements.

## 1. Technology

- React
- TypeScript
- Tailwind CSS
- Lucide icons
- Responsive design
- Reusable components

For now, use static sample data. Do not connect databases, APIs, Gemini or CSV files.

## 2. Overall Design

Create a premium, clean analytics website with:
- White background.
- Soft light-blue sections.
- Navy-blue typography.
- Royal-blue primary buttons.
- Subtle pastel colors for statistic cards.
- Rounded corners.
- Very subtle shadows and borders.
- Generous whitespace.
- Modern sans-serif typography.

Avoid:
- Excessive gradients.
- Too many cards.
- Unnecessary animations.
- Dense information.
- Dark backgrounds.
- Excessive icons.
- Decorative elements that compete with the content.

The result should look like a professional university analytics platform, not a generic admin dashboard.

## 3. Top Navigation Bar

Create a horizontal white navigation bar.

Arrange the elements in this exact order:

**Left side:**
1. A simple blue analytics/bar-chart logo.
2. Brand name: NIRF Insights.
3. A subtle vertical divider.
4. Text: Data Handling and Visualization (DHV).
5. An Explore dropdown button with a grid icon and downward chevron.

The Explore dropdown must contain:
- Home
- Explore Tasks
- AI Assistant

Highlight the currently selected page.

**Right side:**
- Year selector: 2017–2025.
- Category selector: All Categories.

Keep the navigation bar compact, aligned and clean.

## 4. Hero Section

Create a large, light-blue hero section with two columns.

**Left column:**

Small badge:
"NIRF Rankings • 2017–2025"

Main heading:
"Explore, Analyse and Understand India's Higher Education Rankings"

Supporting description:
"Interactive visualizations, statistical insights and AI-powered analysis of NIRF rankings across institutions, categories and years."

Add two buttons:
- Primary blue button: Explore Tasks (grid icon).
- Secondary outlined button: AI Assistant (robot icon and arrow).

Both buttons should be clearly visible and functional.

**Right column:**

Use a high-quality illustration or image of a grand Indian educational institution building, with classical columns and a subtle blue atmosphere.

Include the text "NIRF" on the building if possible.

The image should blend naturally into the light-blue hero background, without looking like a separate image card.

## 5. Statistics Section

Immediately below the hero, create four horizontal statistic cards.

Each card should be compact, with a simple icon, large number and short label.

Card 1:
- 7,432
- Total Institutions
- Blue accent

Card 2:
- 17
- Ranking Categories
- Purple accent

Card 3:
- 9
- Years of Data
- Green accent
- Supporting text: 2017–2025

Card 4:
- 28
- States & UTs
- Orange accent

These are placeholder figures for the visual prototype. Keep the figures easy to replace with actual dataset statistics later.

## 6. Explore Analytical Tasks Section

Below the statistics, create a section titled:

"Explore Analytical Tasks"

Subtitle:
"Eight comprehensive analyses with five visualizations each, built on NIRF data."

Display exactly eight task cards in a 4-column and 2-row grid.

Cards:
- Task 1
- Task 2
- Task 3
- Task 4
- Task 5
- Task 6
- Task 7
- Task 8

Each card should contain:
- A small blue analytical icon.
- Task name.
- Right-facing arrow.

Use white cards with subtle borders and soft shadows.

Keep all eight cards visually consistent. Do not invent task descriptions or analytical titles yet.

Clicking a card should navigate to its corresponding task page. Use placeholder routes for now.

## 7. AI Assistant Highlight

Place a dedicated AI Assistant panel to the right of the analytical task grid.

Use a light-blue background, rounded corners and a subtle decorative blue shape.

Content:

Icon: Robot / AI assistant.

Heading:
"Ask Our AI Assistant"

Description:
"Get instant answers, trend analysis and visualizations using natural language."

Button:
"Open AI Assistant →"

The button should navigate to the AI Assistant page.

## 8. Layout and Spacing

The desktop layout should follow this structure:

- Navigation bar at the top.
- Hero section directly underneath.
- Four statistic cards in one horizontal row.
- Analytical tasks section below.
- Eight task cards on the left.
- AI Assistant highlight on the right.

Maintain consistent margins and alignment throughout.

Do not introduce additional sections such as:
- Recent activity.
- Top-ranked institutions.
- Ranking trend charts.
- Category pie charts.
- News.
- Testimonials.
- Recent searches.
- Saved dashboards.

The homepage must remain focused and uncluttered.

## 9. Functional Requirements

Implement:
- Explore dropdown with Home, Explore Tasks and AI Assistant.
- Working navigation between pages.
- Explore Tasks button.
- AI Assistant button.
- Clickable Task 1–8 cards.
- Year selector.
- Category selector.

Use placeholder pages for routes that have not yet been developed.

Keep the code modular so that Tableau Public dashboards can later be embedded into Task 1–8 pages and the existing NLP assistant frontend can be integrated into the AI Assistant page.

## 10. Final Design Goal

The final homepage should closely resemble a premium, minimal NIRF analytics platform.

The most important elements are:

1. Clear branding: NIRF Insights.
2. Subject identity: Data Handling and Visualization (DHV).
3. Compact Explore dropdown.
4. Strong hero section with an educational institution illustration.
5. Four essential statistics.
6. Eight clearly accessible analytical tasks.
7. A dedicated AI Assistant panel.

Prioritize the visual hierarchy and composition over adding more functionality or content.

Make the homepage visually polished and responsive on desktop, tablet and mobile.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/52da86bd-10b5-4bc5-afde-ab46d4d8e976).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
