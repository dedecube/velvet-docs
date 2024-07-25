---
title: Branch
---

## Branch Strategy

In our Git workflow, branches are organized into fixed and temporary categories. This structure facilitates efficient development cycles and ensures stable code management.

### Fixed Branches

Fixed branches serve as the backbone of your Git workflow, providing a structured environment for code integration and deployment:

- **main**: Production branch, contains code that is currently in production.
- **stage**: Staging branch, contains code that is ready to be moved to production.
- **prestage**: Pre-staging branch, contains code that is in the testing phase.
- **develop**: Development branch, contains code that is under active development.

### Temporary Branches

Temporary branches are created for specific purposes and are typically deleted after their changes are merged into a fixed branch:

- **feature/**: For new features or enhancements. Named after the feature (e.g., `feature/[card-id]-description`).
- **bugfix/**: For bug fixes. Named after the bug being fixed (e.g., `bugfix/[card-id]-description`).
- **hotfix/**: For critical bug fixes that need immediate deployment to production outside of the regular cycle (e.g., `hotfix/[card-id]-description`).
- **chore/**: For routine tasks like dependency updates that do not modify the code functionality  e.g., `chore/[card-id]-description`.
- **improvement/**: For tasks aimed at improving the codebase without adding new features, such as refactoring, performance improvements, security patches, or localization updates (e.g., `improvement/[card-id]-description`).

By adopting this structured naming convention for temporary branches based on Trello card URLs, our team can quickly identify the purpose of each branch and its related task, enhancing the traceability and efficiency of our development process. Please note that including the card-id description is optional but highly recommended for enhanced clarity and traceability within the project.
