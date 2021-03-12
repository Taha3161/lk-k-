const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[BOT] | Botun destekçileri ve komutları başarıyla yüklendi, işlemler tamamlandı !`
  );
  console.log(`[BOT] | (${client.user.username}) HAZIR KAPTAN STRIGA !
  ‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒`);
  client.user.setStatus("dnd");
  client.user.setActivity("Sarkozy 🧡 Matruka", { type: "WATCHING" }); //// TYPE - WATCHING , PLAYING , LISTENING gibi değiştirilebilir.
  console.log(`ABILERE SELAM STRIGAYLA DEWAM`);
};
