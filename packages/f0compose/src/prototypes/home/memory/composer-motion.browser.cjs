const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright")
;(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  })
  try {
    const page = await browser.newPage({
      viewport: { width: 1800, height: 1100 },
    })
    await page.goto(
      process.env.HOME_QA_URL || "http://127.0.0.1:5181/p/home"
    )
    await page.waitForTimeout(2300)
    async function check(label) {
      await page.waitForTimeout(500)
      const t = await page.locator("[data-hybrid-target]").boundingBox()
      const c = await page.locator("[data-hybrid-composer]").boundingBox()
      const delta = c.x + c.width / 2 - (t.x + t.width / 2)
      console.log(label, { t, c, delta })
      return Math.abs(delta) < 2
    }
    await check("initial question")
    async function motion(label) {
      const samples = await page.evaluate(async (label) => {
        const rows = []
        const button = document.querySelector(
          '[aria-label="' + label + '"]'
        )
        button.click()
        for (let i = 0; i < 35; i++) {
          await new Promise(requestAnimationFrame)
          const t = document
              .querySelector("[data-hybrid-target]")
              .getBoundingClientRect(),
            c = document
              .querySelector("[data-hybrid-composer]")
              .getBoundingClientRect()
          rows.push({
            frame: i,
            delta: c.x + c.width / 2 - t.x - t.width / 2,
          })
        }
        return rows
      }, label)
      console.log(label, Math.max(...samples.map((s) => Math.abs(s.delta))))
      if (samples.some((s) => Math.abs(s.delta) > 2))
        throw Error("Transition desynchronized")
    }
    await motion("Collapse all widgets")
    await motion("Expand all widgets")
    await page.getByRole("button", { name: "Cancel", exact: true }).click()
    await page
      .locator("[data-hybrid-composer] textarea")
      .fill("Keep this draft")
    await motion("Collapse all widgets")
    await motion("Expand all widgets")
    if (
      (await page
        .locator("[data-hybrid-composer] textarea")
        .inputValue()) !== "Keep this draft"
    )
      throw Error("Lost draft")
  } finally {
    await browser.close()
  }
})()
