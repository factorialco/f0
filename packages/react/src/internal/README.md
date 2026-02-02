# Internal

This directory contains **internal components** that are **not exported** from the package public API.

## Purpose

- Components here are used only within the React package (e.g. by exported components or features).
- They are not part of the design system’s public surface and must not be imported by consumers.

## Dependencies

Internal components may depend on:

- **UI components** (`src/ui`)
- **Other internal components** (`src/internal`)
- **Other package areas** (e.g. `src/components`, `src/lib`, etc.)

They are not limited to UI-only dependencies; they can rely on any internal or shared code needed for their behavior.

## Usage

Import internal components only from other code inside this package. Do not re-export them from the package entry points.
