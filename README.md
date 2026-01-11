# SMKN 6 Malang Website Refamp

![image](demo/image.png)

This project is a redesign of the SMKN 6 Malang website using Next.js 14+, Tailwind CSS, and Framer Motion/GSAP.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🐳 Docker Support

This project includes Docker configuration for easy deployment.

### Build and Run with Docker Compose

To build and run the application in production mode using Docker Compose:

```bash
docker compose up --build -d
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Manual Docker Build

```bash
docker build -t smkn6-web .
docker run -p 3000:3000 smkn6-web
```

## 🛠️ Known Issues & Troubleshooting

### TypeScript Errors (`estree`, `json-schema`, `node`)

You might encounter errors like:

- `Cannot find type definition file for 'estree'`
- `Cannot find type definition file for 'node'`

**Solution:**
These errors usually occur when the TypeScript compiler cannot find the necessary type definitions. Running `npm install` should verify that `@types/node` and other dev dependencies are correctly installed. Resaving the `tsconfig.json` or restarting the VS Code TypeScript server often resolves this.

### Tailwind CSS Lint Warnings

You might see warnings like:

- `The class bg-gradient-to-t can be written as bg-linear-to-t`

**Explanation:**
We are using a newer version of Tailwind CSS (v4) which standardizes gradient utility names to match CSS standard properties (e.g., `linear-gradient`).
**Note:** Some of these warnings might appear for files (like `teater/page.tsx`, `bahasa-jerman/page.tsx`) that have been removed or refactored out of the current project structure. If the files do not exist, these warnings can be safely ignored as they may be stale reportings from the IDE.

## 📂 Demo

The `demo/` folder is reserved for showcasing the application's appearance (screenshots, simple static demos) for reporting purposes.

## 🤖 CI/CD

A Github Actions workflow is configured in `.github/workflows/ci.yml` to automatically Lint and Build the project on push to `main` or `feature/*` branches.
