---
sidebar_position: 1
---

# Overview

[GitHub workflows][github_workflows_link] are configurable, automated processes that can run at various points during the development process. For example, a workflow can run when a pull request is created or updated to perform various code quality checks before allowing the changes to be merged.

Mindful Software Workflows is a collection of workflows that we use at VGV to run automated checks in our CI pipelines. While built by VGV to be used internally, they can be used by anyone.

## Quick Start 🚀

To get started, add Mindful Software Workflows to an existing GitHub workflow:

```yaml
# A reusable workflow for Dart packages
uses: MindfulSoftwareOpenSource/mindful_software_workflows/.github/workflows/dart_package.yml@v1

# A reusable workflow for Flutter packages
uses: MindfulSoftwareOpenSource/mindful_software_workflows/.github/workflows/flutter_package.yml@v1

# A reusable workflow for ensuring commits are semantic
uses: MindfulSoftwareOpenSource/mindful_software_workflows/.github/workflows/semantic_pull_request.yml@v1

# A reusable workflow for verifying package scores on pub.dev
uses: MindfulSoftwareOpenSource/mindful_software_workflows/.github/workflows/pana.yml@v1

# A reusable workflow for running a spell check
uses: MindfulSoftwareOpenSource/mindful_software_workflows/.github/workflows/spell_check.yml@v1

# A reusable workflow for publishing Flutter packages
uses: MindfulSoftwareOpenSource/mindful_software_workflows/.github/workflows/flutter_pub_publish.yml@v1

# A reusable workflow for publishing Dart packages
uses: MindfulSoftwareOpenSource/mindful_software_workflows/.github/workflows/dart_pub_publish.yml@v1

# A reusable workflow for publishing Mason bricks
uses: MindfulSoftwareOpenSource/mindful_software_workflows/.github/workflows/mason_publish.yml@v1

```

[github_workflows_link]: https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions
[mindful_software_link]: https://mindfulsoftware.com
