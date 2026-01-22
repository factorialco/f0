import type { Meta, StoryObj } from "@storybook/react-vite"

import ChevronRight from "@/icons/app/ChevronRight"

import {
  Card,
  CardComment,
  CardContent,
  CardFooter,
  CardHeader,
  CardInfo,
  CardLink,
  CardSubtitle,
  CardTitle,
} from "../Card"

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Card>

export const Basic: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Basic Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is a basic card with a title and content.</p>
      </CardContent>
    </Card>
  ),
}

export const WithSubtitle: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Subtitle</CardTitle>
        <CardSubtitle>This is a subtitle</CardSubtitle>
      </CardHeader>
      <CardContent>
        <p>This card includes a subtitle below the main title.</p>
      </CardContent>
    </Card>
  ),
}

export const WithInfo: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Info</CardTitle>
        <CardInfo content="This is some helpful information about the card" />
      </CardHeader>
      <CardContent>
        <p>This card includes an info icon with a tooltip.</p>
      </CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This card includes a footer section.</p>
      </CardContent>
      <CardFooter>
        <CardLink title="View more" icon={ChevronRight} />
      </CardFooter>
    </Card>
  ),
}

export const WithComment: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Comment</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This card includes a comment section.</p>
      </CardContent>
      <CardComment>42</CardComment>
    </Card>
  ),
}

export const Clickable: Story = {
  render: () => (
    <Card onClick={() => alert("Card clicked!")}>
      <CardHeader>
        <CardTitle>Clickable Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This card is clickable and will show an alert when clicked.</p>
      </CardContent>
    </Card>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Card disabled>
      <CardHeader>
        <CardTitle>Disabled Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This card is disabled and cannot be clicked.</p>
      </CardContent>
    </Card>
  ),
}

export const Complete: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Complete Card Example</CardTitle>
        <CardSubtitle>With all features</CardSubtitle>
        <CardInfo content="This is a complete example showing all card features" />
      </CardHeader>
      <CardContent>
        <p>This card demonstrates all available components and features.</p>
      </CardContent>
      <CardFooter>
        <CardLink title="View more" icon={ChevronRight} />
      </CardFooter>
      <CardComment>99+</CardComment>
    </Card>
  ),
}
