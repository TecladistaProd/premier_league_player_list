const writeFile = require("./writeFile");

module.exports = data => {
  const pData = {
    Jogadores: [],
    Nacionalidades: {}
  };

  for (let i = 0; i < data.length; i++) {
    pData.Jogadores.push(data[i]);
    pData.Nacionalidades[data[i].nationality] =
      (pData.Nacionalidades[data[i].nationality] || 0) + 1;
  }

  // console.log("\033[2J");
  // console.log(pData.Jogadores.length);
  // console.log(pData.Nacionalidades);

  writeFile(pData);
};
