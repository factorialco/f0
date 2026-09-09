# Personal agent entry

Built on `feat/f0compose` at `2264235f5`, reusing its Home, navigation, People, Calendar, widgets, agent screens and scripted conversation store.

## Behavior

- Home keeps its existing background, widgets and navigation. Sending a message replaces only the central greeting and Needs you content with the conversation. Closing restores that content.
- Opening Hub changes only the navigation menu. Choosing a destination, opening Calendar or opening an Inbox task minimizes the agent into a reserved bottom strip.
- The page has its own inset frame. The strip shares the navigation background. The menu divider appears only on Home.
- The entry is an F0 ghost button with a 20px animated icon and larger eyes. Clicking it expands the same mounted composer over the page with a medium shadow; the page does not resize.
- One suggestion reflects the current page/profile and sends immediately when clicked. There is no suggestion overflow menu.
- The composer contracts from 176px to 136px from its top edge when typing or conversing. Text and action controls are anchored to the bottom. Actions use F0's medium buttons, matching One.
- Outside Home, sending opens the conversation on the right. Only the expand control switches to the large conversation view, retaining navigation. Closing restores the page and compact entry.
- Drafts and the mounted textarea survive layout changes. Conversation history uses the existing store. Agents retains its specialized brief composer.

## Validation and limitations

TypeScript and prototype static checks pass. Browser checks exercised Home, People, Calendar and Inbox, direct suggestion submission, right-side and expanded conversations, closing and draft retention. The Home inline conversation was verified to preserve widget/composer bounds and use a transparent background. The final compact conversation height was observed at 136px; continuous animation timing still merits design review.

All responses remain scripted prototype data. Attachment/audio actions show their prototype limitation. Hub destinations without existing content use explicit empty states. No shared shell, F0 library components or build configuration are changed.
