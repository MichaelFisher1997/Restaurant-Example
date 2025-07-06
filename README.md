# The Golden Spoon - Restaurant Website

This project is a static restaurant website built with Astro, TailwindCSS, and TypeScript, containerized using Docker and Docker Compose. It includes end-to-end (E2E) tests with Nightwatch.js and Selenium.

## 🌟 Features

-   **Static Site Generation**: Built with Astro for fast performance and SEO.
-   **Modern Styling**: Utilizes TailwindCSS for a utility-first approach to styling.
-   **Type Safety**: Developed with TypeScript for robust and maintainable code.
-   **Containerized Development**: Docker and Docker Compose for consistent development and testing environments.
-   **E2E Testing**: Comprehensive end-to-end tests using Nightwatch.js and Selenium to ensure functionality.

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

-   [Docker](https://www.docker.com/get-started)
-   [Docker Compose](https://docs.docker.com/compose/install/)
-   [Node.js and npm](https://nodejs.org/en/download/) (for running `npm` scripts directly, though most development is Dockerized)

### Setup and Run

1.  **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd Restaurant-Example
    ```

2.  **Build and start Docker containers**:

    This command will build the `dev` (Astro development server), `prod` (Nginx serving production build), and `selenium` (Chrome standalone for E2E tests) services, and start them in detached mode.

    ```bash
    docker-compose up --build -d
    ```

    Wait for the services to become healthy. You can check their status with `docker-compose ps`.

3.  **Access the Development Server**:

    The Astro development server will be accessible at `http://localhost:4321`.

4.  **Access the Production Build**:

    The Nginx-served production build will be accessible at `http://localhost:6543`.

### Running End-to-End Tests

E2E tests are configured to run against the Nginx-served production build (`prod` service) within the Docker network.

To run the tests:

```bash
npm run test:e2e
```

Test reports and screenshots (in desktop resolution) will be generated in the `tests_output/` directory.

## 📂 Project Structure

```
. # Project root
├── public/             # Static assets
├── src/                # Astro source code (pages, components, layouts)
├── tests/              # E2E tests (e.g., e2e/home.test.cjs, e2e/menu.test.cjs)
├── Dockerfile          # Dockerfile for development environment
├── Dockerfile.prod     # Dockerfile for production build
├── docker-compose.yml  # Docker Compose configuration
├── astro.config.mjs    # Astro configuration
├── nightwatch.conf.cjs # Nightwatch.js configuration
├── package.json        # Project dependencies and scripts
├── PLANNING.md         # Project planning and architectural decisions
├── TASK.md             # Task tracking and issues
└── README.md           # This file
```

## 🛠️ Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs Node.js dependencies (for local scripts)|
| `docker-compose up -d`    | Starts Docker services                           |
| `docker-compose up --build -d` | Builds and starts Docker services             |
| `docker-compose down`     | Stops and removes Docker containers              |
| `npm run test:e2e`        | Runs end-to-end tests with Nightwatch.js         |

## 🤝 Contributing

Contributions are welcome! Please refer to `PLANNING.md` and `TASK.md` for project guidelines and current tasks.
