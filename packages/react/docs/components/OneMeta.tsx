import { Meta, Title, Unstyled } from "@storybook/addon-docs/blocks"

import { ComponentProps } from "react"
import { F0Icon } from "../../src/components/F0Icon"
import { Check, Cross, ExternalLink } from "../../src/icons/app"

type OneMetaProps = {
  title: string
  maturity: {
    /**
     * Direct link to Figma Component or null if it doesn't exist
     */
    figmaComponent: string | null
    /**
     * Whether the component has unit and screenshot tests
     */
    tested: boolean
    /**
     * Whether the component adjusts layout or behavior
     * based on the size or orientation of the display or viewport
     */
    responsive: boolean
    /**
     * Whether the component meets the  AA accessibility level
     */
    accessibility: boolean
    /**
     * Whether the component contains full documentation
     * (false if it has the basic one)
     */
    documentation: boolean
    /**
     * Whether the component exposes the composable API.
     * It is a low-level API allowing the users to reconstruct the component using
     * exposed blocks
     */
    composableApi: boolean
  }
} & Omit<ComponentProps<typeof Meta>, "title">

const Status = ({ value }: { value: boolean }) => (
  <div>
    <F0Icon
      icon={value ? Check : Cross}
      className={value ? "translate-y-[1px]" : "translate-y-0.5"}
    />
  </div>
)

export const OneMeta = ({ title, maturity, ...rest }: OneMetaProps) => {
  return (
    <>
      <Meta {...rest} />
      <Title>{title}</Title>
      <Unstyled>
        <div className="mb-6 flex flex-wrap items-center gap-2.5 *:flex *:items-center *:text-sm">
          {maturity.figmaComponent && (
            <a
              href={maturity.figmaComponent}
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              Figma <F0Icon icon={ExternalLink} />
            </a>
          )}
          {maturity.figmaComponent === null && (
            <div>
              Figma <Status value={false} />
            </div>
          )}
          <div>
            Documentation <Status value={maturity.documentation} />
          </div>

          <div>
            Tested <Status value={maturity.tested} />
          </div>
          <div>
            Responsive <Status value={maturity.responsive} />
          </div>
          <div>
            Accessibility <Status value={maturity.accessibility} />
          </div>
          <div>
            Composable API <Status value={maturity.composableApi} />
          </div>
        </div>
      </Unstyled>
    </>
  )
}
