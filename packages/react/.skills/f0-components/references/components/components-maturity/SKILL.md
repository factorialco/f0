---
name: components-maturity
description: Guidelines for understanding component lifecycle stages (Stable, Experimental, Deprecated). Use this to evaluate component readiness for production and plan migrations.
---

# Components Maturity Model

This skill defines the lifecycle stages of components within the design system to ensure stability and predictable upgrades. Use these definitions to determine the risk level and maintenance requirements of the components you implement.

## Maturity Levels

### Stable
- **Definition**: Production-ready components that follow semantic versioning (SemVer).
- **Usage**: Recommended for all production applications.
- **Guarantee**: API changes only occur in major version updates with provided migration paths.

### Experimental
- **Definition**: Components in the testing and feedback phase.
- **Usage**: Use with caution. Ideal for prototyping or internal tools where rapid iteration is acceptable.
- **Guarantee**: No guarantee of backward compatibility; does not follow semantic versioning. APIs may change without notice.

### Deprecated
- **Definition**: Components slated for removal.
- **Usage**: Avoid in new projects.
- **Action**: Migrate existing usage to newer, stable alternatives as soon as possible.

## Promotion Process: Experimental to Stable

Experimental components transition to Stable once they have been thoroughly tested and user feedback has been incorporated.

- **Checklist**: Promotion happens only after the component completes the internal stability checklist.
- **Migration Support**: The F0 team provides migration guides if API changes occur during the promotion from experimental to stable.

## Best Practices

- **Check Status**: Always verify the maturity status of a component before implementing it in a critical user path.
- **Production Safety**: Prefer Stable components for long-term maintenance and production environments.
- **Isolation**: If using Experimental components, wrap or isolate their implementation to simplify future migrations if the API changes.
- **Migration**: Prioritize replacing Deprecated components during routine maintenance cycles.

For specific component implementations and their individual maturity statuses, see the related skills in the `./references/` directory.