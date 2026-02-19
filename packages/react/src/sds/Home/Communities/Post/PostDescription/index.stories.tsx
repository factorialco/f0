import type { Meta, StoryObj } from "@storybook/react-vite"

import { PostDescription } from "./index"

const meta: Meta<typeof PostDescription> = {
  component: PostDescription,
  title: "Home/Communities/Post/PostDescription",
  tags: ["autodocs", "experimental"],
}

export default meta

type Story = StoryObj<typeof PostDescription>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-[755px]">
        <Story />
      </div>
    ),
  ],
  args: {
    content: `
  <h1 class="TextEditorTheme__h1">Welcome to Our Text Editor!</h1>
  <h2 class="TextEditorTheme__h2">Overview</h2>
  <h3 class="TextEditorTheme__h3">H3 Example here</h3>
  <p class="TextEditorTheme__paragraph TextEditorTheme__ltr">
    This editor is packed with features to style your text effortlessly. Explore the amazing formatting options, from <span class="TextEditorTheme__textBold">bold</span>, <span class="TextEditorTheme__textItalic">italic</span>, and <span class="TextEditorTheme__textUnderline">underline</span> to more advanced text styles like <span class="TextEditorTheme__textStrikethrough">strikethrough</span> or <span class="TextEditorTheme__textUnderlineStrikethrough">combined underline and strikethrough</span>.
  </p>
  <blockquote class="TextEditorTheme__quote">
    "Text editing made simpler and more beautiful." - <span class="TextEditorTheme__textItalic">A Happy User</span>
  </blockquote>
  <h2 class="TextEditorTheme__h2">Features</h2>
  <p class="TextEditorTheme__paragraph">
    You can include:
    <ol class="TextEditorTheme__ol1">
      <li>Ordered lists with regular numbering.</li>
      <li class="TextEditorTheme__ol2">Sub-lists with upper-alphabet.</li>
      <li class="TextEditorTheme__ol3">Sub-lists with lower-alphabet.</li>
    </ol>
    <ul class="TextEditorTheme__ul">
      <li>Bullet points with custom style.</li>
      <li>More nested lists and styles.</li>
    </ul>
  </p>
  <h3 class="TextEditorTheme__h3">Code Snippets</h3>
  <div class="TextEditorTheme__code" data-gutter="1" data-highlight-language="html">
    <code>
      &lt;div&gt;
        &lt;p&gt;Example Code&lt;/p&gt;
      &lt;/div&gt;
    </code>
  </div>
  <p class="TextEditorTheme__paragraph">
    Use <span class="TextEditorTheme__textCode">inline code formatting</span> for specific keywords.
  </p>
  <h3 class="TextEditorTheme__h3">Special Mentions</h3>
  <p class="TextEditorTheme__paragraph">
    Kudos to our outstanding employees:
    <strong class="mentioned">
      <a href="/employees/1">First Employee</a>
    </strong>
    and
    <strong class="mentioned">
      <a href="/employees/2">Second Employee</a>
    </strong>
    for their consistent excellence.
  </p>
  <p class="TextEditorTheme__paragraph">
    Highlighted text:
    <mark class="TextEditorTheme__mark">Important!</mark>
    Overlapping highlights:
    <mark class="TextEditorTheme__markOverlap">Critical!</mark>
  </p>
  <h3 class="TextEditorTheme__h3">Links and Hashtags</h3>
  <p class="TextEditorTheme__paragraph">
    Reach out via email: 
    <a href="mailto:randomemail@factorial.co" class="TextEditorTheme__link">randomemail@factorial.co</a>
    or use 
    <span class="TextEditorTheme__hashtag">#FactorialHelp</span>.
  </p>
  <p class="TextEditorTheme__paragraph">
    Thanks for using our editor. Happy editing!
  </p>
    `,
  },
}

export const Collapsed: Story = {
  args: {
    ...Default.args,
    collapsed: true,
  },
}

type SkeletonStory = StoryObj<typeof PostDescription.Skeleton>

export const Skeleton: SkeletonStory = {
  decorators: [
    (Story) => (
      <div className="max-w-[755px]">
        <Story />
      </div>
    ),
  ],
  args: {},
  render: () => <PostDescription.Skeleton />,
}
