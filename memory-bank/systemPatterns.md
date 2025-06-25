# System Patterns

This document outlines the system architecture, key technical decisions, and design patterns used in the project.

## Architecture

- The project follows a full-stack architecture using SvelteKit.
- Frontend: Svelte components handle the user interface and client-side logic.
- Backend: SvelteKit endpoints (Form Actions or API Routes) handle data persistence, validation, and final calculations.
- Database: PostgreSQL is used for data storage, accessed via Prisma ORM.

## Design Patterns

- **Component-Based Architecture:** The frontend is built using reusable Svelte components (e.g., `SelectionCard`, `PointAllocator`).
- **State Management:** A single writable Svelte store (`characterInProgressStore`) is used to manage the character creation data on the frontend. Derived stores are used for calculated UI values.
- **Backend Validation:** Backend endpoints are responsible for authoritative validation of user input and final calculations, ensuring data integrity.

## Technical Decisions

- **SvelteKit:** Chosen for its full-stack capabilities, allowing for a unified development experience.
- **Melt UI:** Selected for providing accessible, unstyled UI primitives that can be easily styled with TailwindCSS. Requires the `@melt-ui/pp` preprocessor to be configured in `svelte.config.js` for its `use:melt` action to function correctly.
- **TailwindCSS:** Chosen for its utility-first approach to styling, enabling rapid UI development and consistency with the dark mode theme.
- **Prisma:** Selected as the ORM for its ease of use and type safety with TypeScript.
- **Static Rule Data:** Initially stored as TypeScript objects/arrays for simplicity and faster iteration during the MVP phase.

## Component Relationships

- The main character creation page (`src/routes/character-creator/+page.svelte`) contains all the UI and logic for the initial stages (A, B, C) within a single component.
- This page component interacts directly with the `characterInProgressStore` to read and update character data.
- UI components (Melt UI primitives, custom components) are used within the main page component to build the user interface for each section.
- The main page component communicates with the unified backend API endpoint (`src/routes/api/character/progress/complete/+server.ts`) to persist data for the A-B-C sections.

## Critical Implementation Paths

- The character creation flow within the single merged page (Sections A -> B -> C).
- Data persistence via the unified `/complete` API endpoint for the A-B-C data block.
- Backend validation and final calculation process (for the complete character sheet).
- Displaying the finalized character sheet.
