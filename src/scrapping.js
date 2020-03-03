const getData = require("./getData");

module.exports = async page => {
  const data = [];
  let test = true;
  let count = 0;
  do {
    await page.waitForSelector(".statsTableContainer tr .mainStat");

    data.push(...(await getData(page)));
    let el = await page.$(
      ".paginationContainer.right .paginationBtn.paginationNextContainer:not(.inactive)"
    );

    if (!el) {
      test = false;
    } else {
      await el.click();
      await page.waitFor(200);
    }
  } while (test);
  return data;
};
