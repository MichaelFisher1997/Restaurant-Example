# Purpose

Track active tasks, milestones, backlog, and discoveries during the project lifecycle. Enable easy updates and status tracking via AI or manual edits.
Current Tasks

- [x] Setup Astro project skeleton with TypeScript and TailwindCSS
- [x] Create menu page with sample food items and images
- [x] Add opening times section with responsive layout
- [x] Add contact phone number with clickable link
- [x] Write Dockerfile for local development with hot reload
- [x] Write Dockerfile.prod for optimized production build
- [x] Create docker-compose.yml for local testing environment
- [x] Implement full unit test coverage for all components and utilities
- [x] Setup linting and formatting with ESLint and Prettier
- [x] Write E2E tests with Nightwatch and Selenium to properly test the site within Docker containers
- [ ] Improve color scheme to enhance text readability against dark background image (2025-07-06)
- [ ] Configure CI pipeline to run tests and build Docker images

Milestones

Basic static site deployed locally with Astro + Tailwind + TS

Dockerized local development environment running smoothly

Production build Dockerfile producing optimized static assets

Full unit test coverage with passing tests

    Final review and documentation

Backlog

Add contact form (optional enhancement)

Add animations/transitions for UI polish

Add multilingual support

Current Issues

- [ ] Text readability issues with current color scheme against the dark background image

Discovered / Notes

- Need to decide on unit test framework: Vitest preferred for Astro
- Installed `happy-dom` for Vitest environment.
- Consider caching Docker layers for faster rebuilds
- Verify phone number formatting for international users
- Docker networking issues with Selenium container and dev service hostname need to be resolved for E2E tests

AI Prompt Guidance

    “Update TASK.md to mark [task] as done and add [new task]”

    Automatically generate subtasks when new features are proposed

    Summarize progress and suggest next logical task
