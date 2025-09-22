export const WelcomeMessage = () => {
  return (
    <div className="relative !mt-6 flex flex-col gap-6 overflow-hidden rounded-xl bg-[#2576F2] p-6 ring-1 ring-f1-border after:pointer-events-none after:absolute after:inset-2 after:rounded-md after:border-2 after:border-solid after:border-[#FFFFFF] after:opacity-70 after:content-[''] [&>div]:!text-lg [&>div]:!font-semibold [&>div]:!text-[#FFFFFF]">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 19px,
              #fff 19px,
              #fff 20px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 19px,
              #fff 19px,
              #fff 20px
            )
          `,
        }}
      />
      <div>
        Hey there! Looking for the documentation?
        <br />
        You can find it in the{" "}
        <a
          href="https://f0.factorial.dev/"
          className="!text-lg !font-semibold !text-[#FFFFFF] !underline underline-offset-4"
        >
          f0 documentation site
        </a>
        .
      </div>
      <div>
        Storybook is just our workbench, don&apos;t use this site as a reference
        for documentation!
      </div>
    </div>
  )
}
