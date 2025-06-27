# Project Brief

This document serves as the foundational document for the project, outlining its core requirements, goals, and scope.

## Project Goals

- Create a Level 1 Character Creator for DC20.
- Implement a guided, multi-stage wizard for character creation.
- Display a finalized Level 1 character sheet.
- Persist character data during and after creation.

## Scope

- **Included:**
    - Level 1 Character Creation Page (incorporating functionality of original Stages A, B, C).
    - Character Page Output displaying finalized Level 1 data.
    - Data persistence for in-progress and completed characters using Prisma and PostgreSQL.
    - Frontend UI using SvelteKit, Melt UI, and TailwindCSS.
    - Backend logic for validation and final calculations.
    - Basic resume creation functionality using browser localStorage.
- **Out of Scope for MVP:**
    - Wizard Stages D, E, F.
    - Character Level Up Wizard.
    - Custom Equipment creation.
    - Name Generator.
    - Advanced features like image generation, PDF output, user accounts, sharing characters.
    - Moving static rule data to the database.
    - Interactive breadcrumb navigation.
    - Light Mode theme.

## Key Requirements

- Implement Point Buy system for attributes (Stage A).
- Allow selection of 1 or 2 Ancestries and allocation of Ancestry Points for Traits (Stage B).
- Handle attribute cap overflows during trait selection with a reallocation helper (Stage B).
- Implement Class selection and feature choices for Level 1 (Stage C - planned).
- Store intermediate character data in `CharacterInProgress` table.
- Store final character data in `CharacterSheetData` table.
- Use SvelteKit Form Actions/API routes for backend interactions.
- Implement frontend validation and display provisional stats.
- Implement backend authoritative validation and final calculations.
- Style the application using TailwindCSS dark mode with a specific color palette and Inter font.

## Target Audience

- Players of the DC20 tabletop roleplaying game who want a digital tool to create Level 1 characters.

## Stakeholders

- DC20 players (users).
- Project developers/maintainers.

## Initial Thoughts/Notes

- The project follows a guided wizard flow, breaking down character creation into manageable steps.
- Emphasis on a clean, modern dark mode UI.
- Static rule data is initially hardcoded for simplicity in the MVP.
- Backend is the source of truth for final calculations and validation.
- **Deployment Strategy**: The project will be deployed on Vercel, with a strong emphasis on incremental testing in the production environment to ensure stability and catch issues early. A clean migration to a new SvelteKit project is planned to resolve existing deployment issues.
