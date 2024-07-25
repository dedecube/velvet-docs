---
title: Commit
---

## Commit Message

Dedecube has chosen to adopt the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for commit messages, opting for an unopinionated approach.

### Standard Format

Commit messages should follow the basic format:

`[Type]: [Short Description]`.

Where **Type** can be one of the following:

- **feat**
  - Adding new functionality to your application (e.g., a new API endpoint or UI component).

- **fix:**
  - Resolving issues that affect the functionality or usability of the application (e.g., correcting broken UI elements or server errors).

- **build:**
  - Changes related to the build system or external dependencies  (e.g., adding new dependencies or changing the build scripts).

- **perf:**
  - Optimizing existing features or code to run faster (e.g., optimizing database queries or refactoring code for efficiency).

- **docs:**
  - Updates or additions to the project's documentation  (e.g., improving README or in-code comments).

- **test:**
  - Adds or updates tests, enhancing application reliability.

- **refactor:**
  - Code changes that neither fix a bug nor add a feature. This is purely for code readability or structure, like changing the format of a function or updating variable names.

- **chore:**
  - Routine tasks or maintenance activities that don't affect the functionality of the application (e.g., updates to pubspec.yaml or cleaning up codebase).

- **ci:**
  - Changes specifically for the Continuous Integration system. This could involve changing the CI configuration files or scripts.

- **style:**
  - Changes that do not affect the meaning of the code. These are purely formatting changes, like indentations or sorting imports.

- **revert:**
  - Reverting previous commits. This is used when a certain commit is found to be the cause of a bug or issue and needs to be undone.

### Behaviour Rules

1. **Opt for small**: Frequent, smaller commits are preferred over large, infrequent updates. This makes code review easier and helps in diagnosing issues.

2. **Descriptive and Concise**: Ensure commit messages are descriptive yet concise. For example, "Implement user authentication" is preferable to "Changes".

3. **English**: Use English for commit messages for consistency.

4. **Limited Number of Files**: Each commit should pertain to a single task or bugfix. Avoid bundling unrelated changes in the same commit.
