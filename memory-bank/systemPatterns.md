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
- **Melt UI:** Selected for providing accessible, unstyled UI primitives that can be easily styled with TailwindCSS.
- **TailwindCSS:** Chosen for its utility-first approach to styling, enabling rapid UI development and consistency with the dark mode theme.
- **Prisma:** Selected as the ORM for its ease of use and type safety with TypeScript.
- **Static Rule Data:** Initially stored as TypeScript objects/arrays for simplicity and faster iteration during the MVP phase.

## Component Relationships

- The main wizard component manages the current stage and renders the appropriate stage component (e.g., `StageA_Attributes.svelte`, `StageB_Ancestry.svelte`).
- Stage components interact with the `characterInProgressStore` to read and update character data.
- UI components (Melt UI primitives, custom components) are used within stage components to build the user interface.
- Frontend components communicate with backend endpoints via SvelteKit Form Actions or API Routes to persist data.

## Critical Implementation Paths

- The character creation wizard flow (Stages A -> B -> C).
- Data persistence after each wizard stage.
- Backend validation and final calculation process.
- Displaying the finalized character sheet.
