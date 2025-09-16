# Storybook

The Storybook is a tool that allows us to visualize and interact with the
components in our design system. It is a great way to test and develop
components in isolation, and to document them.

## Who will use storybook

We can group the users of Storybook into two categories:

- factorial's developers and designers
- f0 developers and designers

Most of the content is shared content for both groups, but for the f0 developers
and designers needs to know more about the components internal.

Check the next sections for futher information

## Internal stories

The objective is to write documentation as much as possible, and as many
component have subcomponents is a good practice to document the subcomponents as
well, but as we want to provide concise information, avoiding anything
unnecessary for the ones are not developing `f0` we will use the `internal` tag
to hide the content from the public.

The stories with this tags will not shown in the sidebar in the public build,
but they will be available running storybook in local.

## No-sidebar stories

Some stories are used to provide context or sections to other stories and we
don't want to show then in the sidebar in any case.

The stories with the tag `no-sidedar` will not shown in the sidebar nor the
public build, nor the local build.
