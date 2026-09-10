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
    await page
      .getByRole("button", { name: "Collapse all widgets", exact: true })
      .click()
    let ok = await check("collapsed question")
    await page.screenshot({ path: "/tmp/home-composer-collapse.png" })
    if (!ok) throw Error("Composer detached from content")
    await page
      .getByRole("button", { name: "Expand all widgets", exact: true })
      .click()
    if (!(await check("expanded question")))
      throw Error("Expanded detached")
    await page.getByRole("button", { name: "Cancel", exact: true }).click()
    await page
      .getByRole("button", { name: "Collapse all widgets", exact: true })
      .click()
    if (!(await check("collapsed composer")))
      throw Error("Composer detached")
    await page
      .getByRole("button", { name: "Expand all widgets", exact: true })
      .click()
    if (!(await check("expanded composer")))
      throw Error("Composer detached")
  } finally {
    await browser.close()
  }
})()
