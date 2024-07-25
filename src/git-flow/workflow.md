---
title: Workflow
---

## Workflow

This document outlines the standard workflow for development within our projects, ensuring that all team members follow a consistent process from initial development to production release.

### 1. Start Development

Always start from the `develop` branch:

```bash
git checkout develop
git pull origin develop
```

### 2. **Create Branch**

For new features or bug fixes, create a new branch from develop:

```bash
git checkout -b [feature/bugfix]/[task-name]
```

### 3. **Development and Commit**

Develop your code locally and commit changes using a structured commit message that adheres to the Conventional Commits standard:

```bash
git add .
git commit -m "[type](scope): [Commit Description]"
```

Refer to the [Standard Format](./commit.md) section for a complete list of type and visit the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for pratical examples!

### 4. **Push and Pull Request**

Once your feature or fix is ready and committed:

```bash
git push origin [branch-name]
```

Create a Pull Request (PR) targeting the develop branch. Ensure your PR title and description are descriptive, reflecting the changes made.

### 5. **Code Review**

Code review is divided in two distinct phases:

- Review Process: Team members review the code in the PR.
- Modifications: If necessary, make any requested changes and update the PR. Repeat the review process until the code is approved.

### 6. **Merge to Develop**

After the PR is reviewed and approved by the team, merge it into `develop`.

### 7. **Release to Prestage/Stage**

Create a PR from `develop` to `prestage`, then to `stage`.

### 8. **Release to Production**

Create a PR from `stage` to `main`.
