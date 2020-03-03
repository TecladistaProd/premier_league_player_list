const puppeteer = require("puppeteer");
const scrapping = require("./src/scrapping");
const processData = require("./src/processData");

async function accessWeb() {
  let data = null;
  let browser;
  try {
    browser = await puppeteer.launch({
      defaultViewport: {
        width: 1920 * 2,
        height: 1080 * 2
      }
    });
    const page = await browser.newPage();
    await page.goto(
      "https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1"
    );
    await page.waitForSelector(
      ".paginationContainer.right .paginationBtn.paginationNextContainer"
    );
    await page.waitForSelector(".statsTableContainer tr .mainStat");
    data = await scrapping(page);
    await browser.close();
  } catch (err) {
    console.log("An error occurred\r\n" + err.message);
    console.log(err.stack);
    process.exit(1);
  }
  await processData(data);
}

accessWeb();
