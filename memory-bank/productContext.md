# Product Context

This document describes the purpose and intended functionality of the project from a product perspective.

## Purpose

- This project exists to provide DC20 players with a digital tool for creating Level 1 characters.
- It solves the problem of manually calculating stats and managing choices during the character creation process by providing a guided, automated workflow.

## How it Works

- Users interact with a single, long-form page (`src/routes/character-creator/+page.svelte`) that incorporates the functionality of the original Stages A (Attributes), B (Ancestry), and C (Class).
- Within this page, users make choices (allocate points, select ancestries/traits, select class/features) via input fields, selections, and buttons organized into distinct sections.
- The UI provides real-time provisional feedback on how choices affect stats.
- Data for the A-B-C sections is saved to the database via a single unified API endpoint (`src/routes/api/character/progress/complete/+server.ts`) upon completion of these initial sections, allowing users to resume later.
- Upon completing the final stage (F), the backend performs final calculations and saves the complete character data.
- A dedicated Character Page displays the finalized Level 1 character sheet data.

## User Experience Goals

- Provide a guided, intuitive, and easy-to-follow character creation process.
- Ensure a clean, modern, and visually appealing user interface with a primary dark mode theme.
- Offer real-time feedback and validation to help users understand the impact of their choices and adhere to rules.
- Allow users to save and resume their character creation progress.
- Present the final character sheet data in a clear, structured, and readable format.

## Features

- **Character Creation Wizard (Level 1 MVP: Stages A, B, C):**
    - Stage A: Attribute Point Buy allocation, Prime Modifier determination, foundational stat calculation (Save Masteries, Grit, Jump, Provisional Skill Points).
    - Stage B: Ancestry selection (1 or 2), Ancestry Point allocation for Traits, handling attribute cap overflows with reallocation helper.
    - Stage C: Class selection, Level 1 Class Feature choices (planned for MVP).
    - Visual-only breadcrumbs for progress indication.
    - Real-time frontend validation and provisional stat updates.
    - Data persistence to `CharacterInProgress` table after each stage.
- **Character Page Output:**
    - Displays finalized Level 1 character sheet data from the `CharacterSheetData` table.
    - Structured HTML format with dark mode styling.
- **Data Persistence:**
    - `CharacterInProgress` table for intermediate wizard data.
    - `CharacterSheetData` table for completed character data.
    - Basic resume functionality using browser `localStorage` to store the last edited character ID.
