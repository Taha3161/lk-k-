const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = "!";

  const codare = new Discord.MessageEmbed()
    .setAuthor(``)
    .setTitle(`Moderasyon Komutlarım`)
    .setDescription(
      `<a:Matrukaayar:809415455206670336> .ban = Bir Kişiyi Banlarsınız. \n<a:Matrukaayar:809415455206670336> .uyarı = Bir Kişiyi Uyarırsınız. \n<a:Matrukaayar:809415455206670336> .afk [sebep] = Afk Olursunuz. \n<a:Matrukaayar:809415455206670336> .sil [0-100] = Mesajları Silersiniz \n<a:Matrukaayar:809415455206670336> .tagsay = Tagdaki Üyeleri Görürsünüz. \n<a:Matrukaayar:809415455206670336> .jail = Bir Kişiyi Jaile Atarsınız. \n<a:Matrukaayar:809415455206670336> .mute = Bir Kişiye Mute Atarsınız. \n<a:Matrukaayar:809415455206670336> .unmute = Bir Kişinin Mutesini Kaldırırsınız. \n<a:Matrukaayar:809415455206670336> .unban = Bir Kişinin Banını Kaldırırsınız. \n<a:Matrukaayar:809415455206670336> .unjail = Bir Kişinin Jailini Kaldırırsınız. \n<a:Matrukaayar:809415455206670336> .vmute = Bir Kişiye Sesde Mute Atarsınız. \n<a:Matrukaayar:809415455206670336> .unvmute = Bir Kişinin Vmutesini Kaldırırsınız. \n<a:Matrukaayar:809415455206670336> .sicil = Bir Kişinin Siciline Bakarsınız. \n<a:Matrukaayar:809415455206670336> .sicil-sıfırla = Bir Kişinin Sicilini Sıfırlarsınız.`
    )
    .setFooter(`Yapımcı Sarkozy `);
  return message.channel.send(codare);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: "yardım",
  description: "[Admin Komutu]",
  usage: "!bakım-mod aç"
};
