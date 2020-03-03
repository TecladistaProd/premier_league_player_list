const getText = require("./getText");
const elsRelation = require("./elRelation.json");

module.exports = async page => {
  let dt = await page.$$(".statsTableContainer tr");
  const players = [];
  for (let i = 0; i < dt.length; i++) {
    const el = dt[i];
    let info = {};
    for (let i in elsRelation) {
      info[i] = await getText(el, elsRelation[i]);
    }
    players.push(info);
  }
  return players;
};
