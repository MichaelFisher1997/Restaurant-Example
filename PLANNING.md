Purpose

Provide a clear, high-level vision and technical blueprint for the demo restaurant website project. This includes architectural decisions, technology choices, development tools, and project constraints to guide implementation and AI assistance.
Vision

Build a performant, responsive, and visually appealing demo restaurant website where customers can:

    Browse food menus with descriptions and images

    View opening hours clearly

    Easily find a contact phone number to book tables

    Experience fast load times and smooth interactions

Architecture Overview

    Static site generated with Astro for fast performance and SEO benefits

    UI and styling via TailwindCSS for rapid, customizable styling

    Logic and interactivity coded with TypeScript for type safety and maintainability

    Static content and images organized for easy updating and scalability

    Local development and production builds containerized via Docker

    Two Dockerfiles:

        Dockerfile for local development with hot reload

        Dockerfile.prod for optimized production build

    Docker Compose setups to orchestrate local builds and tests easily

Technology Stack

    Astro (Static site generator)

    TypeScript (Strongly typed frontend logic)

    TailwindCSS (Utility-first CSS framework)

    Docker & Docker Compose (Containerization and local orchestration)

    Testing: Full unit test coverage using preferred framework (e.g., Vitest, Jest)

Tools

    VSCode with TypeScript tooling

    Node.js & npm/yarn package manager

    Docker Desktop or CLI for container management

    Git for version control

    Linter and formatter (ESLint, Prettier) for code quality

    Test runner integrated in CI pipeline

Constraints

    Must be purely static (no backend required)

    Phone number is a clickable tel: link

    Responsive design for mobile and desktop

    Docker setup must allow easy switching between dev and prod

    Tests should cover UI components and utility functions

Current Challenges

    Improving the color scheme to better suit the new background image and enhance text readability against dark backgrounds

Future Tasks

    Configure E2E testing with Nightwatch and Selenium to properly test the site within Docker containers
    
    Improve mobile responsiveness across all pages