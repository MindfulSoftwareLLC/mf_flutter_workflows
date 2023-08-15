# Mindful Software Workflows

[![Mindful Software][logo_white]][mindful_software_link_dark]
[![Mindful Software][logo_black]][mindful_software_link_light]

Developed with 💙 by [Mindful Software][mindful_software_link] 🦄

[![ci][ci_badge]][ci_link]
[![License: MIT][license_badge]][license_link]

---

Reusable [GitHub workflows][github_workflows_link] used internally at [Mindful Software][mindful_software_link].

## Documentation 📝

For official documentation, please visit https://workflows.vgv.dev.

## Quick Start 🚀

To get started, add mindful software workflows to an existing GitHub workflow:

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

For configuration details, check out our [official docs][workflows_docs].

[ci_badge]: https://github.com/MindfulSoftwareOpenSource/mindful_software_workflows/actions/workflows/ci.yml/badge.svg
[ci_link]: https://github.com/MindfulSoftwareOpenSource/mindful_software_workflows/actions
[github_workflows_link]: https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions
[license_badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license_link]: https://opensource.org/licenses/MIT
[logo_black]: https://raw.githubusercontent.com/VGVentures/mindful_software_brand/main/styles/README/vgv_logo_black.png#gh-light-mode-only
[logo_white]: https://raw.githubusercontent.com/VGVentures/mindful_software_brand/main/styles/README/vgv_logo_white.png#gh-dark-mode-only
[mindful_software_link_dark]: https://mindfulsoftware.com#gh-dark-mode-only
[mindful_software_link_light]: https://mindfulsoftware.com#gh-light-mode-only
[mindful_software_link]: https://mindfulsoftware.com
[workflows_docs]: https://workflows.vgv.dev
