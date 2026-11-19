import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,ts,jsx,tsx}",
    supportFile: "cypress/support/e2e.ts",
  },
});

// "dev": "next dev -p 5003",
//   "build": "next build",
//   "start": "next start -p 5003",
//   "cypress:open": "npx cypress open",
//   "cypress:run": "npx cypress run",
//   "test:e2e": "start-server-and-test dev http://localhost:5003 cypress:run",
//   "test": "jest",
  "