---
title: FAQ
next: false
---

## Frequently Asked Questions

Here are some of the most commonly asked questions about our flow, with clear explanations to help guide your project contributions.

### 1. Is it always mandatory to follow commit standard rules?

No, for special cases, like functional merge, it could be possible to not follow rules so that automatic changelog will not includes some unuseful stuff.

### 2. When should I use **chore**?

**Chore** refers to tasks that do not directly modify the application's functionality or its external behavior. They are routine tasks necessary for maintaining the project like:

- Updating `pubspec.yaml`.
- Setting up linters or other development tools.
- Adding new steps to the build process.
- Cleaning up the codebase by removing obsolete code and unnecessary comments.
- Updating `.gitignore` or other configuration files.
- Reorganizing the project structure for better efficiency.
  
These chores are crucial for maintaining the project's infrastructure and ensuring that it runs smoothly, but they do not introduce new features or fix existing bugs.

### 3. What to use when I install a dependency?

Use **build**.
