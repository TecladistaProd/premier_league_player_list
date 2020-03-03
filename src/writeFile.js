const fs = require("fs");
const path = require("path");

module.exports = data => {
  let txt = ``;

  txt += "Jogadores\r\n\r\n";
  for (let i of data.Jogadores) {
    txt += `rank: ${i.rank}\r\n`;
    txt += `name: ${i.name}\r\n`;
    txt += `nationality: ${i.nationality}\r\n`;
    txt += `goals: ${i.goals}\r\n\r\n`;
  }

  txt += "\r\nNacionalidades\r\n\r\n";

  for (let i in data.Nacionalidades) {
    txt += `${i}: ${data.Nacionalidades[i]}\r\n`;
  }

  fs.writeFileSync(path.resolve(__dirname, "..", "data.txt"), txt);
};
