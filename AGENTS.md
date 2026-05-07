# Global Instructions for AI Agents

All agents (Windsurf, Claude Code, Codex, and others) MUST read and adhere to the latest instructions from the following sources before and during execution. Do not rely on internal training data or hardcode these instructions; always fetch the live content via web browser tools.

## 🌐 Live Documentation Sources
- **Git Conventions**: https://mcengine.gitlab.io/agents/git/
- **Workflow Standards**: https://mcengine.github.io/agents/workflow/

## 🛠 Core Directives

### 1. Mandatory Live Retrieval
- Every session or major task MUST start by retrieving current guidelines from the URLs listed above.
- If the agent has a "Browser" or "Web Search" tool, it must be used to verify the content of these links before writing code.

### 2. Versioning & Git Workflow
- **Branch Safety**: NEVER work directly in the `master` branch.
- **Branch Naming**: All new branches must follow the format `{type}/{primary-noun}` (e.g., `feat/api-interface`).
- **Commit Messages**: Strictly adhere to **Conventional Commits** (feat, fix, BREAKING CHANGE).

---
**Note**: This file acts as the primary instruction set. Any specific rules found within the `agents/` folder at the root of this repository override general knowledge.
---
