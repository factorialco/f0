export type UrlString = `http://${string}` | `https://${string}`

export type DataAttributes = {
  [key: `data-${string}`]: string | undefined
}

/**
 * Props for components that support test identifiers.
 *
 * @description
 * The `testId` prop renders as a `data-testid` attribute on the component's
 * root element. This enables reliable element selection in automated tests
 * using testing libraries like React Testing Library, Playwright, or Cypress.
 *
 * @example
 * ```tsx
 * // Using testId in a component
 * <F0Button label="Submit" testId="submit-button" />
 *
 * // Selecting in tests (React Testing Library)
 * const button = screen.getByTestId('submit-button')
 *
 * // Selecting in tests (Playwright)
 * await page.getByTestId('submit-button').click()
 * ```
 *
 * @remarks
 * - Use descriptive, kebab-case identifiers (e.g., `user-profile-card`)
 * - Prefix with context for uniqueness (e.g., `sidebar-nav-button`)
 * - Avoid using testId for styling or application logic
 * - testId is optional and should only be added when needed for testing
 */
export type TestableProps = {
  /**
   * Test identifier for the component's root element.
   *
   * When provided, renders as `data-testid` attribute on the component's
   * root DOM element for testing purposes.
   *
   * @example
   * ```tsx
   * <F0Card testId="employee-card" title="John Doe" />
   * // Renders: <div data-testid="employee-card">...</div>
   * ```
   */
  testId?: string
}
