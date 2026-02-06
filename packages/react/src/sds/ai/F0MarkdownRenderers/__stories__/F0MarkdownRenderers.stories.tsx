import type { Meta, StoryObj } from "@storybook/react-vite"

import { I18nProvider, defaultTranslations } from "@/lib/providers/i18n"

import { Blockquote, Hr, Pre } from "../components/Block"
import { A } from "../components/Link"
import { Li, Ol, Ul } from "../components/Lists"
import { Table, Td, Th } from "../components/Table"
import { Em, H1, H2, H3, P, Strong } from "../components/Typography"

const meta: Meta = {
  title: "AI/F0MarkdownRenderers",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <I18nProvider translations={defaultTranslations}>
        <Story />
      </I18nProvider>
    ),
  ],
}

export default meta
type Story = StoryObj

export const Typography: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <P>
        This is a paragraph with <Strong>bold text</Strong> and{" "}
        <Em>italic text</Em>.
      </P>
    </div>
  ),
}

export const Links: Story = {
  render: () => (
    <P>
      This is a paragraph with a <A href="https://factorial.co">link</A> inside.
    </P>
  ),
}

export const Lists: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <H3>Unordered List</H3>
      <Ul>
        <Li>Item 1</Li>
        <Li>Item 2</Li>
        <Li>Item 3</Li>
      </Ul>

      <H3>Ordered List</H3>
      <Ol>
        <Li>First item</Li>
        <Li>Second item</Li>
        <Li>Third item</Li>
      </Ol>
    </div>
  ),
}

export const Blocks: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <H3>Code Block</H3>
      <Pre>{`const greeting = "Hello, World!";
console.log(greeting);`}</Pre>

      <H3>Blockquote</H3>
      <Blockquote>
        This is a blockquote. It can contain multiple lines of text.
      </Blockquote>

      <H3>Horizontal Rule</H3>
      <Hr />
    </div>
  ),
}

export const TableExample: Story = {
  render: () => (
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Role</Th>
          <Th>Department</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>John Doe</Td>
          <Td>Engineer</Td>
          <Td>Engineering</Td>
        </tr>
        <tr>
          <Td>Jane Smith</Td>
          <Td>Designer</Td>
          <Td>Design</Td>
        </tr>
        <tr>
          <Td>Bob Johnson</Td>
          <Td>Manager</Td>
          <Td>Operations</Td>
        </tr>
      </tbody>
    </Table>
  ),
}
