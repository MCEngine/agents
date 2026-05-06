# MCEngine Agents Documentation Summary

This repository contains the documentation for MCEngine agents and developer guidelines. Below is a summary of the documentation modules:

- **Main Documentation Hub (`docs/index.html`)**: The entry point for all agent and developer rules, providing links to all sub-modules.
- **Git Conventions (`docs/git/index.html`)**: Outlines strict branch naming (`type/noun`), commit message formats (Conventional Commits), and credential configuration using environment variables.
- **Workflow Guardrails (`docs/workflow/index.html`)**: Establishes critical rules against working directly in the `master` branch and requires checking out compliant branches before starting work.
- **Versioning Strategy (`docs/version/index.html`)**: Defines the release and CI versioning format (e.g., `2026.m.m`), monthly update timelines, and required `gradle.properties` variables.
- **Core Development Rules (`docs/rule/index.html`)**: Specifies architecture standards, requiring `api` sub-modules to be interfaces-only and `common` sub-modules to handle only DB data using pure Java and `CompletableFuture`.
- **SpigotMC Standards (`docs/spigotmc/index.html`)**: Details legacy API support, requiring `Component.translatable()` for player messages and strict thread safety (no blocking on the Main Thread).
- **PaperMC Rules (`docs/papermc/index.html`)**: Focuses on platform-specific text output requirements, emphasizing localized components for players and English for console logs.
- **FoliaMC Architecture (`docs/foliamc/index.html`)**: Sets standards for Folia's regional concurrency, requiring strict concurrent programming and use of Global Threading Entity Schedules.
- **Global UI Components**: Includes common `header.html` (navigation) and `footer.html` (copyright) used across the documentation site.

# URL

## Git Convention

https://mcengine.github.io/agents/git/

This document outlines the developer workflow and commit guidelines for the MCEngine project.

## Workflow

https://mcengine.github.io/agents/workflow/

Establishes critical rules against working directly in the master branch and requires checking out compliant branches before starting work.

## Version

https://mcengine.github.io/agents/version/

Defines the release and CI versioning format, monthly update timelines, and required gradle.properties variables.

## Rule

https://mcengine.github.io/agents/rule/

Specifies architecture standards, requiring api sub-modules to be interfaces-only and common sub-modules to handle only DB data.

## SpigotMC

https://mcengine.github.io/agents/spigotmc/

Details legacy API support, requiring Component.translatable() for player messages and strict thread safety.

## PaperMC

https://mcengine.github.io/agents/papermc/

Focuses on platform-specific text output requirements, emphasizing localized components for players and English for console logs.

## FoliaMC

https://mcengine.github.io/agents/foliamc/

Sets standards for Folia's regional concurrency, requiring strict concurrent programming and use of Global Threading Entity Schedules.
