require('dotenv').config();
require('./config/database');

const Item = require('./models/item');
const God = require('./models/god');

(async function () {

    await God.deleteMany({});
    const gods = await God.create([
        {
            id: "Achilles",
            name: "Achilles",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/achilles.jpg",
            type: "Warrior"
        },
        {
            id: "Agni",
            name: "Agni",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/agni.jpg",
            type: "Mage",
            short_id: "1"
        },
        {
            id: "Ah_Muzen_Cab",
            name: "Ah Muzen Cab",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/ah-muzen-cab.jpg",
            type: "Hunter",
            short_id: "2"
        },
        {
            id: "Ah_Puch",
            name: "Ah Puch",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/ah-puch.jpg",
            type: "Mage",
            short_id: "3"
        },
        {
            id: "Amaterasu",
            name: "Amaterasu",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/amaterasu.jpg",
            type: "Warrior",
            short_id: "71"
        },
        {
            id: "Anhur",
            name: "Anhur",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/anhur.jpg",
            type: "Hunter",
            short_id: "4"
        },
        {
            id: "Anubis",
            name: "Anubis",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/anubis.jpg",
            type: "Mage",
            short_id: "5"
        },
        {
            id: "AoKuang",
            name: "AoKuang",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/ao-kuang.jpg",
            type: "Mage",
            short_id: "6"
        },
        {
            id: "Aphrodite",
            name: "Aphrodite",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/aphrodite.jpg",
            type: "Mage",
            short_id: "7"
        },
        {
            id: "Apollo",
            name: "Apollo",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/apollo.jpg",
            type: "Hunter",
            short_id: "8"
        },
        {
            id: "Arachne",
            name: "Arachne",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/arachne.jpg",
            type: "Assassin",
            short_id: "9"
        },
        {
            id: "Ares",
            name: "Ares",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/ares.jpg",
            type: "Guardian",
            short_id: "10"
        },
        {
            id: "Artemis",
            name: "Artemis",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/artemis.jpg",
            type: "Hunter",
            short_id: "11"
        },
        {
            id: "Artio",
            name: "Artio",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/artio.jpg",
            type: "Hunter"
        },
        {
            id: "Athena",
            name: "Athena",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/athena.jpg",
            type: "Guardian",
            short_id: "12"
        },
        {
            id: "Awilix",
            name: "Awilix",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/awilix.jpg",
            type: "Assassin",
            short_id: "13"
        },
        {
            id: "Baba_Yaga",
            name: "Baba Yaga",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/baba-yaga.jpg",
            type: "Mage"
        },
        {
            id: "Bacchus",
            name: "Bacchus",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/bacchus.jpg",
            type: "Guardian",
            short_id: "14"
        },
        {
            id: "Bakasura",
            name: "Bakasura",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/bakasura.jpg",
            type: "Assassin",
            short_id: "15"
        },
        {
            id: "Baron_Samedi",
            name: "Baron Samedi",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/baron-samedi.jpg",
            type: "Mage"
        },

        {
            id: "Bastet",
            name: "Bastet",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/bastet.jpg",
            type: "Assassin",
            short_id: "16"
        },
        {
            id: "Bellona",
            name: "Bellona",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/bellona.jpg",
            type: "Warrior",
            short_id: "17"
        },
        {
            id: "Cabrakan",
            name: "Cabrakan",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/cabrakan.jpg",
            type: "Guardian",
            short_id: "18"
        },
        {
            id: "Camazotz",
            name: "Camazotz",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/camazotz.jpg",
            type: "Assassin",
            short_id: "18x"
        },
        {
            id: "Cerberus",
            name: "Cerberus",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/cerberus.jpg",
            type: "Guardian"
        },
        {
            id: "Cernunnos",
            name: "Cernunnos",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/cernunnos.jpg",
            type: "Hunter",
            short_id: "18x"
        },
        {
            id: "Chaac",
            name: "Chaac",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/chaac.jpg",
            type: "Warrior",
            short_id: "19"
        },
        {
            id: "Change",
            name: "Chang'E",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/change.jpg",
            type: "Mage",
            short_id: "20"
        },
        {
            id: "Chernobog",
            name: "Chernobog",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/chernobog.jpg",
            type: "Hunter"
        },
        {
            id: "Chiron",
            name: "Chiron",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/chiron.jpg",
            type: "Hunter",
            short_id: "70"
        },
        {
            id: "Chronos",
            name: "Chronos",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/chronos.jpg",
            type: "Mage",
            short_id: "21"
        },
        {
            id: "Cthulhu",
            name: "Cthulhu",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/cthulhu.jpg",
            type: "Guardian"
        },
        {
            id: "Cu_Chulainn",
            name: "Cu Chulainn",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/cu-chulainn.jpg",
            type: "Warrior"
        },
        {
            id: "Cupid",
            name: "Cupid",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/cupid.jpg",
            type: "Hunter",
            short_id: "22"
        },
        {
            id: "Da_Ji",
            name: "Da Ji",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/da-ji.jpg",
            type: "Assassin"
        },
        {
            id: "Danzaburou",
            name: "Danzaburou",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/danzaburou.jpg",
            type: "Hunter"
        },
        {
            id: "Discordia",
            name: "Discordia",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/discordia.jpg",
            type: "Mage"
        },
        {
            id: "Erlang_Shen",
            name: "Erlang Shen",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/erlang-shen.jpg",
            type: "Warrior",
            short_id: "73"
        },
        {
            id: "Eset",
            name: "Eset",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/eset.jpg",
            type: "Mage",
            short_id: "33"
        },
        {
            id: "Fafnir",
            name: "Fafnir",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/fafnir.jpg",
            type: "Guardian",
            short_id: "72"
        },
        {
            id: "Fenrir",
            name: "Fenrir",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/fenrir.jpg",
            type: "Assassin",
            short_id: "23"
        },
        {
            id: "Freya",
            name: "Freya",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/freya.jpg",
            type: "Mage",
            short_id: "24"
        },
        {
            id: "Ganesha",
            name: "Ganesha",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/ganesha.jpg",
            type: "Guardian",
            short_id: "25x"
        },
        {
            id: "Geb",
            name: "Geb",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/geb.jpg",
            type: "Guardian",
            short_id: "25"
        },
        {
            id: "Guan_Yu",
            name: "Guan Yu",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/guan-yu.jpg",
            type: "Warrior",
            short_id: "26"
        },
        {
            id: "Hachiman",
            name: "Hachiman",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/hachiman.jpg",
            type: "Hunter"
        },
        {
            id: "Hades",
            name: "Hades",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/hades.jpg",
            type: "Guardian",
            short_id: "27"
        },
        {
            id: "He_Bo",
            name: "He Bo",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/he-bo.jpg",
            type: "Mage",
            short_id: "28"
        },
        {
            id: "Heimdallr",
            name: "Heimdallr",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/heimdallr.jpg",
            type: "Hunter"
        },
        {
            id: "Hel",
            name: "Hel",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/hel.jpg",
            type: "Mage",
            short_id: "29"
        },
        {
            id: "Hera",
            name: "Hera",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/hera.jpg",
            type: "Mage"
        },
        {
            id: "Hercules",
            name: "Hercules",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/hercules.jpg",
            type: "Warrior",
            short_id: "30"
        },
        {
            id: "Horus",
            name: "Horus",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/horus.jpg",
            type: "Warrior"
        },
        {
            id: "Hou_Yi",
            name: "Hou Yi",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/hou-yi.jpg",
            type: "Hunter",
            short_id: "31"
        },
        {
            id: "Hun_Batz",
            name: "Hun Batz",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/hun-batz.jpg",
            type: "Assassin",
            short_id: "32"
        },
        {
            id: "Izanami",
            name: "Izanami",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/izanami.jpg",
            type: "Hunter",
            short_id: "33x"
        },
        {
            id: "Janus",
            name: "Janus",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/janus.jpg",
            type: "Mage",
            short_id: "34"
        },
        {
            id: "Jing Wei",
            name: "Jing Wei",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/jing-wei.jpg",
            type: "Hunder",
            short_id: "71"
        },
        {
            id: "Jormungandr",
            name: "Jormungandr",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/jormungandr.jpg",
            type: "Guardian"
        },
        {
            id: "Kali",
            name: "Kali",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/kali.jpg",
            type: "Assassin",
            short_id: "35"
        },
        {
            id: "Khepri",
            name: "Khepri",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/khepri.jpg",
            type: "Guardian",
            short_id: "36"
        },
        {
            id: "King_Arthur",
            name: "King_Arthur",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/king-arthur.jpg",
            type: "Warrior"
        },
        {
            id: "Kukulkan",
            name: "Kukulkan",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/kukulkan.jpg",
            type: "Mage",
            short_id: "37"
        },
        {
            id: "Kumbhakarna",
            name: "Kumbhakarna",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/kumbhakarna.jpg",
            type: "Guardian",
            short_id: "38"
        },
        {
            id: "Kuzenbo",
            name: "Kuzenbo",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/kuzenbo.jpg",
            type: "Guardian",
            short_id: "38x"
        },
        {
            id: "Loki",
            name: "Loki",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/loki.jpg",
            type: "Assassin",
            short_id: "39"
        },
        {
            id: "Medusa",
            name: "Medusa",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/medusa.jpg",
            type: "Hunter",
            short_id: "40"
        },
        {
            id: "Mercury",
            name: "Mercury",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/mercury.jpg",
            type: "Assassin",
            short_id: "41"
        },
        {
            id: "Merlin",
            name: "Merlin",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/merlin.jpg",
            type: "Mage"
        },
        {
            id: "Mulan",
            name: "Mulan",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/mulan.jpg",
            type: "Warrior"
        },
        {
            id: "Ne_Zha",
            name: "Ne Zha",
            filename: "https://www.google.com/search?q=smite+neh+zha&tbm=isch&ved=2ahUKEwiR68uxi8LwAhWkl60KHWC-CC0Q2-cCegQIABAA&oq=smite+neh+zha&gs_lcp=CgNpbWcQAzoECCMQJzoECAAQQzoCCABQ7SVYiEVg30ZoAnAAeACAAaYFiAGHC5IBBzMuNC41LTGYAQCgAQGqAQtnd3Mtd2l6LWltZ7gBA8ABAQ&sclient=img&ei=K7aaYNGpJaSvtgXg_KLoAg&bih=857&biw=931&hl=en#imgrc=i0mxvGk3yx2Z3M",
            type: "Assassin",
            short_id: "42"
        },
        {
            id: "Neith",
            name: "Neith",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/neith.jpg",
            type: "Hunter",
            short_id: "43"
        },
        {
            id: "Nemesis",
            name: "Nemesis",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/nemesis.jpg",
            type: "Assassin",
            short_id: "44"
        },
        {
            id: "Nike",
            name: "Nike",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/nike.jpg",
            type: "Warrior",
            short_id: "44x"
        },
        {
            id: "Nox",
            name: "Nox",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/nox.jpg",
            type: "Mage",
            short_id: "45"
        },
        {
            id: "Nu_Wa",
            name: "Nu Wa",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/nu-wa.jpg",
            type: "Mage",
            short_id: "46"
        },
        {
            id: "Odin",
            name: "Odin",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/odin.jpg",
            type: "Warrior",
            short_id: "47"
        },
        {
            id: "Olorun",
            name: "Olorun",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/olorun.jpg",
            type: "Mage"
        },
        {
            id: "Osiris",
            name: "Osiris",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/osiris.jpg",
            type: "Warrior",
            short_id: "48"
        },
        {
            id: "Pele",
            name: "Pele",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/pele.jpg",
            type: "Assassin"
        },
        {
            id: "Persephone",
            name: "Persephone",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/persephone.jpg",
            type: "Mage"
        },
        {
            id: "Poseidon",
            name: "Poseidon",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/poseidon.jpg",
            type: "Mage",
            short_id: "49"
        },
        {
            id: "Ra",
            name: "Ra",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/ra.jpg",
            type: "Mage",
            short_id: "50"
        },
        {
            id: "Raijin",
            name: "Raijin",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/raijin.jpg",
            type: "Mage",
            short_id: "72"
        },
        {
            id: "Rama",
            name: "Rama",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/rama.jpg",
            type: "Hunter",
            short_id: "51"
        },
        {
            id: "Ratatoskr",
            name: "Ratatoskr",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/ratatoskr.jpg",
            type: "Assassin",
            short_id: "52"
        },
        {
            id: "Ravana",
            name: "Ravana",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/ravana.jpg",
            type: "Warrior",
            short_id: "53"
        },
        {
            id: "Scylla",
            name: "Scylla",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/scylla.jpg",
            type: "Mage",
            short_id: "54"
        },
        {
            id: "Serqet",
            name: "Serqet",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/serqet.jpg",
            type: "Assassin",
            short_id: "55"
        },
        {
            id: "Set",
            name: "Set",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/set.jpg",
            type: "Assassin"
        },
        {
            id: "Skadi",
            name: "Skadi",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/skadi.jpg",
            type: "Hunter",
            short_id: "73"
        },
        {
            id: "Sobek",
            name: "Sobek",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/sobek.jpg",
            type: "Guardian",
            short_id: "56"
        },
        {
            id: "Sol",
            name: "Sol",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/sol.jpg",
            type: "Mage",
            short_id: "70"
        },
        {
            id: "Sun_Wukong",
            name: "Sun Wukong",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/sun-wukong.jpg",
            type: "Warrior",
            short_id: "57"
        },
        {
            id: "Susano",
            name: "Susano",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/susano.jpg",
            type: "Assassin",
            short_id: "70"
        },
        {
            id: "Sylvanus",
            name: "Sylvanus",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/sylvanus.jpg",
            type: "Guardian",
            short_id: "58"
        },
        {
            id: "Terra",
            name: "Terra",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/terra.jpg",
            type: "Guardian",
            short_id: "59x"
        },
        {
            id: "Thanatos",
            name: "Thanatos",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/thanatos.jpg",
            type: "Assassin",
            short_id: "59"
        },
        {
            id: "The_Morrigan",
            name: "The Morrigan",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/the-morrigan.jpg",
            type: "Mage",
            short_id: "59x"
        },
        {
            id: "Thor",
            name: "Thor",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/thor.jpg",
            type: "Assassin",
            short_id: "60"
        },
        {
            id: "Thoth",
            name: "Thoth",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/thoth.jpg",
            type: "Mage",
            short_id: "60x"
        },
        {
            id: "Tiamat",
            name: "Tiamat",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/tiamat.jpg",
            type: "Mage"
        },
        {
            id: "Tsukuyomi",
            name: "Tsukuyomi",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/tsukuyomi.jpg",
            type: "Assassin"
        },
        {
            id: "Tyr",
            name: "Tyr",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/tyr.jpg",
            type: "Warrior",
            short_id: "61"
        },
        {
            id: "Ullr",
            name: "Ullr",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/ullr.jpg",
            type: "Hunter",
            short_id: "62"
        },
        {
            id: "Vamana",
            name: "Vamana",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/vamana.jpg",
            type: "Warrior",
            short_id: "63"
        },
        {
            id: "Vulcan",
            name: "Vulcan",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/vulcan.jpg",
            type: "Mage",
            short_id: "64"
        },
        {
            id: "Xbalanque",
            name: "Xbalanque",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/xbalanque.jpg",
            type: "Hunter",
            short_id: "65"
        },
        {
            id: "Xing_Tian",
            name: "Xing Tian",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/xing-tian.jpg",
            type: "Guardian",
            short_id: "66"
        },
        {
            id: "Yemoji",
            name: "Yemoji",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/yemoja.jpg",
            type: "Guardian"
        },
        {
            id: "Ymir",
            name: "Ymir",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/ymir.jpg",
            type: "Guardian",
            short_id: "67"
        },
        {
            id: "Zeus",
            name: "Zeus",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/zeus.jpg",
            type: "Mage",
            short_id: "68"
        },
        {
            id: "Zhong_Kui",
            name: "Zhong Kui",
            filename: "https://webcdn.hirezstudios.com/smite/god-cards/zhong-kui.jpg",
            type: "Mage",
            short_id: "69"
        }
    ])

console.log(gods);

    await Item.deleteMany({});
    const items = await Item.create(
        [
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Iron Mail",
                IconId: 2866,
                ItemDescription: {
                    Description: "Physical Protection and Health.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+75"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 7526,
                ItemTier: 1,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 7526,
                ShortDesc: "Physical Protection and Health.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/iron-mail.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7526,
                DeviceName: "Steel Mail",
                IconId: 2865,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+200"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+20"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 7527,
                ItemTier: 2,
                Price: 750,
                RestrictedRoles: "no restrictions",
                RootItemId: 7526,
                ShortDesc: "Physical Protection and Health.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/steel-mail.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7527,
                DeviceName: "Sovereignty",
                IconId: 2864,
                ItemDescription: {
                    Description: "This item gives the owner an aura of physical protections.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+250"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+45"
                        }
                    ],
                    SecondaryDescription: "AURA - Allied gods within 70 units have their Physical Protections increased by 15 and their HP5 increased by 35."
                },
                ItemId: 7528,
                ItemTier: 3,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 7526,
                ShortDesc: "Physical Protection Aura",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/sovereignty.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7527,
                DeviceName: "Mystical Mail",
                IconId: 2917,
                ItemDescription: {
                    Description: "This item deals damage to nearby enemies.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+200"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+40"
                        },
                        {
                            Description: "Crowd Control Reduction",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "AURA - ALL enemies within 25 units are dealt 40 Magical Damage per second."
                },
                ItemId: 7537,
                ItemTier: 3,
                Price: 950,
                RestrictedRoles: "no restrictions",
                RootItemId: 7526,
                ShortDesc: "Nearby enemies take damage over time",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/mystical-mail.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7527,
                DeviceName: "Midgardian Mail",
                IconId: 2863,
                ItemDescription: {
                    Description: "This item causes attackers to have a chance to be slowed.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+300"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+40"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Enemies that successfully land a basic attack on you have their Movement Speed and Attack Speed reduced by 8% for 2 seconds. This effect can stack up to 3 times and can stack with other item slow effects."
                },
                ItemId: 7907,
                ItemTier: 3,
                Price: 900,
                RestrictedRoles: "no restrictions",
                RootItemId: 7526,
                ShortDesc: "Slow enemies when hit by their Basic Attacks",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/midgardian-mail.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7527,
                DeviceName: "Emperor's Armor",
                IconId: 4670,
                ItemDescription: {
                    Description: "When in range of an enemy structure, that structure's Attack Speed is reduced by 30%. When in range of an ally structure, that structures has its Attack Speed increased by 40%.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+250"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+60"
                        }
                    ],
                    SecondaryDescription: "AURA - Damageable enemy structures within 55 units have their Attack Speed reduced by 30%. Damageable allied structures within 55 units have their Attack Speed increased by 40%."
                },
                ItemId: 13189,
                ItemTier: 3,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 7526,
                ShortDesc: "Tower buff and debuff aura",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/emperors-armor.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Light Blade",
                IconId: 2738,
                ItemDescription: {
                    Description: "Increased Attack Speed and Power.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+5"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 7573,
                ItemTier: 1,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 7573,
                ShortDesc: "Physical Power and Attack Speed",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/light-blade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7573,
                DeviceName: "Balanced Blade",
                IconId: 2736,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+15"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+15%"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 7574,
                ItemTier: 2,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 7573,
                ShortDesc: "Physical Power and Attack Speed.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/balanced-blade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 7573,
                DeviceName: "*Asi",
                IconId: 2526,
                ItemDescription: {
                    Description: "This item gives increased Physical Lifesteal when at low Health.",
                    Menuitems: [
                        {
                            Description: "Physical Lifesteal",
                            Value: "+15%"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+25%"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - If you drop below 35% Health, you gain an additional 25% Physical Lifesteal for 5 seconds. Can only occur once every 15 seconds."
                },
                ItemId: 9348,
                ItemTier: 2,
                Price: 1100,
                RestrictedRoles: "no restrictions",
                RootItemId: 7573,
                ShortDesc: "Gain Physical Lifesteal when at low Health",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/*asi.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7574,
                DeviceName: "The Executioner",
                IconId: 2803,
                ItemDescription: {
                    Description: "This item causes your Basic Attacks to reduce the target's Physical Protections.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+35"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+25%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Basic Attacks against an enemy reduce your target's Physical Protection by 7% for 3 seconds (max. 4 Stacks)."
                },
                ItemId: 7575,
                ItemTier: 3,
                Price: 950,
                RestrictedRoles: "no restrictions",
                RootItemId: 7573,
                ShortDesc: "Basic Attacks reduce target's Physical Protection",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/the-executioner.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7574,
                DeviceName: "Qin's Sais",
                IconId: 2802,
                ItemDescription: {
                    Description: "This item causes the owner's Basic Attacks to deal a percentage of the target's Health as additional damage.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+40"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - On Basic Attack hits, deal Physical Damage equal to 3% of the target's maximum Health. If the target has over 2000 Health, the bonus damage scales up. This effect reaches a maximum of 5% of the targets Maximum Health at 2750 Health."
                },
                ItemId: 7593,
                ItemTier: 3,
                Price: 1450,
                RestrictedRoles: "no restrictions",
                RootItemId: 7573,
                ShortDesc: "Bonus damage based on target's maximum Health",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/qins-sais.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7574,
                DeviceName: "Asi",
                IconId: 2526,
                ItemDescription: {
                    Description: "This item gives increased Physical Lifesteal when at low Health.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Physical Lifesteal",
                            Value: "+20%"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+25%"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - If you drop below 35% Health, you gain an additional 30% Physical Lifesteal for 5 seconds. Can only occur once every 15 seconds."
                },
                ItemId: 17090,
                ItemTier: 3,
                Price: 1300,
                RestrictedRoles: "no restrictions",
                RootItemId: 7573,
                ShortDesc: "Gain Physical Lifesteal when at low Health",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/asi.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Tiny Trinket",
                IconId: 2829,
                ItemDescription: {
                    Description: "Magical Power and Magical Lifesteal.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Magical Lifesteal",
                            Value: "+6%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 7610,
                ItemTier: 1,
                Price: 550,
                RestrictedRoles: "no restrictions",
                RootItemId: 7610,
                ShortDesc: "Magical Power and Magical Lifesteal.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/tiny-trinket.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7610,
                DeviceName: "Enchanted Trinket",
                IconId: 2827,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+30"
                        },
                        {
                            Description: "Health",
                            Value: "+100"
                        },
                        {
                            Description: "Magical Lifesteal",
                            Value: "+12%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 7609,
                ItemTier: 2,
                Price: 550,
                RestrictedRoles: "no restrictions",
                RootItemId: 7610,
                ShortDesc: "Magical Power and Magical Lifesteal.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/enchanted-trinket.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7610,
                DeviceName: "Talon Trinket",
                IconId: 2828,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+60"
                        },
                        {
                            Description: "Mana",
                            Value: "+100"
                        },
                        {
                            Description: "Magical Lifesteal",
                            Value: "+8%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 8574,
                ItemTier: 2,
                Price: 850,
                RestrictedRoles: "no restrictions",
                RootItemId: 7610,
                ShortDesc: "Magical Power and Magical Lifesteal.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/talon-trinket.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7609,
                DeviceName: "Pythagorem's Piece",
                IconId: 2825,
                ItemDescription: {
                    Description: "This item gives the owner an aura of Lifesteal and Power.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+40"
                        },
                        {
                            Description: "Health",
                            Value: "+200"
                        },
                        {
                            Description: "Magical Lifesteal",
                            Value: "+12%"
                        },
                        {
                            Description: "Magical Penetration",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "AURA - Allied gods within 70 units have their Magical Lifesteal increased by 12% and their Magical Power increased by 30 or their Physical Lifesteal increased by 10% and their Physical Power increased by 20."
                },
                ItemId: 7534,
                ItemTier: 3,
                Price: 1200,
                RestrictedRoles: "no restrictions",
                RootItemId: 7610,
                ShortDesc: "Power and Lifesteal Aura",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/pythagorems-piece.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 8574,
                DeviceName: "Bancroft's Talon",
                IconId: 2826,
                ItemDescription: {
                    Description: "This item gives the owner additional Magical Power and Lifesteal based on the percentage of the owner's missing Health.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+100"
                        },
                        {
                            Description: "Magical Lifesteal",
                            Value: "+15%"
                        },
                        {
                            Description: "Mana",
                            Value: "+150"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - You gain additional Magical Power and Lifesteal scaled from missing Health. This caps at 100 power and 20% Lifesteal at 25% Health."
                },
                ItemId: 8551,
                ItemTier: 3,
                Price: 1100,
                RestrictedRoles: "no restrictions",
                RootItemId: 7610,
                ShortDesc: "Gain Magical Power as Health is lost",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/bancrofts-talon.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 8574,
                DeviceName: "Typhon's Fang",
                IconId: 6639,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+70"
                        },
                        {
                            Description: "Mana",
                            Value: "+200"
                        },
                        {
                            Description: "Magical Lifesteal",
                            Value: "+15%"
                        },
                        {
                            Description: "Magical Penetration",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Your Healing obtained from Magical Lifesteal is increased by 30%. Your Magical power is increased by twice the amount of Magical Lifesteal you have."
                },
                ItemId: 15579,
                ItemTier: 3,
                Price: 1400,
                RestrictedRoles: "no restrictions",
                RootItemId: 7610,
                ShortDesc: "Increased Healing from Magical Lifesteal",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/typhons-fang.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7609,
                DeviceName: "Soul Gem",
                IconId: 6633,
                ItemDescription: {
                    Description: "Consume stacks to deal bonus damage.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+80"
                        },
                        {
                            Description: "Health",
                            Value: "+150"
                        },
                        {
                            Description: "Magical Lifesteal",
                            Value: "+12%"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - On successful hit of an Ability you gain 1 stack. At 4 Stacks your next Ability that damages an enemy God will deal bonus damage equal to 30% of your Magical power to each God hit, and will heal yourself and allies within 20 units for 40% of your Magical Power and will consume the 4 stacks."
                },
                ItemId: 15582,
                ItemTier: 3,
                Price: 1200,
                RestrictedRoles: "no restrictions",
                RootItemId: 7610,
                ShortDesc: "Build stacks to get bonus damage and healing",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/soul-gem.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Healing Potion",
                IconId: 2929,
                ItemDescription: {
                    Description: "This consumable heals you over time.",
                    Menuitems: [],
                    SecondaryDescription: "This consumable heals 250 Health over 25 seconds."
                },
                ItemId: 7621,
                ItemTier: 1,
                Price: 50,
                RestrictedRoles: "no restrictions",
                RootItemId: 7621,
                ShortDesc: "Restores Health over time.",
                StartingItem: false,
                Type: "Consumable",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/healing-potion.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Mana Potion",
                IconId: 2930,
                ItemDescription: {
                    Description: "This consumable heals Mana over time.",
                    Menuitems: [],
                    SecondaryDescription: "This consumable heals 150 Mana over 25 seconds."
                },
                ItemId: 7622,
                ItemTier: 1,
                Price: 50,
                RestrictedRoles: "no restrictions",
                RootItemId: 7622,
                ShortDesc: "Restores Mana over time.",
                StartingItem: false,
                Type: "Consumable",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/mana-potion.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Ward",
                IconId: 1992,
                ItemDescription: {
                    Description: "This is a ward that allows you to see normal enemy movements.",
                    Menuitems: [],
                    SecondaryDescription: "This is a ward that allows you to see normal enemy movements with 45 units. It does respect line of sight and can't see through walls or stealth. It remains for 3 minutes or until killed."
                },
                ItemId: 7668,
                ItemTier: 1,
                Price: 50,
                RestrictedRoles: "no restrictions",
                RootItemId: 7668,
                ShortDesc: "Detects enemies within an area.",
                StartingItem: false,
                Type: "Consumable",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/ward.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Elixir of Power",
                IconId: 2064,
                ItemDescription: {
                    Description: "This consumable increases your Magical and Physical Power.",
                    Menuitems: [],
                    SecondaryDescription: "This consumable increases your Magical and Physical Power by 25%, increases damage done to Structures by 25%, and grants 10% Penetration for 6 minutes. This effect persists through death."
                },
                ItemId: 7803,
                ItemTier: 1,
                Price: 3000,
                RestrictedRoles: "no restrictions",
                RootItemId: 7803,
                ShortDesc: "Provides a Power buff.",
                StartingItem: false,
                Type: "Consumable",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/elixir-of-power.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Elixir of Defense",
                IconId: 2065,
                ItemDescription: {
                    Description: "This consumable increases your Magical and Physical Protections.",
                    Menuitems: [],
                    SecondaryDescription: "This consumable provides 50 Magical and Physical Protection, 5% Damage Mitigation, 20% Crowd Control Reduction, and decreases damage taken from Structures by 25% for 6 minutes. This effect persists through death."
                },
                ItemId: 7804,
                ItemTier: 1,
                Price: 3000,
                RestrictedRoles: "no restrictions",
                RootItemId: 7804,
                ShortDesc: "Provides a Defense buff.",
                StartingItem: false,
                Type: "Consumable",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/elixir-of-defense.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Mace",
                IconId: 2890,
                ItemDescription: {
                    Description: "Physical Power and Penetration.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 7827,
                ItemTier: 1,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 7827,
                ShortDesc: "Physical Power and Penetration.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/mace.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7827,
                DeviceName: "Warrior's Bane",
                IconId: 2888,
                ItemDescription: {
                    Description: "This item grants the owner physical penetration.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 7522,
                ItemTier: 2,
                Price: 850,
                RestrictedRoles: "no restrictions",
                RootItemId: 7827,
                ShortDesc: "Physical Power and Penetration",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/warriors-bane.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7827,
                DeviceName: "Heavy Mace",
                IconId: 2889,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+25"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 7828,
                ItemTier: 2,
                Price: 900,
                RestrictedRoles: "no restrictions",
                RootItemId: 7827,
                ShortDesc: "Physical Power and Penetration.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/heavy-mace.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7522,
                DeviceName: "Titan's Bane",
                IconId: 2885,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+40"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Your first ability cast gains 20% Physical Penetration. This can only occur once every 10 seconds."
                },
                ItemId: 7523,
                ItemTier: 3,
                Price: 1050,
                RestrictedRoles: "no restrictions",
                RootItemId: 7827,
                ShortDesc: "Bonus Physical Penetration on abilities",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/titans-bane.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7828,
                DeviceName: "Brawler's Beat Stick",
                IconId: 2585,
                ItemDescription: {
                    Description: "This item causes your Basic Attacks to reduce the healing of your target.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+40"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Enemies hit by your Abilities have 30% reduced healing for 6 seconds."
                },
                ItemId: 7829,
                ItemTier: 3,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 7827,
                ShortDesc: "Ability Damage reduces enemy healing.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/brawlers-beat-stick.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7828,
                DeviceName: "Jotunn's Wrath",
                IconId: 2887,
                ItemDescription: {
                    Description: "This item gives the owner reduced cooldown on their abilities.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+50"
                        },
                        {
                            Description: "Mana",
                            Value: "+150"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+10"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 7904,
                ItemTier: 3,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 7827,
                ShortDesc: "Cooldown Reduction and Physical Penetration",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/jotunns-wrath.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7828,
                DeviceName: "The Crusher",
                IconId: 3489,
                ItemDescription: {
                    Description: "This item grants the owner Physical Penetration.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+30"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+20%"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Enemies hit by your damaging Abilities take an additional 20 Physical Damage + 15% of your Physical Power over 2s."
                },
                ItemId: 11111,
                ItemTier: 3,
                Price: 850,
                RestrictedRoles: "no restrictions",
                RootItemId: 7827,
                ShortDesc: "Bonus damage on Abilities",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/the-crusher.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Morningstar",
                IconId: 2946,
                ItemDescription: {
                    Description: "Physical Power and Mana.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+10"
                        },
                        {
                            Description: "MP5",
                            Value: "+5"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 7922,
                ItemTier: 1,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 7922,
                ShortDesc: "Physical Power and Mana",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/morningstar.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7922,
                DeviceName: "Charged Morningstar",
                IconId: 2948,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Mana",
                            Value: "+150"
                        },
                        {
                            Description: "MP5",
                            Value: "+7"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 8560,
                ItemTier: 2,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 7922,
                ShortDesc: "Physical Power and Mana.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/charged-morningstar.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7922,
                DeviceName: "Hydra's Star",
                IconId: 2950,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+5%"
                        },
                        {
                            Description: "MP5",
                            Value: "+7"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - For 8 seconds after using an ability, your next basic attack will deal an additional 10% damage. The effect can only occur every 3 seconds."
                },
                ItemId: 8568,
                ItemTier: 2,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 7922,
                ShortDesc: "Using abilities gives your next Basic Attack bonus damage based on Physical Power.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/hydras-star.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 8560,
                DeviceName: "Transcendence",
                IconId: 6651,
                ItemDescription: {
                    Description: "This item gives the owner additional Mana on kills and converts your Mana to additional Physical Power.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+35"
                        },
                        {
                            Description: "Mana",
                            Value: "+300"
                        },
                        {
                            Description: "MP5",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - You permanently gain 15 Mana per Stack, and receive 5 Stacks for a god kill, and 1 Stack for a minion kill (max. 50 stacks). 3% of your Mana is converted to Physical Power. At 50 stacks this item Evolves, gaining 10% Cooldown Reduction."
                },
                ItemId: 8547,
                ItemTier: 3,
                Price: 1400,
                RestrictedRoles: "no restrictions",
                RootItemId: 7922,
                ShortDesc: "Gain Stacks of Mana from kills and converts Mana to Physical Power",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/transcendence.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 8568,
                DeviceName: "Hydra's Lament",
                IconId: 2263,
                ItemDescription: {
                    Description: "This item gives the owner bonus damage on the next Basic Attack after using an ability.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+40"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        },
                        {
                            Description: "MP5",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - For 8s after using an ability, your next Basic Attack will deal an additional 40% damage. Abilities that function like basic attacks do not benefit from this. PASSIVE - This item grants 2.5 MP5 per 10% of your missing Mana."
                },
                ItemId: 8550,
                ItemTier: 3,
                Price: 950,
                RestrictedRoles: "no restrictions",
                RootItemId: 7922,
                ShortDesc: "Using abilities gives your next Basic Attack bonus damage based on Physical Power",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/hydras-lament.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 8560,
                DeviceName: "Heartseeker",
                IconId: 3487,
                ItemDescription: {
                    Description: "Your abilities deal bonus damage based on targets health.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+65"
                        },
                        {
                            Description: "Mana",
                            Value: "+200"
                        },
                        {
                            Description: "MP5",
                            Value: "+20"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Your abilities deal an additional 2% of the targets maximum Health as Physical Damage. If you have over 200 Physical Power, your ability bonus damage scales up. This effect reaches a maximum of 5% Maximum Health damage at 400 Physical Power. Subsequent hits on the same target do 75% bonus damage for the next 3s."
                },
                ItemId: 12680,
                ItemTier: 3,
                Price: 1700,
                RestrictedRoles: "",
                RootItemId: 7922,
                ShortDesc: "Abilities deal bonus health-based damage",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/heartseeker.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 8560,
                DeviceName: "Dominance",
                IconId: 9238,
                ItemDescription: {
                    Description: "Bonus Basic Attack Penetration",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+55"
                        },
                        {
                            Description: "Mana",
                            Value: "+200"
                        },
                        {
                            Description: "MP5",
                            Value: "+20"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Your Basic Attacks benefit from an additional 10% Physical Penetration."
                },
                ItemId: 19924,
                ItemTier: 3,
                Price: 1300,
                RestrictedRoles: "no restrictions",
                RootItemId: 7922,
                ShortDesc: "Physical and Basic Attack Penetration",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/dominance.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Vampiric Shroud",
                IconId: 5087,
                ItemDescription: {
                    Description: "This starting item is for Magical users and gives them a chance to gain Health and Mana.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Health",
                            Value: "+100"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Damaging any enemies with an ability gives you bonus 6 health and 3 mana. Can only trigger once per target per ability."
                },
                ItemId: 8247,
                ItemTier: 1,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 8247,
                ShortDesc: "Starter item for Mages that provides sustain",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/vampiric-shroud.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Death's Toll",
                IconId: 2202,
                ItemDescription: {
                    Description: "This item gives the owner additional Health every time they hit with a Basic Attack.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+10"
                        },
                        {
                            Description: "Health",
                            Value: "+100"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Hitting an enemy with a Basic Attack restores 8 Health and 4 Mana. Basic Attacks that hit all enemies in melee range restore 4 Health and 2 Mana on every enemy after the first."
                },
                ItemId: 8268,
                ItemTier: 1,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 8268,
                ShortDesc: "Basic Attacks restore Health and Mana.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/deaths-toll.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Mark of the Vanguard",
                IconId: 2260,
                ItemDescription: {
                    Description: "This starter item increases durability.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+100"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - All damage taken is reduced by 4."
                },
                ItemId: 8538,
                ItemTier: 1,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 8538,
                ShortDesc: "Defensive starter item.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/mark-of-the-vanguard.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 8547,
                DeviceName: "Transcendence",
                IconId: 6638,
                ItemDescription: {
                    Description: "This item gives the owner additional Mana on kills and converts your Mana to additional Physical Power.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+35"
                        },
                        {
                            Description: "Mana",
                            Value: "+1050"
                        },
                        {
                            Description: "MP5",
                            Value: "+10"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - 3% of your Mana is converted to Physical Power."
                },
                ItemId: 15767,
                ItemTier: 4,
                Price: 1,
                RestrictedRoles: "no restrictions",
                RootItemId: 8560,
                ShortDesc: "Mana is converted to Physical Power",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/transcendence.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Sentry Ward",
                IconId: 1993,
                ItemDescription: {
                    Description: "This is a ward that allows you to see enemy movements.",
                    Menuitems: [],
                    SecondaryDescription: "This is a ward that allows you to see enemy movements and other wards within 45 units. It does respect line of sight and can't see through walls or stealth. It remains for 3 minutes or until killed. Can only carry one at a time."
                },
                ItemId: 9005,
                ItemTier: 1,
                Price: 120,
                RestrictedRoles: "no restrictions",
                RootItemId: 9005,
                ShortDesc: "Sees enemy movements and wards.",
                StartingItem: false,
                Type: "Consumable",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/sentry-ward.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Watcher's Gift",
                IconId: 2422,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+100"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+5"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+5"
                        },
                        {
                            Description: "MP5",
                            Value: "+5"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Being within assist range of a minion or jungle camp monster death without dealing the killing blow awards 5 bonus gold, and also restores +12 Health and +10 Mana. "
                },
                ItemId: 9089,
                ItemTier: 1,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 9089,
                ShortDesc: "Bonus Gold, Health, and Mana on minion assist.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/watchers-gift.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Boots",
                IconId: 2686,
                ItemDescription: {
                    Description: "Increase Speed.",
                    Menuitems: [
                        {
                            Description: "Movement Speed",
                            Value: "+6%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9624,
                ItemTier: 1,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 9624,
                ShortDesc: "Increases Movement Speed.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/boots.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9624,
                DeviceName: "Combat Boots",
                IconId: 2687,
                ItemDescription: {
                    Description: "Increase speed, damage, and attack speed.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+10"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+12%"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9625,
                ItemTier: 2,
                Price: 400,
                RestrictedRoles: "no restrictions",
                RootItemId: 9624,
                ShortDesc: "Increases speed and damage.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/combat-boots.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9625,
                DeviceName: "Warrior Tabi",
                IconId: 2692,
                ItemDescription: {
                    Description: "These boots give the owner high Physical Power.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+40"
                        },
                        {
                            Description: "Mana",
                            Value: "+100"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+18%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9626,
                ItemTier: 3,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 9624,
                ShortDesc: "Increases Movement Speed and Physical Power.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/warrior-tabi.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9625,
                DeviceName: "Ninja Tabi",
                IconId: 2690,
                ItemDescription: {
                    Description: "These boots give the owner Attack Speed.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Mana",
                            Value: "+100"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+25%"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+18%"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9627,
                ItemTier: 3,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 9624,
                ShortDesc: "Increases Movement Speed and Attack Speed.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/ninja-tabi.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9625,
                DeviceName: "Reinforced Greaves",
                IconId: 2691,
                ItemDescription: {
                    Description: "These boots grant the owner Crowd Control Reduction.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+10"
                        },
                        {
                            Description: "Health",
                            Value: "+150"
                        },
                        {
                            Description: "Crowd Control Reduction",
                            Value: "+20%"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+18%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Every time you are damaged by a god you gain a stack that provides 3 Physical and Magical Protections. Stacks up to 7 times, Lasts 6s"
                },
                ItemId: 9629,
                ItemTier: 3,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 9624,
                ShortDesc: "Provides Movement Speed and Crowd Control Reduction",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/reinforced-greaves.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9625,
                DeviceName: "Talaria Boots",
                IconId: 3495,
                ItemDescription: {
                    Description: "These boots grant bonus speed while out of combat.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+15"
                        },
                        {
                            Description: "MP5",
                            Value: "+15"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+22%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - You gain +20% additional Movement Speed after leaving the Fountain. This effect lasts 7s."
                },
                ItemId: 9630,
                ItemTier: 3,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 9624,
                ShortDesc: "Bonus movement speed while leaving the Fountain",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/talaria-boots.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Shoes",
                IconId: 2682,
                ItemDescription: {
                    Description: "Increases Movement Speed.",
                    Menuitems: [
                        {
                            Description: "Movement Speed",
                            Value: "+6%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9631,
                ItemTier: 1,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 9631,
                ShortDesc: "Increases Movement Speed.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/shoes.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9631,
                DeviceName: "Magic Shoes",
                IconId: 2683,
                ItemDescription: {
                    Description: "Increase Speed and Magic Power.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+12%"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9632,
                ItemTier: 2,
                Price: 400,
                RestrictedRoles: "no restrictions",
                RootItemId: 9631,
                ShortDesc: "Increase Speed and Magic Power.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/magic-shoes.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9632,
                DeviceName: "Shoes of the Magi",
                IconId: 2685,
                ItemDescription: {
                    Description: "These shoes grant magical power.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+75"
                        },
                        {
                            Description: "Mana",
                            Value: "+100"
                        },
                        {
                            Description: "Magical Lifesteal",
                            Value: "+8%"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+18%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9633,
                ItemTier: 3,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 9631,
                ShortDesc: "Movement Speed and Magical Power",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/shoes-of-the-magi.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9632,
                DeviceName: "Shoes of Focus",
                IconId: 2684,
                ItemDescription: {
                    Description: "These shoes grant the owner reduced cooldowns on their abilities.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+55"
                        },
                        {
                            Description: "Mana",
                            Value: "+250"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+18%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9634,
                ItemTier: 3,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 9631,
                ShortDesc: "Movement Speed and Cooldown Reduction",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/shoes-of-focus.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9632,
                DeviceName: "Reinforced Shoes",
                IconId: 2681,
                ItemDescription: {
                    Description: "These boots grant the owner Crowd Control Reduction.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Health",
                            Value: "+150"
                        },
                        {
                            Description: "Crowd Control Reduction",
                            Value: "+20%"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+18%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Every time you are damaged by a god you gain a stack that provides 3 Physical and Magical Protections. Stacks up to 7 times, Lasts 6s"
                },
                ItemId: 9636,
                ItemTier: 3,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 9631,
                ShortDesc: "Provides Movement Speed and Crowd Control Reduction",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/reinforced-shoes.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9632,
                DeviceName: "Traveler's Shoes",
                IconId: 3497,
                ItemDescription: {
                    Description: "These boots grant the owner bonus speed out of combat.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+25"
                        },
                        {
                            Description: "MP5",
                            Value: "+15"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+22%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - You gain +20% additional Movement Speed after leaving the Fountain. This effect lasts 7s."
                },
                ItemId: 9637,
                ItemTier: 3,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 9631,
                ShortDesc: "Bonus movement speed while leaving the Fountain",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/travelers-shoes.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Multi Potion",
                IconId: 2931,
                ItemDescription: {
                    Description: "This consumable heals and restores Mana over time.",
                    Menuitems: [],
                    SecondaryDescription: "This consumable heals 125 Health and 75 Mana over 25 seconds."
                },
                ItemId: 9804,
                ItemTier: 1,
                Price: 50,
                RestrictedRoles: "no restrictions",
                RootItemId: 9804,
                ShortDesc: "Restores Health and Mana over time.",
                StartingItem: false,
                Type: "Consumable",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/multi-potion.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Hidden Dagger",
                IconId: 2856,
                ItemDescription: {
                    Description: "Physical Power and Critical Chance.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9812,
                ItemTier: 1,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 9812,
                ShortDesc: "Physical Power and Critical Chance.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/hidden-dagger.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9812,
                DeviceName: "Short Sword",
                IconId: 2854,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+25"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9813,
                ItemTier: 2,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 9812,
                ShortDesc: "Physical Power and Critical Chance.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/short-sword.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9813,
                DeviceName: "Deathbringer",
                IconId: 2851,
                ItemDescription: {
                    Description: "This item gives the owner increased Critical Strike Chance and damage.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+50"
                        },
                        {
                            Description: "Critical Strike Chance",
                            Value: "+25%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Critical Strike bonus damage dealt is increased by 30%."
                },
                ItemId: 7545,
                ItemTier: 3,
                Price: 1650,
                RestrictedRoles: "no restrictions",
                RootItemId: 9812,
                ShortDesc: "Critical Strike damage increased",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/deathbringer.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9813,
                DeviceName: "Rage",
                IconId: 2256,
                ItemDescription: {
                    Description: "This item increases Critical Strike Chance after a kill or assist.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+30"
                        },
                        {
                            Description: "Critical Strike Chance",
                            Value: "+30%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Killing or getting an assist on an enemy god gives you 1 stack. Each stack provides 3% Critical Strike Chance. Stacks are permanent and stack up to 5 times. "
                },
                ItemId: 8546,
                ItemTier: 3,
                Price: 1150,
                RestrictedRoles: "no restrictions",
                RootItemId: 9812,
                ShortDesc: "Earn Critical Strike Chance stacks from kills or assists",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/rage.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9813,
                DeviceName: "Malice",
                IconId: 2852,
                ItemDescription: {
                    Description: "This item increases your Critical Strike Chance. Critical Strikes empower your abilities.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+40"
                        },
                        {
                            Description: "Critical Strike Chance",
                            Value: "+25%"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Successfully Hitting an Enemy God with a Critical Strike will subtract 3s from all of your abilities currently on Cooldown, except your Ultimate ability. This effect can only happen once every 5s."
                },
                ItemId: 9405,
                ItemTier: 3,
                Price: 1300,
                RestrictedRoles: "no restrictions",
                RootItemId: 9812,
                ShortDesc: "Critical Strikes reduce ability cooldowns",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/malice.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 8546,
                DeviceName: "Evolved Rage",
                IconId: 5455,
                ItemDescription: {
                    Description: "This item increases Critical Strike Chance after a kill or assist.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Critical Strike Chance",
                            Value: "+45%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 14855,
                ItemTier: 4,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 9813,
                ShortDesc: "Earn Critical Strike Chance stacks from kills or assists",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/evolved-rage.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Spiked Gauntlet",
                IconId: 2850,
                ItemDescription: {
                    Description: "Grants Physical Lifesteal.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+5"
                        },
                        {
                            Description: "Physical Lifesteal",
                            Value: "+7%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9825,
                ItemTier: 1,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 9825,
                ShortDesc: "Increases Physical Lifesteal",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/spiked-gauntlet.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9825,
                DeviceName: "Cursed Gauntlet",
                IconId: 2848,
                ItemDescription: {
                    Description: "This item gives the owner additional physical power and lifesteal.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Physical Lifesteal",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9826,
                ItemTier: 2,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 9825,
                ShortDesc: "Grants Physical Power and Lifesteal",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/cursed-gauntlet.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9825,
                DeviceName: "Bound Gauntlet",
                IconId: 2849,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+15"
                        },
                        {
                            Description: "Physical Lifesteal",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9827,
                ItemTier: 2,
                Price: 450,
                RestrictedRoles: "no restrictions",
                RootItemId: 9825,
                ShortDesc: "Increases Physical Lifesteal.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/bound-gauntlet.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9827,
                DeviceName: "Soul Eater",
                IconId: 2847,
                ItemDescription: {
                    Description: "This item gives the owner's abilities lifesteal.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Physical Lifesteal",
                            Value: "+10%"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+10%"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Your abilities heal you for 5% of damage dealt. Each time anything dies within 80 units you gain a stack. Gods, Large Jungle monsters and Bosses provide 5 stacks. At 75 Stacks Soul Eater Evolves, gaining 15 Physical Power, 5% Physical Lifesteal, and causing abilities to heal you for 20% of damage dealt."
                },
                ItemId: 7539,
                ItemTier: 3,
                Price: 1050,
                RestrictedRoles: "no restrictions",
                RootItemId: 9825,
                ShortDesc: "Cooldown Reduction and Lifesteal",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/soul-eater.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9826,
                DeviceName: "Devourer's Gauntlet",
                IconId: 2845,
                ItemDescription: {
                    Description: "This item gives the owner additional Physical Power and Lifesteal as they build Stacks.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+30"
                        },
                        {
                            Description: "Physical Lifesteal",
                            Value: "+15%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Killing an enemy god or minion gives you stacks of +.5 Physical Power and +.2% Physical Lifesteal. You receive 5 stacks for a god kill and 1 stack for a minion kill. Stacks up to 70 times."
                },
                ItemId: 7914,
                ItemTier: 3,
                Price: 900,
                RestrictedRoles: "no restrictions",
                RootItemId: 9825,
                ShortDesc: "Gain Physical Power and Lifesteal from kills",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/devourers-gauntlet.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9826,
                DeviceName: "Bloodforge",
                IconId: 2846,
                ItemDescription: {
                    Description: "This item gives the owner additional Physical Power and Physical Lifesteal every time they hit with a Basic Attack.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+75"
                        },
                        {
                            Description: "Physical Lifesteal",
                            Value: "+15%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Killing an enemy god forges a shield from their blood with Health equal to 200 + 10 per Player Level for 20s. While the Blood Shield is active you gain +10% movement speed."
                },
                ItemId: 9236,
                ItemTier: 3,
                Price: 1400,
                RestrictedRoles: "no restrictions",
                RootItemId: 9825,
                ShortDesc: "Increases Physical Power and Physical Lifesteal",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/bloodforge.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7914,
                DeviceName: "Devourer's Gauntlet",
                IconId: 6630,
                ItemDescription: {
                    Description: "This item gives the owner additional Physical Power and Lifesteal as they build Stacks.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+65"
                        },
                        {
                            Description: "Physical Lifesteal",
                            Value: "+29%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 15736,
                ItemTier: 4,
                Price: 1,
                RestrictedRoles: "no restrictions",
                RootItemId: 9826,
                ShortDesc: "Gain Physical Power and Lifesteal from kills",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/devourers-gauntlet.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7539,
                DeviceName: "Evolved Soul Eater",
                IconId: 6440,
                ItemDescription: {
                    Description: "This item gives the owner's abilities lifesteal.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+35"
                        },
                        {
                            Description: "Physical Lifesteal",
                            Value: "+15%"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+10%"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Your abilities heal you for 20% of the damage dealt to targets."
                },
                ItemId: 15316,
                ItemTier: 4,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 9827,
                ShortDesc: "Cooldown Reduction and Lifesteal",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/evolved-soul-eater.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Ancient Blade",
                IconId: 2895,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+50"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+5%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9828,
                ItemTier: 1,
                Price: 550,
                RestrictedRoles: "no restrictions",
                RootItemId: 9828,
                ShortDesc: "Attack Speed and Movement Speed",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/ancient-blade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9828,
                DeviceName: "Adventurer's Blade",
                IconId: 4104,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+100"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+7%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 8239,
                ItemTier: 2,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 9828,
                ShortDesc: "Attack Speed and Movement Speed.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/adventurers-blade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9828,
                DeviceName: "Cursed Blade",
                IconId: 2894,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+75"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+10%"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+5%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 18190,
                ItemTier: 2,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 9828,
                ShortDesc: "Attack Speed and Movement Speed",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/cursed-blade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 8239,
                DeviceName: "Witchblade",
                IconId: 2892,
                ItemDescription: {
                    Description: "This item gives the owner an aura that reduces nearby Enemy Gods' Attack Speed.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "Health",
                            Value: "+250"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+7%"
                        }
                    ],
                    SecondaryDescription: "AURA - Enemies within 55 units have their Attack Speed reduced by 25%."
                },
                ItemId: 7910,
                ItemTier: 3,
                Price: 900,
                RestrictedRoles: "no restrictions",
                RootItemId: 9828,
                ShortDesc: "Attack Speed Debuff Aura",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/witchblade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 8239,
                DeviceName: "Winged Blade",
                IconId: 2204,
                ItemDescription: {
                    Description: "This item makes the owner immune to Slows when hit by one.",
                    Menuitems: [
                        {
                            Description: "Magical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "Health",
                            Value: "+250"
                        },
                        {
                            Description: "Crowd Control Reduction",
                            Value: "+20%"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+7%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - When hit by a Slow, you are immune to Slows and your movement speed is increased by 20% for 4s. Only occurs once every 30 seconds."
                },
                ItemId: 8240,
                ItemTier: 3,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 9828,
                ShortDesc: "Periodic immunity to Slow effects.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/winged-blade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 8239,
                DeviceName: "Relic Dagger",
                IconId: 4673,
                ItemDescription: {
                    Description: "This item Reduces the cooldown of equipped Relics.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+350"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        },
                        {
                            Description: "Crowd Control Reduction",
                            Value: "+10%"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+7%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Your relics receive 40s Cooldown Reduction"
                },
                ItemId: 13187,
                ItemTier: 3,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 9828,
                ShortDesc: "This item Reduces the cooldown of equipped Relics.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/relic-dagger.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18190,
                DeviceName: "Toxic Blade",
                IconId: 5454,
                ItemDescription: {
                    Description: "This item reduces nearby Enemy Gods' healing upon hitting them with basic attacks.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+100"
                        },
                        {
                            Description: "Penetration",
                            Value: "+15"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+30%"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+7%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Enemies hit by your basic attacks gain 15% reduced healing, stacking up to 2 times and lasting 6s."
                },
                ItemId: 14846,
                ItemTier: 3,
                Price: 950,
                RestrictedRoles: "no restrictions",
                RootItemId: 9828,
                ShortDesc: "Basic Attack Anti-Heal",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/toxic-blade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Cudgel",
                IconId: 2900,
                ItemDescription: {
                    Description: "Health and Physical Power.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+10"
                        },
                        {
                            Description: "Health",
                            Value: "+75"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9830,
                ItemTier: 1,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 9830,
                ShortDesc: "Health and Physical Power.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/cudgel.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9830,
                DeviceName: "Heavy Hammer",
                IconId: 2898,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Health",
                            Value: "+150"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9831,
                ItemTier: 2,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 9830,
                ShortDesc: "Health and Physical Power.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/heavy-hammer.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9830,
                DeviceName: "Shillelagh",
                IconId: 5048,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+15"
                        },
                        {
                            Description: "Health",
                            Value: "+200"
                        },
                        {
                            Description: "Mana",
                            Value: "+100"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 14083,
                ItemTier: 2,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 9830,
                ShortDesc: "Health and Physical Power.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/shillelagh.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9831,
                DeviceName: "Frostbound Hammer",
                IconId: 2896,
                ItemDescription: {
                    Description: "This item causes your Basic Attacks to slow your target's Movement Speed and Attack Speed.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+35"
                        },
                        {
                            Description: "Health",
                            Value: "+300"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Enemies hit by your Basic Attacks have their Movement Speed reduced by 30% (20% for Ranged Basic Attacks) and have their Attack Speed reduced 20% for 1.25 seconds."
                },
                ItemId: 7589,
                ItemTier: 3,
                Price: 950,
                RestrictedRoles: "no restrictions",
                RootItemId: 9830,
                ShortDesc: "Basic Attack hits slow enemies.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/frostbound-hammer.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9831,
                DeviceName: "Runeforged Hammer",
                IconId: 2897,
                ItemDescription: {
                    Description: "Crowd Controlled Enemies near you take more damage.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+40"
                        },
                        {
                            Description: "Health",
                            Value: "+250"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Enemies take 20% increased damage from you if they are affected by Crowd Control. Does not include Knockbacks, Blinds, or Grabs."
                },
                ItemId: 8959,
                ItemTier: 3,
                Price: 1050,
                RestrictedRoles: "no restrictions",
                RootItemId: 9830,
                ShortDesc: "Deal more damage to any target afflicted by Crowd Control",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/runeforged-hammer.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 14083,
                DeviceName: "The Sledge",
                IconId: 8678,
                ItemDescription: {
                    Description: "Gain Protections when near enemy Gods.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+40"
                        },
                        {
                            Description: "Health",
                            Value: "+250"
                        },
                        {
                            Description: "Mana",
                            Value: "+150"
                        },
                        {
                            Description: "Crowd Control Reduction",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - For each enemy god within 55 units of you, you gain a stacking buff that provides 8 Protections. Stacks up to 3 times."
                },
                ItemId: 12677,
                ItemTier: 3,
                Price: 1000,
                RestrictedRoles: "",
                RootItemId: 9830,
                ShortDesc: "Gain Protections when near enemy Gods",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/the-sledge.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 14083,
                DeviceName: "Blackthorn Hammer",
                IconId: 5039,
                ItemDescription: {
                    Description: "This item gives the owner additional Cooldown Reduction or MP5 based on missing Mana.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+35"
                        },
                        {
                            Description: "Health",
                            Value: "+350"
                        },
                        {
                            Description: "Mana",
                            Value: "+200"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - While over 25% Mana, you gain +10% Cooldown Reduction. While under 25% Mana, you gain +50 MP5."
                },
                ItemId: 14096,
                ItemTier: 3,
                Price: 900,
                RestrictedRoles: "no restrictions",
                RootItemId: 9830,
                ShortDesc: "Increased Cooldown at high Mana, Increased MP5 at low Mana",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/blackthorn-hammer.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Round Shield",
                IconId: 2907,
                ItemDescription: {
                    Description: "Physical Power and Physical Protection.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+10"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+5"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9833,
                ItemTier: 1,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 9833,
                ShortDesc: "Physical Power and Physical Protection.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/round-shield.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9833,
                DeviceName: "Tower Shield",
                IconId: 2938,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 8566,
                ItemTier: 2,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 9833,
                ShortDesc: "Physical Power and Physical Protection.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/tower-shield.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9833,
                DeviceName: "Spiked Shield",
                IconId: 2905,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+30"
                        }
                    ],
                    SecondaryDescription: "AURA - Reduces the Physical Protection of enemies within 55 units by 5%."
                },
                ItemId: 9834,
                ItemTier: 2,
                Price: 950,
                RestrictedRoles: "no restrictions",
                RootItemId: 9833,
                ShortDesc: "Physical Power and Physical Protection.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/spiked-shield.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 8566,
                DeviceName: "Shifter's Shield",
                IconId: 2254,
                ItemDescription: {
                    Description: "This item gives the owner additional Physical Power or Protections based on missing Health.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+35"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+25"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - While over 75% Health, you gain +35 Physical Power. While under 75% Health, you gain +40 Protections."
                },
                ItemId: 8549,
                ItemTier: 3,
                Price: 1200,
                RestrictedRoles: "no restrictions",
                RootItemId: 9833,
                ShortDesc: "Provides Physical Power or Protections based on missing Health",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/shifters-shield.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9834,
                DeviceName: "Void Shield",
                IconId: 2901,
                ItemDescription: {
                    Description: "This item gives the owner an aura that reduces physical protections.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+60"
                        },
                        {
                            Description: "Health",
                            Value: "+150"
                        }
                    ],
                    SecondaryDescription: "AURA - Enemy gods within 55 units have their Physical Protection reduced by 15%."
                },
                ItemId: 9836,
                ItemTier: 3,
                Price: 1000,
                RestrictedRoles: "no restrictions",
                RootItemId: 9833,
                ShortDesc: "Physical Protection debuff Aura",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/void-shield.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 8566,
                DeviceName: "Gladiator's Shield",
                IconId: 5044,
                ItemDescription: {
                    Description: "Deal bonus damage to low health enemies.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+25"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+40"
                        },
                        {
                            Description: "Health",
                            Value: "+200"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - When damaging an enemy god below 60% health with an ability you deal an additional 15 + 25% of your Protections from items and abilities. Can only trigger once per enemy per ability."
                },
                ItemId: 14085,
                ItemTier: 3,
                Price: 1250,
                RestrictedRoles: "no restrictions",
                RootItemId: 9833,
                ShortDesc: "Deal bonus damage to low health enemies.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/gladiators-shield.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 8566,
                DeviceName: "Berserker's Shield",
                IconId: 7140,
                ItemDescription: {
                    Description: "When dropping low, go Berserk.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+50"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+20"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+20%"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - If you drop below 40% HP you become Berserk for 5s. Berserk provides 30 Physical Power and 20% Attack Speed."
                },
                ItemId: 16544,
                ItemTier: 3,
                Price: 1350,
                RestrictedRoles: "no restrictions",
                RootItemId: 9833,
                ShortDesc: "When dropping low, go Berserk.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/berserkers-shield.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Breastplate",
                IconId: 2876,
                ItemDescription: {
                    Description: "Physical Protection.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+20"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9837,
                ItemTier: 1,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 9837,
                ShortDesc: "Physical Protection and MP5",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/breastplate.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9837,
                DeviceName: "Silver Breastplate",
                IconId: 2875,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+35"
                        },
                        {
                            Description: "Mana",
                            Value: "+200"
                        },
                        {
                            Description: "MP5",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9838,
                ItemTier: 2,
                Price: 450,
                RestrictedRoles: "no restrictions",
                RootItemId: 9837,
                ShortDesc: "Physical Protection and MP5.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/silver-breastplate.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9838,
                DeviceName: "Hide of the Nemean Lion",
                IconId: 2862,
                ItemDescription: {
                    Description: "This item provides block stacks.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+75"
                        },
                        {
                            Description: "Mana",
                            Value: "+200"
                        },
                        {
                            Description: "MP5",
                            Value: "+20"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Every 15 seconds you gain a block stack if you have at least 120 total Protections from items, preventing the next Basic Attack from damaging you. For each additional 120 total Protections from items the max. stacks increases, up to a cap of 3."
                },
                ItemId: 7578,
                ItemTier: 3,
                Price: 1150,
                RestrictedRoles: "no restrictions",
                RootItemId: 9837,
                ShortDesc: "Block incoming Basic Attacks",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/hide-of-the-nemean-lion.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9838,
                DeviceName: "Breastplate of Valor",
                IconId: 2874,
                ItemDescription: {
                    Description: "This item gives the owner reduced ability cooldowns.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+65"
                        },
                        {
                            Description: "Mana",
                            Value: "+300"
                        },
                        {
                            Description: "MP5",
                            Value: "+10"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 7641,
                ItemTier: 3,
                Price: 1250,
                RestrictedRoles: "no restrictions",
                RootItemId: 9837,
                ShortDesc: "Provides Cooldown Reduction and Physical Protection",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/breastplate-of-valor.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9838,
                DeviceName: "Spectral Armor",
                IconId: 4324,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+65"
                        },
                        {
                            Description: "Health",
                            Value: "+200"
                        },
                        {
                            Description: "Mana",
                            Value: "+300"
                        },
                        {
                            Description: "MP5",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Critical Strikes only deal 50% bonus damage to you instead of 100%."
                },
                ItemId: 12664,
                ItemTier: 3,
                Price: 1050,
                RestrictedRoles: "no restrictions",
                RootItemId: 9837,
                ShortDesc: "Reduces damage from Critical Strikes",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/spectral-armor.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9838,
                DeviceName: "Contagion",
                IconId: 7779,
                ItemDescription: {
                    Description: "This item grants the owner an aura that reduces the healing of nearby enemies.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+60"
                        },
                        {
                            Description: "Health",
                            Value: "+150"
                        },
                        {
                            Description: "Mana",
                            Value: "+250"
                        },
                        {
                            Description: "MP5",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: "AURA - Enemy gods within 55 units have their healing reduced by 20%. This does not stack with similar Auras."
                },
                ItemId: 17467,
                ItemTier: 3,
                Price: 1000,
                RestrictedRoles: "no restrictions",
                RootItemId: 9837,
                ShortDesc: "Aura that reduces the healing of nearby enemies",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/contagion.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12665,
                DeviceName: "Evolved Gauntlet of Thebes",
                IconId: 6631,
                ItemDescription: {
                    Description: "This item increases allied protections.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+300"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+50"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+50"
                        },
                        {
                            Description: "HP5",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: "AURA - Allies within 70 units receive 10 Physical Protection and 10 Magical Protection."
                },
                ItemId: 15594,
                ItemTier: 4,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 9839,
                ShortDesc: "Increases allies' protections",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/evolved-gauntlet-of-thebes.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Cloak",
                IconId: 2881,
                ItemDescription: {
                    Description: "Health and Protections.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+10"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9840,
                ItemTier: 1,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 9840,
                ShortDesc: "Health and Protections.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/cloak.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9840,
                DeviceName: "Cloak of Concentration",
                IconId: 2554,
                ItemDescription: {
                    Description: "This item grants the owner damage mitigation when hit by a hard crowd control.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+7%"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9360,
                ItemTier: 2,
                Price: 850,
                RestrictedRoles: "no restrictions",
                RootItemId: 9840,
                ShortDesc: "Protections and Cooldown Reduction.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/cloak-of-concentration.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9840,
                DeviceName: "Cleric's Cloak",
                IconId: 2879,
                ItemDescription: {
                    Description: "This item allows the owner to absorb a single hard crowd control effect.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+10"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+10"
                        },
                        {
                            Description: "Health",
                            Value: "+200"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9842,
                ItemTier: 2,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 9840,
                ShortDesc: "Health and Protections.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/clerics-cloak.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9840,
                DeviceName: "Armored Cloak",
                IconId: 2880,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+25"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+25"
                        },
                        {
                            Description: "Health",
                            Value: "+125"
                        },
                        {
                            Description: "Mana",
                            Value: "+125"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9843,
                ItemTier: 2,
                Price: 900,
                RestrictedRoles: "no restrictions",
                RootItemId: 9840,
                ShortDesc: "Health and Protections.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/armored-cloak.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9842,
                DeviceName: "Magi's Cloak",
                IconId: 2877,
                ItemDescription: {
                    Description: "This item allows the owner to absorb a single hard Crowd Control effect.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+15"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+15"
                        },
                        {
                            Description: "Health",
                            Value: "+300"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Protects you from a single hard Crowd Control effect or Root once every 70 seconds. When this occurs, you gain 1s of Crowd Control immunity."
                },
                ItemId: 7935,
                ItemTier: 3,
                Price: 1000,
                RestrictedRoles: "no restrictions",
                RootItemId: 9840,
                ShortDesc: "Absorbs a hard Crowd Control effect.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/magis-cloak.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9843,
                DeviceName: "Hide of the Urchin",
                IconId: 2536,
                ItemDescription: {
                    Description: "This item gives the owner stacking Protections.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "Health",
                            Value: "+250"
                        },
                        {
                            Description: "Mana",
                            Value: "+250"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - You gain +3 Magical Protection and +3 Physical Protection for each god kill or assist. At 7 stacks this item Evolves, providing a Health Shield that gains stacks every 2s. Shield only stacks if you have not taken or dealt damage in the last 5s. Each stack provides 10% of 100 Health +5 Per Level. "
                },
                ItemId: 9338,
                ItemTier: 3,
                Price: 900,
                RestrictedRoles: "no restrictions",
                RootItemId: 9840,
                ShortDesc: "Gains protection from god kills or assists. Evolves.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/hide-of-the-urchin.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9360,
                DeviceName: "Spirit Robe",
                IconId: 2555,
                ItemDescription: {
                    Description: "This item grants the owner Damage Mitigation when hit by a hard Crowd Control Effect.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+40"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+40"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        },
                        {
                            Description: "Crowd Control Reduction",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - You gain an additional 15% Damage Mitigation for 3s whenever you are hit with a hard Crowd Control Effect. This can only occur once every 15 seconds."
                },
                ItemId: 9361,
                ItemTier: 3,
                Price: 1000,
                RestrictedRoles: "no restrictions",
                RootItemId: 9840,
                ShortDesc: "Grants the owner Damage Mitigation when hit by a hard Crowd Control Effect.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/spirit-robe.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9360,
                DeviceName: "Mantle of Discord",
                IconId: 4328,
                ItemDescription: {
                    Description: "This item grants the owner Damage Mitigation when hit by a hard Crowd Control Effect.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+60"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+60"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - If you take damage below 30% health you unleash a shockwave that stuns all enemies within a range of 20 units for 1s and become immune to Crowd Control for 1s. This effect cannot trigger more than once every 90s."
                },
                ItemId: 12666,
                ItemTier: 3,
                Price: 1400,
                RestrictedRoles: "no restrictions",
                RootItemId: 9840,
                ShortDesc: "Stun all nearby Enemies upon falling below 30% Health.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/mantle-of-discord.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9338,
                DeviceName: "Evolved Hide of the Urchin",
                IconId: 6632,
                ItemDescription: {
                    Description: "This item gives the owner stacking Protections.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+51"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+51"
                        },
                        {
                            Description: "Health",
                            Value: "+250"
                        },
                        {
                            Description: "Mana",
                            Value: "+250"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Provides a Health Shield that gains stacks every 2s. Shield only stacks if you have not taken or dealt damage in the last 5s. Each stack provides 10% of 100 Health +5 Per Level. The full shield will regenerate after 20 seconds."
                },
                ItemId: 15646,
                ItemTier: 4,
                Price: 1,
                RestrictedRoles: "no restrictions",
                RootItemId: 9843,
                ShortDesc: "",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/evolved-hide-of-the-urchin.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Talisman",
                IconId: 2884,
                ItemDescription: {
                    Description: "Health and Magical Protection.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+75"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9844,
                ItemTier: 1,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 9844,
                ShortDesc: "Health and Magical Protection.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/talisman.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9844,
                DeviceName: "Silver Talisman",
                IconId: 2883,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+125"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+45"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9846,
                ItemTier: 2,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 9844,
                ShortDesc: "Health and Magical Protection.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/silver-talisman.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9846,
                DeviceName: "Bulwark of Hope",
                IconId: 2882,
                ItemDescription: {
                    Description: "This item gives the owner a shield to damage when at low Health.",
                    Menuitems: [
                        {
                            Description: "Magical Protection",
                            Value: "+60"
                        },
                        {
                            Description: "Health",
                            Value: "+250"
                        },
                        {
                            Description: "Crowd Control Reduction",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - When you take damage and are below 40% Health, you gain a Shield with health equal to 150 +10 Per Player Level for 20s. Can only occur once every 60s."
                },
                ItemId: 8540,
                ItemTier: 3,
                Price: 1050,
                RestrictedRoles: "no restrictions",
                RootItemId: 9844,
                ShortDesc: "Gain a damage shield at low Health",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/bulwark-of-hope.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9846,
                DeviceName: "Pestilence",
                IconId: 2558,
                ItemDescription: {
                    Description: "This item grants the owner an aura that reduces the healing of nearby enemies.",
                    Menuitems: [
                        {
                            Description: "Magical Protection",
                            Value: "+80"
                        },
                        {
                            Description: "Health",
                            Value: "+250"
                        }
                    ],
                    SecondaryDescription: "AURA - Enemy gods within 55 units have their healing reduced by 20%. This does not stack with similar Auras."
                },
                ItemId: 9364,
                ItemTier: 3,
                Price: 1000,
                RestrictedRoles: "no restrictions",
                RootItemId: 9844,
                ShortDesc: "Aura that reduces the healing of nearby enemies",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/pestilence.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9846,
                DeviceName: "Heartward Amulet",
                IconId: 3490,
                ItemDescription: {
                    Description: "This item gives the owner an aura of magical protections.",
                    Menuitems: [
                        {
                            Description: "Magical Protection",
                            Value: "+55"
                        },
                        {
                            Description: "Health",
                            Value: "+250"
                        }
                    ],
                    SecondaryDescription: "AURA - Allied gods within 70 units have their Magical Protections increased by 20 and their MP5 increased by 30."
                },
                ItemId: 11116,
                ItemTier: 3,
                Price: 850,
                RestrictedRoles: "no restrictions",
                RootItemId: 9844,
                ShortDesc: "Magical Protection Aura",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/heartward-amulet.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9846,
                DeviceName: "Talisman of Energy",
                IconId: 5053,
                ItemDescription: {
                    Description: "Kills or Assists increase nearby allies' stats.",
                    Menuitems: [
                        {
                            Description: "Magical Protection",
                            Value: "+60"
                        },
                        {
                            Description: "Health",
                            Value: "+300"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Getting a kill or assist on enemies causes you and allies within 70 units to gain stacks of energy. Energy stacks provide 2% Movement Speed, 2% Attack Speed, and 10MP5 per stack. Lasts 10s and stacks up to 6 times."
                },
                ItemId: 15619,
                ItemTier: 3,
                Price: 900,
                RestrictedRoles: "no restrictions",
                RootItemId: 9844,
                ShortDesc: "Kills and assists give benefits for self and nearby allies",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/talisman-of-energy.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Emerald Ring",
                IconId: 2833,
                ItemDescription: {
                    Description: "Magical Power and Attack Speed.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+25"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9847,
                ItemTier: 1,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 9847,
                ShortDesc: "Magical Power",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/emerald-ring.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9847,
                DeviceName: "Enchanted Ring",
                IconId: 2832,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+55"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9848,
                ItemTier: 2,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 9847,
                ShortDesc: "Magical Power and Movement Speed",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/enchanted-ring.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9848,
                DeviceName: "Demonic Grip",
                IconId: 2831,
                ItemDescription: {
                    Description: "This item makes your Basic Attacks reduce the Magical Protection of your target.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+75"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+30%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Your Basic Attacks reduce your target's Magical Protection by 10% for 3s (max 3 Stacks)."
                },
                ItemId: 8564,
                ItemTier: 3,
                Price: 1000,
                RestrictedRoles: "no restrictions",
                RootItemId: 9847,
                ShortDesc: "Basic Attacks reduce Magical Protection",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/demonic-grip.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9848,
                DeviceName: "Telkhines Ring",
                IconId: 2830,
                ItemDescription: {
                    Description: "Successful Basic Attacks deal bonus Magical Damage.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+100"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+25%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Your Basic Attacks deal bonus damage of 10 + 15% of your Magical Power. This effect does not hit structures."
                },
                ItemId: 9351,
                ItemTier: 3,
                Price: 1400,
                RestrictedRoles: "no restrictions",
                RootItemId: 9847,
                ShortDesc: "Bonus Magical Basic Attack damage",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/telkhines-ring.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9848,
                DeviceName: "Hastened Ring",
                IconId: 5450,
                ItemDescription: {
                    Description: "This item gives the owner increased movement speed and attack speed.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+70"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+25%"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+7%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Hitting an enemy God with a Basic Attack grants Haste for 6s, causing you to be immune from Basic Attack Movement Penalty. (Internal Cooldown 25s)"
                },
                ItemId: 14840,
                ItemTier: 3,
                Price: 1400,
                RestrictedRoles: "no restrictions",
                RootItemId: 9847,
                ShortDesc: "Successful Basic Attacks causes you to be immune from Basic Attack Movement Penalty.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/hastened-ring.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9848,
                DeviceName: "Ring of Hecate",
                IconId: 8138,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+80"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+25%"
                        },
                        {
                            Description: "Magical Lifesteal",
                            Value: "+15%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Each successful basic attack applies a hex to enemies and empowers you, increasing your power by 5% and reducing the power of your opponent by 5% for 5s. (Max. 3 Stacks)."
                },
                ItemId: 18191,
                ItemTier: 3,
                Price: 1300,
                RestrictedRoles: "no restrictions",
                RootItemId: 9847,
                ShortDesc: "Attack Speed and Lifesteal",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/ring-of-hecate.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Magic Focus",
                IconId: 2838,
                ItemDescription: {
                    Description: "Magical Power and Magical Penetration.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+25"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9849,
                ItemTier: 1,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 9849,
                ShortDesc: "Magical Power and Penetration.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/magic-focus.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9849,
                DeviceName: "Spell Focus",
                IconId: 2836,
                ItemDescription: {
                    Description: "This item grants the owner magical penetration.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+45"
                        },
                        {
                            Description: "Magical Penetration",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9850,
                ItemTier: 2,
                Price: 850,
                RestrictedRoles: "no restrictions",
                RootItemId: 9849,
                ShortDesc: "Magical Power and Penetration",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/spell-focus.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9849,
                DeviceName: "Enchanted Spear",
                IconId: 2837,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+30"
                        },
                        {
                            Description: "Magical Penetration",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9851,
                ItemTier: 2,
                Price: 750,
                RestrictedRoles: "no restrictions",
                RootItemId: 9849,
                ShortDesc: "Magical Power and Penetration.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/enchanted-spear.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9851,
                DeviceName: "Divine Ruin",
                IconId: 2823,
                ItemDescription: {
                    Description: "This item causes the owner's abilities to reduce the healing of their targets.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+90"
                        },
                        {
                            Description: "Magical Penetration",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Enemies hit by your abilities have 30% reduced healing for 6 seconds."
                },
                ItemId: 7832,
                ItemTier: 3,
                Price: 900,
                RestrictedRoles: "no restrictions",
                RootItemId: 9849,
                ShortDesc: "Enemies hit by your abilities have reduced healing.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/divine-ruin.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9851,
                DeviceName: "Spear of Desolation",
                IconId: 4327,
                ItemDescription: {
                    Description: "This item reduces ability cooldowns after a kill or assist",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+110"
                        },
                        {
                            Description: "Magical Penetration",
                            Value: "+10"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - If you receive a kill or assist on an Enemy God all of you non-ultimate cooldowns are reduced by 2 seconds and your ultimate cooldown is reduced by 8s."
                },
                ItemId: 12670,
                ItemTier: 3,
                Price: 1200,
                RestrictedRoles: "no restrictions",
                RootItemId: 9849,
                ShortDesc: "Reduces ability cooldowns after a kill or assist",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/spear-of-desolation.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9850,
                DeviceName: "Obsidian Shard",
                IconId: 2834,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+80"
                        },
                        {
                            Description: "Magical Penetration",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Your first ability cast gains 10% Magical Penetration. This can only occur once every 10 seconds."
                },
                ItemId: 18179,
                ItemTier: 3,
                Price: 1050,
                RestrictedRoles: "no restrictions",
                RootItemId: 9849,
                ShortDesc: "Strong Magical Penetration against Tanks",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/obsidian-shard.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9851,
                DeviceName: "Spear of the Magus",
                IconId: 2835,
                ItemDescription: {
                    Description: "Mark a target for increased damage from all sources.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+110"
                        },
                        {
                            Description: "Magical Penetration",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Whenever you damage an enemy god with an ability you mark them to take 7.5% increased damage from all sources. This effect lasts for 7s and can only occur once every 15s."
                },
                ItemId: 18180,
                ItemTier: 3,
                Price: 1150,
                RestrictedRoles: "no restrictions",
                RootItemId: 9849,
                ShortDesc: "Mark a target to take increased damage",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/spear-of-the-magus.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Traveler's Cloak",
                IconId: 2859,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+40"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+10"
                        },
                        {
                            Description: "Health",
                            Value: "+125"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9854,
                ItemTier: 1,
                Price: 590,
                RestrictedRoles: "no restrictions",
                RootItemId: 9854,
                ShortDesc: "",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/travelers-cloak.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Uncommon Staff",
                IconId: 6634,
                ItemDescription: {
                    Description: "Magical Power and Health.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+15"
                        },
                        {
                            Description: "Health",
                            Value: "+75"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9855,
                ItemTier: 1,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 9855,
                ShortDesc: "Magical Power and Health.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/uncommon-staff.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9855,
                DeviceName: "Sorcerer's Staff",
                IconId: 6635,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+45"
                        },
                        {
                            Description: "Health",
                            Value: "+100"
                        },
                        {
                            Description: "Mana",
                            Value: "+100"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9856,
                ItemTier: 2,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 9855,
                ShortDesc: "Magical Power and Health",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/sorcerers-staff.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9855,
                DeviceName: "Rod of Healing",
                IconId: 2872,
                ItemDescription: {
                    Description: "This item gives the owner an aura that increases healing.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+45"
                        },
                        {
                            Description: "Health",
                            Value: "+100"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+5%"
                        }
                    ],
                    SecondaryDescription: "AURA - Allied gods within 70 units have their Healing increased by 10%."
                },
                ItemId: 9857,
                ItemTier: 2,
                Price: 850,
                RestrictedRoles: "no restrictions",
                RootItemId: 9855,
                ShortDesc: "Magical Power and Increased Healing ",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/rod-of-healing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9855,
                DeviceName: "Fortified Scepter",
                IconId: 5043,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+50"
                        },
                        {
                            Description: "Health",
                            Value: "+150"
                        },
                        {
                            Description: "Crowd Control Reduction",
                            Value: "+5%"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 14081,
                ItemTier: 2,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 9855,
                ShortDesc: "Magical Power and Health.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/fortified-scepter.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 14081,
                DeviceName: "Gem of Isolation",
                IconId: 2869,
                ItemDescription: {
                    Description: "This item causes your damaging abilities to slow your targets.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+90"
                        },
                        {
                            Description: "Health",
                            Value: "+200"
                        },
                        {
                            Description: "Crowd Control Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Enemies hit by your damaging abilities will move 20% Slower for 1 seconds."
                },
                ItemId: 7594,
                ItemTier: 3,
                Price: 1350,
                RestrictedRoles: "no restrictions",
                RootItemId: 9855,
                ShortDesc: "Damaging abilities Slow enemy movement.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/gem-of-isolation.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9856,
                DeviceName: "Warlock's Staff",
                IconId: 6637,
                ItemDescription: {
                    Description: "This item grants the owner permanent Stacks of Health and Magical Power on minion kills.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+85"
                        },
                        {
                            Description: "Health",
                            Value: "+150"
                        },
                        {
                            Description: "Mana",
                            Value: "+200"
                        },
                        {
                            Description: "Magical Penetration",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - You permanently gain +1 Health and +0.8 Magical Power per Stack, and receive 5 Stacks for a god kill and 1 Stack per minion kill. (Max. 75 Stacks)"
                },
                ItemId: 7917,
                ItemTier: 3,
                Price: 1150,
                RestrictedRoles: "no restrictions",
                RootItemId: 9855,
                ShortDesc: "Increase max. Health and Power from minion kills",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/warlocks-staff.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 14081,
                DeviceName: "Ethereal Staff",
                IconId: 2868,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+90"
                        },
                        {
                            Description: "Health",
                            Value: "+200"
                        },
                        {
                            Description: "Crowd Control Reduction",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Whenever you damage an enemy god with an ability you steal 8% maximum mana as well as 6% maximum health from the target. The Stats remain stolen for 45s and targets affected can have multiple Buffs and Debuffs at once. This can only occur once every 15 seconds."
                },
                ItemId: 8599,
                ItemTier: 3,
                Price: 1250,
                RestrictedRoles: "no restrictions",
                RootItemId: 9855,
                ShortDesc: "Temporarily steal enemy health and mana",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/ethereal-staff.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9857,
                DeviceName: "Rod of Asclepius",
                IconId: 2542,
                ItemDescription: {
                    Description: "This item gives the owner an aura that increases healing.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+90"
                        },
                        {
                            Description: "Health",
                            Value: "+200"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+7%"
                        }
                    ],
                    SecondaryDescription: "AURA - Allied gods within 70 units have their Healing increased by 20%."
                },
                ItemId: 9345,
                ItemTier: 3,
                Price: 1100,
                RestrictedRoles: "no restrictions",
                RootItemId: 9855,
                ShortDesc: "Magical Power and Increased Healing",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/rod-of-asclepius.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7917,
                DeviceName: "Warlock's Staff",
                IconId: 6636,
                ItemDescription: {
                    Description: "This item grants the owner permanent Stacks of Health and Magical Power on minion kills.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+145"
                        },
                        {
                            Description: "Health",
                            Value: "+225"
                        },
                        {
                            Description: "Mana",
                            Value: "+200"
                        },
                        {
                            Description: "Magical Penetration",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 15724,
                ItemTier: 4,
                Price: 1,
                RestrictedRoles: "no restrictions",
                RootItemId: 9856,
                ShortDesc: "Increased max. Health and Power from kills",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/warlocks-staff.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Spellbook",
                IconId: 6628,
                ItemDescription: {
                    Description: "Magical Power and Mana.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Mana",
                            Value: "+75"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9858,
                ItemTier: 1,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 9858,
                ShortDesc: "Magical Power and Mana.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/spellbook.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9858,
                DeviceName: "Book of Souls",
                IconId: 6629,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+55"
                        },
                        {
                            Description: "Mana",
                            Value: "+125"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9859,
                ItemTier: 2,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 9858,
                ShortDesc: "Magical Power and Mana.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/book-of-souls.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9859,
                DeviceName: "Book of Thoth",
                IconId: 2909,
                ItemDescription: {
                    Description: "This item gives the owner additional Mana on kills and converts all Mana to Magical Power.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+80"
                        },
                        {
                            Description: "Mana",
                            Value: "+250"
                        },
                        {
                            Description: "MP5",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - You permanently gain 10 Mana per Stack, and receive 5 Stacks for a god kill and 1 Stack for a minion kill (max. 75 Stacks). 6% of your Mana from items is converted to Magical Power. At 75 stacks this item Evolves, gaining 3% extra Mana to Power conversion."
                },
                ItemId: 7334,
                ItemTier: 3,
                Price: 1150,
                RestrictedRoles: "no restrictions",
                RootItemId: 9858,
                ShortDesc: "Gain Mana Stacks from kills and converts Mana to Magical Power",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/book-of-thoth.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9859,
                DeviceName: "Polynomicon",
                IconId: 2824,
                ItemDescription: {
                    Description: "This item causes the owner's next Basic Attack to deal additional damage after using an ability.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+95"
                        },
                        {
                            Description: "Mana",
                            Value: "+300"
                        },
                        {
                            Description: "Magical Lifesteal",
                            Value: "+12%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Using an ability gives your next Basic Attack within the next 8 seconds +75% of your Magical Power as additional Magical Damage. The effect can only apply once every 3 seconds."
                },
                ItemId: 7597,
                ItemTier: 3,
                Price: 950,
                RestrictedRoles: "no restrictions",
                RootItemId: 9858,
                ShortDesc: "Abilities increase damage on next Basic Attack",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/polynomicon.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9859,
                DeviceName: "Soul Reaver",
                IconId: 2908,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+95"
                        },
                        {
                            Description: "Mana",
                            Value: "+300"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Your abilities deal an additional 2% of the target's maximum Health as Magical Damage. If the target has over 2000 Health, your ability bonus damage scales up. This effect reaches a maximum of 9% Maximum Health damage at 2750 Health. Subsequent hits on the same target do half the bonus damage for the next 3s."
                },
                ItemId: 9128,
                ItemTier: 3,
                Price: 1300,
                RestrictedRoles: "no restrictions",
                RootItemId: 9858,
                ShortDesc: "Abilities deal bonus damage based on targets maximum health",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/soul-reaver.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9859,
                DeviceName: "Book of the Dead",
                IconId: 5040,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+100"
                        },
                        {
                            Description: "Mana",
                            Value: "+200"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - If you drop below 40% Health, you gain a shield equal to 20% of your maximum Mana. This shield lasts 6s. This effect can only occur once every 90s."
                },
                ItemId: 14080,
                ItemTier: 3,
                Price: 1250,
                RestrictedRoles: "no restrictions",
                RootItemId: 9858,
                ShortDesc: "Gain a shield when low on Health",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/book-of-the-dead.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7334,
                DeviceName: "Evolved Book of Thoth",
                IconId: 6652,
                ItemDescription: {
                    Description: "This item gives the owner additional Mana on kills and converts all Mana to Magical Power.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+80"
                        },
                        {
                            Description: "Mana",
                            Value: "+1000"
                        },
                        {
                            Description: "MP5",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - 9% of your Mana from items is converted to Magical Power."
                },
                ItemId: 15725,
                ItemTier: 4,
                Price: 1,
                RestrictedRoles: "no restrictions",
                RootItemId: 9859,
                ShortDesc: "Mana is converted to Magical Power",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/evolved-book-of-thoth.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Lost Artifact",
                IconId: 2844,
                ItemDescription: {
                    Description: "Magical Power and MP5.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+20"
                        },
                        {
                            Description: "MP5",
                            Value: "+5"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 9860,
                ItemTier: 1,
                Price: 550,
                RestrictedRoles: "no restrictions",
                RootItemId: 9860,
                ShortDesc: "Magical Power and MP5.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/lost-artifact.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9860,
                DeviceName: "Cursed Orb",
                IconId: 2842,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+55"
                        },
                        {
                            Description: "Mana",
                            Value: "+75"
                        },
                        {
                            Description: "MP5",
                            Value: "+15"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+2%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Killing or assisting an enemy minion provides you with 1 stack, granting 1% Movement Speed and 4 Magical Power per stack. Stacks last for 10s and stack up to 4 times. Enemy gods provide 4 stacks."
                },
                ItemId: 7924,
                ItemTier: 2,
                Price: 1050,
                RestrictedRoles: "no restrictions",
                RootItemId: 9860,
                ShortDesc: "Kills and assists provide stacking Movement Speed and Magical Power",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/cursed-orb.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9860,
                DeviceName: "Restored Artifact",
                IconId: 2843,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+60"
                        },
                        {
                            Description: "MP5",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9861,
                ItemTier: 2,
                Price: 850,
                RestrictedRoles: "no restrictions",
                RootItemId: 9860,
                ShortDesc: "Magical Power and MP5",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/restored-artifact.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9861,
                DeviceName: "Rod of Tahuti",
                IconId: 2841,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+160"
                        },
                        {
                            Description: "MP5",
                            Value: "+30"
                        },
                        {
                            Description: "Magical Penetration",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Basic Attacks and Abilities gain 25% additional Magical Power against targets below 50% Health."
                },
                ItemId: 7600,
                ItemTier: 3,
                Price: 1600,
                RestrictedRoles: "no restrictions",
                RootItemId: 9860,
                ShortDesc: "Increased damage against low health Gods",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/rod-of-tahuti.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9861,
                DeviceName: "Chronos' Pendant",
                IconId: 8139,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+100"
                        },
                        {
                            Description: "MP5",
                            Value: "+20"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Every 10s the Pendant activates, subtracting 1s from all of your abilities currently on Cooldown. The initial countdown will not start until you leave the fountain."
                },
                ItemId: 7784,
                ItemTier: 3,
                Price: 1300,
                RestrictedRoles: "no restrictions",
                RootItemId: 9860,
                ShortDesc: "Magical Power and Strong Cooldown Reduction",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/chronos-pendant.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7924,
                DeviceName: "Doom Orb",
                IconId: 2839,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+145"
                        },
                        {
                            Description: "Mana",
                            Value: "+200"
                        },
                        {
                            Description: "MP5",
                            Value: "+25"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+4%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Killing or assisting an enemy minion provides you with 1 stack, granting 1% Movement Speed and 4 Magical Power per stack. Stacks last for 15s and stack up to 5 times. Enemy gods provide 5 stacks."
                },
                ItemId: 16882,
                ItemTier: 3,
                Price: 1250,
                RestrictedRoles: "no restrictions",
                RootItemId: 9860,
                ShortDesc: "Kills and assists provide stacking Movement Speed and Magical Power",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/doom-orb.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9861,
                DeviceName: "Charon's Coin",
                IconId: 8135,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+80"
                        },
                        {
                            Description: "Magical Penetration",
                            Value: "+20%"
                        },
                        {
                            Description: "HP5",
                            Value: "+7"
                        },
                        {
                            Description: "MP5",
                            Value: "+20"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - On god kill or assist a coin is flipped. If heads, you gain a stack of 7 HP5. If tails, you gain a stack of 2% Movement Speed. Each effect can stack up to 4 times and at 8 stacks this item evolves. You also gain 1 gold every time the coin is flipped."
                },
                ItemId: 18183,
                ItemTier: 3,
                Price: 1100,
                RestrictedRoles: "no restrictions",
                RootItemId: 9860,
                ShortDesc: "Permanent stacks of HP5 and Movement Speed",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/charons-coin.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18183,
                DeviceName: "Evolved Charon's Coin",
                IconId: 8221,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+80"
                        },
                        {
                            Description: "HP5 & MP5",
                            Value: "+35"
                        },
                        {
                            Description: "Magical Penetration",
                            Value: "+20%"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+8%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - On god kill or assist a coin is flipped. If heads, you gain 150 Health over 6 seconds. If tails, you gain 5% Movement Speed for 6 seconds. You also gain 1 gold every time the coin is flipped."
                },
                ItemId: 18314,
                ItemTier: 4,
                Price: 1,
                RestrictedRoles: "no restrictions",
                RootItemId: 9861,
                ShortDesc: "Kills and assists on enemy gods provide Healing or Movement Speed",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/evolved-charons-coin.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Enchanted Buckler",
                IconId: 3146,
                ItemDescription: {
                    Description: "Physical Power and Magical Protection.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+10"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 10190,
                ItemTier: 1,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 10190,
                ShortDesc: "Physical Power and Magical Protection.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/enchanted-buckler.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 10190,
                DeviceName: "Warded Shield",
                IconId: 2906,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+15"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+25"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9835,
                ItemTier: 2,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 10190,
                ShortDesc: "Physical Power and Magical Protection.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/warded-shield.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9835,
                DeviceName: "Runic Shield",
                IconId: 2903,
                ItemDescription: {
                    Description: "Magical Power debuff aura.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+35"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+50"
                        },
                        {
                            Description: "Health",
                            Value: "+150"
                        }
                    ],
                    SecondaryDescription: "AURA - Enemy gods within 55 units have their Magical Power reduced by 40."
                },
                ItemId: 9111,
                ItemTier: 3,
                Price: 1000,
                RestrictedRoles: "no restrictions",
                RootItemId: 10190,
                ShortDesc: "Magical Power debuff aura.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/runic-shield.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9835,
                DeviceName: "Ancile",
                IconId: 3145,
                ItemDescription: {
                    Description: "The owner gains power as they lose health.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+60"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Whenever you take Magical Damage from an enemy ability you unleash a shockwave that Silences all enemies within a range of 30 units for 1s. This effect cannot trigger more than once every 30s."
                },
                ItemId: 13277,
                ItemTier: 3,
                Price: 1000,
                RestrictedRoles: "no restrictions",
                RootItemId: 10190,
                ShortDesc: "Silences nearby enemies when hit by a magical ability",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/ancile.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9835,
                DeviceName: "Caduceus Shield",
                IconId: 8134,
                ItemDescription: {
                    Description: "This item gives the owner an aura that increases healing.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+30"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+35"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+35"
                        },
                        {
                            Description: "Health",
                            Value: "+100"
                        }
                    ],
                    SecondaryDescription: "AURA - Allied gods within 70 units have their Healing increased by 20%."
                },
                ItemId: 18195,
                ItemTier: 3,
                Price: 1100,
                RestrictedRoles: "no restrictions",
                RootItemId: 10190,
                ShortDesc: "Physical Power and Increased Healing",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/caduceus-shield.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Imperial Helmet",
                IconId: 3260,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+10"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+20"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 10603,
                ItemTier: 1,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 10603,
                ShortDesc: "Magical Power and Physical Protection",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/imperial-helmet.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 10603,
                DeviceName: "Jade Mountain Helm",
                IconId: 3261,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+30"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 10602,
                ItemTier: 2,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 10603,
                ShortDesc: "Magical Power and Physical Protection",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/jade-mountain-helm.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 10603,
                DeviceName: "Dynasty Plate Helm",
                IconId: 3263,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+40"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "Health",
                            Value: "+50"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 10605,
                ItemTier: 2,
                Price: 1000,
                RestrictedRoles: "no restrictions",
                RootItemId: 10603,
                ShortDesc: "Provides Magical Power and Physical Protection",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/dynasty-plate-helm.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 10602,
                DeviceName: "Celestial Legion Helm",
                IconId: 3262,
                ItemDescription: {
                    Description: "Provides stacking Physical Protections",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+70"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+40"
                        },
                        {
                            Description: "MP5",
                            Value: "+20"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Every 2s you receive a stack of 7 Physical Protection, up to a max of 5 stacks. Stacks are removed upon taking Physical Damage from gods. Stacks can only be gained after not taking Physical Damage from gods for 2s."
                },
                ItemId: 10600,
                ItemTier: 3,
                Price: 950,
                RestrictedRoles: "no restrictions",
                RootItemId: 10603,
                ShortDesc: "Provides Physical Protections",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/celestial-legion-helm.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 10602,
                DeviceName: "Lotus Crown",
                IconId: 3491,
                ItemDescription: {
                    Description: "Gives protection to gods you heal.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+30"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+60"
                        },
                        {
                            Description: "MP5",
                            Value: "+20"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Any god affected by your ability heals gains 20 increased Physical and Magical Protection for 5 seconds."
                },
                ItemId: 11110,
                ItemTier: 3,
                Price: 850,
                RestrictedRoles: "no restrictions",
                RootItemId: 10603,
                ShortDesc: "Provides protections to gods you heal.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/lotus-crown.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 10602,
                DeviceName: "Jade Emperor's Crown",
                IconId: 5046,
                ItemDescription: {
                    Description: "Aura reducing enemy Physical Power.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+50"
                        },
                        {
                            Description: "Health",
                            Value: "+150"
                        }
                    ],
                    SecondaryDescription: "AURA - Enemy gods within 55 units have their Physical Power reduced by 20."
                },
                ItemId: 14179,
                ItemTier: 3,
                Price: 950,
                RestrictedRoles: "no restrictions",
                RootItemId: 10603,
                ShortDesc: "Aura reducing enemy Physical Power",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/jade-emperors-crown.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 10605,
                DeviceName: "Tyrannical Plate Helm",
                IconId: 7601,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+85"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+40"
                        },
                        {
                            Description: "Health",
                            Value: "+100"
                        },
                        {
                            Description: "Crowd Control Reduction",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "AURA - Ally lane minions within 70 units gain 20% Health and Attack Speed. Whenever an ally lane minion dies within 70 units of you, gain 5 power per stack, max 6 stacks for 15 seconds."
                },
                ItemId: 18199,
                ItemTier: 3,
                Price: 1000,
                RestrictedRoles: "no restrictions",
                RootItemId: 10603,
                ShortDesc: "Magical Power, Physical Protection and Minion empowerment",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/tyrannical-plate-helm.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Short Bow",
                IconId: 3283,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Attack Speed",
                            Value: "+15%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 10662,
                ItemTier: 1,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 10662,
                ShortDesc: "Increases Attack Speed.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/short-bow.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 10662,
                DeviceName: "Charged Bow",
                IconId: 3307,
                ItemDescription: {
                    Description: "This item has a chance to cause chain lightning, damaging nearby enemies.",
                    Menuitems: [
                        {
                            Description: "Attack Speed",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE -Every fourth Basic Attack triggers a chain lightning, damaging the target and up to 4 nearby enemies for 15 damage +30% of your total Basic Attack Power."
                },
                ItemId: 10687,
                ItemTier: 2,
                Price: 550,
                RestrictedRoles: "no restrictions",
                RootItemId: 10662,
                ShortDesc: "Has a chance to trigger chain lightning",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/charged-bow.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 10662,
                DeviceName: "Hunter's Bow",
                IconId: 4994,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Attack Speed",
                            Value: "+20%"
                        },
                        {
                            Description: "Physical Power",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 14848,
                ItemTier: 2,
                Price: 550,
                RestrictedRoles: "no restrictions",
                RootItemId: 10662,
                ShortDesc: "Increases Attack Speed.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/hunters-bow.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 10687,
                DeviceName: "Odysseus' Bow",
                IconId: 3105,
                ItemDescription: {
                    Description: "This item has a chance to cause chain lightning, damaging nearby enemies.",
                    Menuitems: [
                        {
                            Description: "Attack Speed",
                            Value: "+40%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Every fourth Basic Attack triggers a chain lightning, damaging the target and up to 4 nearby enemies for 15 damage +60% of your total Basic Attack Power."
                },
                ItemId: 10482,
                ItemTier: 3,
                Price: 900,
                RestrictedRoles: "no restrictions",
                RootItemId: 10662,
                ShortDesc: "Every four basic attacks trigger chain lightning",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/odysseus-bow.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 14848,
                DeviceName: "Ichaival",
                IconId: 3285,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Attack Speed",
                            Value: "+30%"
                        },
                        {
                            Description: "Physical Power",
                            Value: "+30"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Every successful Basic Attack increases your Physical Power by 15 and reduces the attack speed of your opponent by 10% for 5s. (Max. 3 Stacks)"
                },
                ItemId: 10664,
                ItemTier: 3,
                Price: 1250,
                RestrictedRoles: "no restrictions",
                RootItemId: 10662,
                ShortDesc: "Basic Attacks weaken enemies",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/ichaival.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 14848,
                DeviceName: "Silverbranch Bow",
                IconId: 5045,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+30"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+30%"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - For each 0.02 Attack Speed you go over cap you gain 2 Physical Power."
                },
                ItemId: 14084,
                ItemTier: 3,
                Price: 1000,
                RestrictedRoles: "no restrictions",
                RootItemId: 10662,
                ShortDesc: "Bonus Power when capped on Attack Speed",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/silverbranch-bow.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 14848,
                DeviceName: "Atalanta's Bow",
                IconId: 5451,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+25"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+25%"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Upon getting a kill or assist on an Enemy god you gain Atalanta's Agility for 10s. This effect increases your Attack Speed by 20% and decreases the Movement Penalty for attacking, backpedaling, and strafing by 30%."
                },
                ItemId: 14849,
                ItemTier: 3,
                Price: 1000,
                RestrictedRoles: "no restrictions",
                RootItemId: 10662,
                ShortDesc: "Reduce Attacking and Movement Penalties",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/atalantas-bow.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Bluestone Pendant",
                IconId: 3488,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+15"
                        },
                        {
                            Description: "Mana",
                            Value: "+50"
                        },
                        {
                            Description: "MP5",
                            Value: "+5"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Enemies hit by your damaging Abilities take an additional 30 Physical Damage over 2s. (Max 2 Stacks)"
                },
                ItemId: 11122,
                ItemTier: 1,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 11122,
                ShortDesc: "Deal additional damage with abilities.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/bluestone-pendant.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Soul Stone",
                IconId: 3494,
                ItemDescription: {
                    Description: "This starting item for Magical users restores Mana and gives the owner bonus Damage on damaging Abilities.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Mana",
                            Value: "+100"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Gain 1 stack every time you hit an enemy with a basic attack. If you have 5 stacks, the next time you deal damage with an ability the stacks are consumed and you gain 40 mana, and that ability and any abilities used in the next 3s will deal bonus damage equal to having +40 Magical Power for those abilities."
                },
                ItemId: 11123,
                ItemTier: 1,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 11123,
                ShortDesc: "Collect souls to deal extra damage.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/soul-stone.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Relic",
                IconId: 4312,
                ItemDescription: {
                    Description: "Relics provide special powers available to all gods.",
                    Menuitems: [],
                    SecondaryDescription: "Relics provide special powers available to all gods. Your first Relic is free at Level 1 and your Second Relic is unlocked once you reach Level 12."
                },
                ItemId: 12333,
                ItemTier: 1,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 12333,
                ShortDesc: "Relics provide special powers available to all gods.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/relic.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 12333,
                DeviceName: "*Hand of the Gods",
                IconId: 4311,
                ItemDescription: {
                    Description: "Deals damage to minions and jungle monsters. Stuns enemy gods.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item deals 300 +10 per God Level damage to a single enemy minion, jungle monster or jungle boss within 15 units. The target will be the one with the highest maximum health. The relic’s Cooldown will be reduced by 30s if you kill a jungle mob with it. Cooldown - 120s."
                },
                ItemId: 7892,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 12333,
                ShortDesc: "Deals damage to minions and jungle monsters.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/*hand-of-the-gods.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 7892,
                DeviceName: "Hand of the Gods Upgrade",
                IconId: 5104,
                ItemDescription: {
                    Description: "Deals damage to minions and jungle monsters. Stuns enemy gods.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item deals 300 +10 per God Level damage to a single enemy minion, jungle monster or jungle boss within 15 units. The target will be the one with the highest maximum health. The relic’s Cooldown will be reduced by 30s if you kill a jungle mob with it. Also Stuns enemy gods in range for 1s. Cooldown - 120s."
                },
                ItemId: 14159,
                ItemTier: 3,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 12333,
                ShortDesc: "Deals damage to minions and jungle monsters. Stuns enemy gods.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/hand-of-the-gods-upgrade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Glowing Emerald",
                IconId: 4325,
                ItemDescription: {
                    Description: "Physical Protection and Health.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+100"
                        },
                        {
                            Description: "HP5",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 12663,
                ItemTier: 1,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 12663,
                ShortDesc: "Health and HP5. ",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/glowing-emerald.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12663,
                DeviceName: "Emerald Talisman",
                IconId: 2953,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+200"
                        },
                        {
                            Description: "HP5",
                            Value: "+15"
                        },
                        {
                            Description: "MP5",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Regenerates 0.2% of your max. Health every second."
                },
                ItemId: 7571,
                ItemTier: 2,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 12663,
                ShortDesc: "Health and HP5",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/emerald-talisman.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12663,
                DeviceName: "Emerald Mail",
                IconId: 2912,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+200"
                        },
                        {
                            Description: "HP5",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 9839,
                ItemTier: 2,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 12663,
                ShortDesc: "Health and HP5.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/emerald-mail.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7571,
                DeviceName: "Stone of Gaia",
                IconId: 2579,
                ItemDescription: {
                    Description: "This item grants CC immunity after Knockups.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+400"
                        },
                        {
                            Description: "HP5",
                            Value: "+25"
                        },
                        {
                            Description: "MP5",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - If you are hit by a Knockup, Knockback, Pull, or Grab you gain 15% of your max Health over the next 5 seconds. This effect does not trigger on Vortexes. Can only occur once every 45s. PASSIVE - Regenerates 0.5% of your max health every second."
                },
                ItemId: 7572,
                ItemTier: 3,
                Price: 850,
                RestrictedRoles: "no restrictions",
                RootItemId: 12663,
                ShortDesc: "Grants bonus Regeneration after Knockup",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/stone-of-gaia.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9839,
                DeviceName: "Shield of Regrowth",
                IconId: 2904,
                ItemDescription: {
                    Description: "This item provides a movement speed boost after healing.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+300"
                        },
                        {
                            Description: "HP5",
                            Value: "+15"
                        },
                        {
                            Description: "MP5",
                            Value: "+15"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - After healing yourself from an ability, you gain +30% movement speed for 4 seconds. This cannot occur more than once every 10 seconds."
                },
                ItemId: 9112,
                ItemTier: 3,
                Price: 750,
                RestrictedRoles: "no restrictions",
                RootItemId: 12663,
                ShortDesc: "Provides a movement speed boost after healing.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/shield-of-regrowth.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9839,
                DeviceName: "Mail of Renewal",
                IconId: 2539,
                ItemDescription: {
                    Description: "This item regenerates Health and Mana on a kill or assist.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+400"
                        },
                        {
                            Description: "HP5",
                            Value: "+10 "
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - You gain 15% of your maximum Health and Mana over the next 3 seconds when you get a kill or assist against an enemy god or Objective."
                },
                ItemId: 9339,
                ItemTier: 3,
                Price: 1000,
                RestrictedRoles: "no restrictions",
                RootItemId: 12663,
                ShortDesc: "Regenerates Health and Mana on a kill or assist.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/mail-of-renewal.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9839,
                DeviceName: "Gauntlet of Thebes",
                IconId: 4326,
                ItemDescription: {
                    Description: "This item increases allied protections.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+300"
                        },
                        {
                            Description: "HP5",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Assists on a minion give 1 Stack and God kills and assists give 5 Stacks. Stacks provide 1 Physical and Magical Protection. At 50 Stacks this item evolves, providing an Aura of 10 Physical Protection and 10 Magical Protection."
                },
                ItemId: 12665,
                ItemTier: 3,
                Price: 1100,
                RestrictedRoles: "no restrictions",
                RootItemId: 12663,
                ShortDesc: "Gain increased Protections on Assists and enemy God deaths",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/gauntlet-of-thebes.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Shuriken",
                IconId: 4321,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+10"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+5%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 12667,
                ItemTier: 1,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 12667,
                ShortDesc: "Critical Strike and Attack Speed.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/shuriken.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12667,
                DeviceName: "8-Pointed Shuriken",
                IconId: 4322,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+25"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+7%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 12668,
                ItemTier: 2,
                Price: 750,
                RestrictedRoles: "no restrictions",
                RootItemId: 12667,
                ShortDesc: "Critical Strike and Attack Speed",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/8-pointed-shuriken.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12668,
                DeviceName: "Wind Demon",
                IconId: 4323,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+25"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+20%"
                        },
                        {
                            Description: "Critical Strike Chance",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Your Critical Hits provide you with 10% Physical Penetration and increase your Attack Speed and Movement Speed by 20% for 5s."
                },
                ItemId: 12674,
                ItemTier: 3,
                Price: 1100,
                RestrictedRoles: "no restrictions",
                RootItemId: 12667,
                ShortDesc: "Critical Hits give increased Penetration, Movement Speed, and Attack Speed.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/wind-demon.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12668,
                DeviceName: "Poisoned Star ",
                IconId: 4764,
                ItemDescription: {
                    Description: "This item causes the owner's Critical Hits to weaken Enemies.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+35"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+10%"
                        },
                        {
                            Description: "Critical Strike Chance",
                            Value: "+15%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Critical hits on enemy gods afflict them with poison for 2s. This poison slows them by 10% and reduces their damage output by 15%."
                },
                ItemId: 13427,
                ItemTier: 3,
                Price: 950,
                RestrictedRoles: "no restrictions",
                RootItemId: 12667,
                ShortDesc: "Critical Hits reduce Enemy's Movement Speed and Damage",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/poisoned-star-.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12668,
                DeviceName: "Shadowsteel Shuriken",
                IconId: 8680,
                ItemDescription: {
                    Description: "This item causes the owner's Critical Hits to reduce healing.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+40"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+15%"
                        },
                        {
                            Description: "Critical Strike Chance",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Enemies hit by your Critical Strikes have 35% reduced healing for 6s."
                },
                ItemId: 18905,
                ItemTier: 3,
                Price: 1000,
                RestrictedRoles: "no restrictions",
                RootItemId: 12667,
                ShortDesc: "Critical Hits reduce Enemy's Healing",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/shadowsteel-shuriken.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Katana",
                IconId: 4317,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+10"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+3%"
                        }
                    ],
                    SecondaryDescription: "This item and all upgrades are only available to Assassins and Warriors."
                },
                ItemId: 12671,
                ItemTier: 1,
                Price: 650,
                RestrictedRoles: "guardian,hunter,mage",
                RootItemId: 12671,
                ShortDesc: "Physical Power and Movement Speed",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/katana.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12671,
                DeviceName: "Thousand Fold Blade",
                IconId: 4318,
                ItemDescription: {
                    Description: "Physical Power and Penetration.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+5%"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 12672,
                ItemTier: 2,
                Price: 650,
                RestrictedRoles: "guardian,hunter,mage",
                RootItemId: 12671,
                ShortDesc: "Physical Power and Movement Speed",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/thousand-fold-blade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12672,
                DeviceName: "Stone Cutting Sword",
                IconId: 4320,
                ItemDescription: {
                    Description: "This item causes your Basic Attacks to reduce the target's Physical Protections.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+50"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+7%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Melee Basic Attacks decreases enemy Physical protections by 10, and increase your physical protection by 10 for 3s (max. 3 Stacks)."
                },
                ItemId: 12673,
                ItemTier: 3,
                Price: 1050,
                RestrictedRoles: "guardian,hunter,mage",
                RootItemId: 12671,
                ShortDesc: "Basic Attacks reduce target's Physical Protection",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/stone-cutting-sword.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12672,
                DeviceName: "Hastened Katana",
                IconId: 5453,
                ItemDescription: {
                    Description: "This item gives the owner increased movement speed and attack speed.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+25"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+15%"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+7%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Hitting an enemy with a Basic Attack grants Haste for 1s, causing you to be immune from Basic Attack Movement Penalty."
                },
                ItemId: 14850,
                ItemTier: 3,
                Price: 1200,
                RestrictedRoles: "guardian,hunter,mage",
                RootItemId: 12671,
                ShortDesc: "Successful Basic Attacks no longer slow",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/hastened-katana.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12672,
                DeviceName: "Golden Blade",
                IconId: 7141,
                ItemDescription: {
                    Description: "This item causes the owner's Basic Attacks to hit nearby enemies.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+30"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+15%"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - All Basic Attacks will also hit enemies within a 15 unit radius of the target for 50% of the damage to Gods, and 50% damage to Minions and Jungle Camps."
                },
                ItemId: 16592,
                ItemTier: 3,
                Price: 700,
                RestrictedRoles: "guardian,hunter,mage",
                RootItemId: 12671,
                ShortDesc: "Basic Attack hits damage additional enemies",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/golden-blade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12672,
                DeviceName: "Serrated Edge",
                IconId: 8679,
                ItemDescription: {
                    Description: "Bonus Power and Lifesteal when abilities are on cooldown.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+25"
                        },
                        {
                            Description: "Physical Lifesteal",
                            Value: "+10%"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+20%"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+7%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - For every non-ultimate ability on cooldown you gain a stack of Cruelty. Each stack provides 10 Physical Power and 3% Physical Lifesteal."
                },
                ItemId: 19003,
                ItemTier: 3,
                Price: 1350,
                RestrictedRoles: "guardian,hunter,mage",
                RootItemId: 12671,
                ShortDesc: "Bonus Power and Lifesteal when abilities are on cooldown",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/serrated-edge.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Enchanted Kusari",
                IconId: 4313,
                ItemDescription: {
                    Description: "Magical Protection.",
                    Menuitems: [
                        {
                            Description: "Magical Protection",
                            Value: "+20"
                        },
                        {
                            Description: "MP5",
                            Value: "+5"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 12675,
                ItemTier: 1,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 12675,
                ShortDesc: "Magical Protection and MP5.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/enchanted-kusari.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12675,
                DeviceName: "Spellbound Kusari",
                IconId: 4314,
                ItemDescription: {
                    Description: "Magical Protection.",
                    Menuitems: [
                        {
                            Description: "Magical Protection",
                            Value: "+40"
                        },
                        {
                            Description: "MP5",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 12676,
                ItemTier: 2,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 12675,
                ShortDesc: "Magical Protection and MP5.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/spellbound-kusari.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12676,
                DeviceName: "Genji's Guard",
                IconId: 4315,
                ItemDescription: {
                    Description: "Magical Protection and Cooldown Reduction.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+150"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+70"
                        },
                        {
                            Description: "MP5",
                            Value: "+40"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - When you take Magical Damage from Abilities your cooldowns are reduced by 3s. This can only occur once every 30s."
                },
                ItemId: 12678,
                ItemTier: 3,
                Price: 950,
                RestrictedRoles: "no restrictions",
                RootItemId: 12675,
                ShortDesc: "Magical Protection and situational Cooldown Reduction",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/genjis-guard.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12676,
                DeviceName: "Oni Hunter's Garb",
                IconId: 4316,
                ItemDescription: {
                    Description: "Magical Protection and Crowd Control Reduction.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+100"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+60"
                        },
                        {
                            Description: "MP5",
                            Value: "+30"
                        },
                        {
                            Description: "Crowd Control Reduction:",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - For each enemy God within 55 units of you, you gain a stack of 3% damage mitigation. This caps at 3 stacks."
                },
                ItemId: 12679,
                ItemTier: 3,
                Price: 850,
                RestrictedRoles: "no restrictions",
                RootItemId: 12675,
                ShortDesc: "Gives defensive bonuses for fighting near multiple enemies",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/oni-hunters-garb.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12676,
                DeviceName: "Shogun's Kusari",
                IconId: 5049,
                ItemDescription: {
                    Description: "Attack Speed Aura.",
                    Menuitems: [
                        {
                            Description: "Magical Protection",
                            Value: "+60"
                        },
                        {
                            Description: "MP5",
                            Value: "+20"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        },
                        {
                            Description: "Crowd Control Reduction",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "AURA - Allied gods within 70 units have their Attack Speed increased by 25%."
                },
                ItemId: 14178,
                ItemTier: 3,
                Price: 950,
                RestrictedRoles: "no restrictions",
                RootItemId: 12675,
                ShortDesc: "Attack Speed Aura",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/shoguns-kusari.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Scare Tactics",
                IconId: 4048,
                ItemDescription: {
                    Description: "Hit an enemy with this!",
                    Menuitems: [],
                    SecondaryDescription: "Hit an enemy with this!"
                },
                ItemId: 13668,
                ItemTier: 1,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 13668,
                ShortDesc: "Hit an enemy with this!",
                StartingItem: false,
                Type: "Consumable",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/scare-tactics.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Chalice of Healing",
                IconId: 5055,
                ItemDescription: {
                    Description: "This consumable heals you over time.",
                    Menuitems: [],
                    SecondaryDescription: "This consumable heals 250 Health over 25 seconds per use. Comes with 3 uses that are refilled if you enter the Fountain, sells for 0 gold."
                },
                ItemId: 14031,
                ItemTier: 1,
                Price: 300,
                RestrictedRoles: "no restrictions",
                RootItemId: 14031,
                ShortDesc: "Restores Health over time, can be refilled in Fountain",
                StartingItem: false,
                Type: "Consumable",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/chalice-of-healing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Chalice of Mana",
                IconId: 5057,
                ItemDescription: {
                    Description: "This consumable heals Mana over time.",
                    Menuitems: [],
                    SecondaryDescription: "This consumable heals 150 Mana over 25 seconds per use. Comes with 3 uses that are refilled if you enter the Fountain, sells for 0 gold"
                },
                ItemId: 14032,
                ItemTier: 1,
                Price: 300,
                RestrictedRoles: "no restrictions",
                RootItemId: 14032,
                ShortDesc: "Restores Mana over time, can be refilled in Fountain",
                StartingItem: false,
                Type: "Consumable",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/chalice-of-mana.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Chalice of the Oracle",
                IconId: 5059,
                ItemDescription: {
                    Description: "This is a ward that allows you to see normal enemy movements.",
                    Menuitems: [],
                    SecondaryDescription: "This consumable places a ward that allows you to see normal enemy movements with 45 units. It does respect line of sight and can't see through walls or stealth. It remains for 3 minutes or until killed. Comes with 2 uses that are refilled in Fountain, sells for 0 gold."
                },
                ItemId: 14033,
                ItemTier: 1,
                Price: 400,
                RestrictedRoles: "no restrictions",
                RootItemId: 14033,
                ShortDesc: "Detects enemies, can be refilled in Fountain",
                StartingItem: false,
                Type: "Consumable",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/chalice-of-the-oracle.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Druid Stone",
                IconId: 5042,
                ItemDescription: {
                    Description: "Magical Power and Magical Protection.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+10"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+20"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 14071,
                ItemTier: 1,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 14071,
                ShortDesc: "Magical Power and Magical Protection.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/druid-stone.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 14071,
                DeviceName: "Ward Stone",
                IconId: 2860,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+50"
                        },
                        {
                            Description: "Magical Power",
                            Value: "+20"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+30"
                        }
                    ],
                    SecondaryDescription: "AURA - Enemy gods within 55 units have their Magical Protection reduced by 5%."
                },
                ItemId: 9853,
                ItemTier: 2,
                Price: 750,
                RestrictedRoles: "no restrictions",
                RootItemId: 14071,
                ShortDesc: "Reduces the Magical Protection of enemies",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/ward-stone.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 14071,
                DeviceName: "Sage's Stone",
                IconId: 5047,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+40"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+20"
                        }
                    ],
                    SecondaryDescription: ""
                },
                ItemId: 14072,
                ItemTier: 2,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 14071,
                ShortDesc: "Magical Power and Magical Protection.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/sages-stone.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 14071,
                DeviceName: "Stone of Binding",
                IconId: 5051,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+30"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "MP5",
                            Value: "+10"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Successfully hitting an enemy god with Crowd Control will place a debuff on the enemy, reducing their Magical and Physical Protections by 10 for 5s."
                },
                ItemId: 14175,
                ItemTier: 2,
                Price: 1100,
                RestrictedRoles: "no restrictions",
                RootItemId: 14071,
                ShortDesc: "Magical Power and Protections item for CC heavy gods",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/stone-of-binding.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9853,
                DeviceName: "Void Stone",
                IconId: 2439,
                ItemDescription: {
                    Description: "This item gives the owner an aura that reduces magical protections.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+150"
                        },
                        {
                            Description: "Magical Power",
                            Value: "+40"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+60"
                        }
                    ],
                    SecondaryDescription: "AURA - Enemy gods within 55 units have their Magical Protection reduced by 10%."
                },
                ItemId: 7791,
                ItemTier: 3,
                Price: 900,
                RestrictedRoles: "no restrictions",
                RootItemId: 14071,
                ShortDesc: "Aura reduces magical protection on enemies",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/void-stone.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 14072,
                DeviceName: "Stone of Fal",
                IconId: 5052,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+80"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+40"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - You gain 20% of the Magical protections of the nearby allied god with the highest Magical protections within 70ft."
                },
                ItemId: 14079,
                ItemTier: 3,
                Price: 1200,
                RestrictedRoles: "no restrictions",
                RootItemId: 14071,
                ShortDesc: "Gain Magical protection from nearby ally",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/stone-of-fal.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "*War Flag",
                IconId: 5088,
                ItemDescription: {
                    Description: "This starter item restores its user's Health and Mana when in assist range of a slain minion.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+10"
                        },
                        {
                            Description: "Health",
                            Value: "+100"
                        },
                        {
                            Description: "MP5",
                            Value: "+5 "
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Being in range of minion or jungle camp death without dealing the killing the blow restores 5 Health and 5 Mana to all allies within 55 units and also provides allies with a stacking self buff of 1% Movement Speed and 1% Attack Speed. Lasts 6s and stacks up to 10 times. "
                },
                ItemId: 14089,
                ItemTier: 1,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 14089,
                ShortDesc: "Starter item for physical gods playing as supports",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/*war-flag.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Sands of Time",
                IconId: 5085,
                ItemDescription: {
                    Description: "This starting item reduces your cooldowns when you are hit by a Physical God",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+20"
                        },
                        {
                            Description: "MP5",
                            Value: "+5"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - This item grants 2 MP5 per 10% of your missing Mana"
                },
                ItemId: 14090,
                ItemTier: 1,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 14090,
                ShortDesc: "Cooldown Reduction and MP5",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/sands-of-time.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Swift Wing",
                IconId: 5086,
                ItemDescription: {
                    Description: "Increased movement speed when leaving the fountain.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+100"
                        },
                        {
                            Description: "HP5",
                            Value: "+10"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+5%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Whenever you leave the fountain, you gain 40% movespeed for 15s. You will lose this speed early if you enter combat."
                },
                ItemId: 14091,
                ItemTier: 1,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 14091,
                ShortDesc: "Increased movement speed when leaving the fountain.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/swift-wing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Guardian's Blessing",
                IconId: 6555,
                ItemDescription: {
                    Description: "",
                    Menuitems: [],
                    SecondaryDescription: "+100 Health +10 Physical Protection and Magical Protection +7 HP5 & 7 MP5 while within 60ft of an ally god +3 Gold per Minion Assisted ROLE QUEST: SUPPORT Assist with Minion kills to gain stacks. Each Assist is worth 1 stack. At 50 stacks Guardian's Blessing Evolves, gaining 4 Gold Per 5s."
                },
                ItemId: 15473,
                ItemTier: 1,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 15473,
                ShortDesc: "Starter Item for Supports",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/guardians-blessing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 15473,
                DeviceName: "Evolved Guardian's Blessing",
                IconId: 6556,
                ItemDescription: {
                    Description: "",
                    Menuitems: [],
                    SecondaryDescription: "+100 Health +10 Physical Protection and Magical Protection +7 HP5 & 7 MP5 while within 60ft of an ally god +3 Gold per Minion Assisted +4 GP5 ROLE QUEST: SUPPORT : COMPLETED!"
                },
                ItemId: 15477,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 15473,
                ShortDesc: "",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/evolved-guardians-blessing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Warrior's Blessing",
                IconId: 6559,
                ItemDescription: {
                    Description: null,
                    Menuitems: [],
                    SecondaryDescription: "+75 Health +10 Physical & Magical Protection +25 Health Stolen And Mana Restored Upon Damaging An Enemy God, 10s Cooldown ROLE QUEST: SOLO Dealing damage to an enemy god provides 1 stack. This effect can only occur once every 10s. Getting a Kill or Assist on an Enemy god provides 3 stacks. At 15 Stacks Warrior's Blessing Evolves, gaining +15 Physical and Magical Protection."
                },
                ItemId: 15479,
                ItemTier: 1,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 15479,
                ShortDesc: "Starter Item for Solo Laners",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/warriors-blessing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 15479,
                DeviceName: "Evolved Warrior's Blessing",
                IconId: 6560,
                ItemDescription: {
                    Description: null,
                    Menuitems: [],
                    SecondaryDescription: "+75 Health +25 Physical & Magical Protection +25 Health Stolen and Mana Restored Upon Damaging An Enemy God, 10s Cooldown ROLE QUEST: SOLO: COMPLETED!"
                },
                ItemId: 15481,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 15479,
                ShortDesc: "",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/evolved-warriors-blessing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Mage's Blessing",
                IconId: 6561,
                ItemDescription: {
                    Description: null,
                    Menuitems: [],
                    SecondaryDescription: "+10 Bonus Ability Damage +10 Physical Power +30 Magical Power +2 MP5 Per 10% Missing Mana ROLE QUEST: MID Kill or Assist Lane Minions or Enemy gods to gain stacks. Lane Minions are worth 1 Stack and Enemy gods are worth 5 Stacks. At 75 Stacks Mage's Blessing Evolves, gaining 10% Cooldown Reduction."
                },
                ItemId: 15482,
                ItemTier: 1,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 15482,
                ShortDesc: "Starter Item for Mid Laners",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/mages-blessing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 15482,
                DeviceName: "Evolved Mage's Blessing",
                IconId: 6562,
                ItemDescription: {
                    Description: null,
                    Menuitems: [],
                    SecondaryDescription: "+10 Bonus Ability Damage +10 Physical Power +30 Magical Power +2 MP5 Per 10% Missing Mana +10% Cooldown Reduction ROLE QUEST: MID: COMPLETED!"
                },
                ItemId: 15483,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 15482,
                ShortDesc: "",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/evolved-mages-blessing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Assassin's Blessing",
                IconId: 6553,
                ItemDescription: {
                    Description: "",
                    Menuitems: [],
                    SecondaryDescription: "+7 Power +100 Health +30% Damage vs. Jungle Monsters +8% Health and 25 Mana Restored on Killing a Jungle Monster ROLE QUEST: JUNGLE Kill or Assist Jungle Monsters or Enemy Gods to gain stacks. Jungle Monsters are worth 1 stack and Enemy Gods are worth 5 stacks. At 50 Stacks Assassin's Blessing Evolves, gaining +5 Penetration, and 5% Movement Speed."
                },
                ItemId: 15486,
                ItemTier: 1,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 15486,
                ShortDesc: "Starter Item for Junglers",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/assassins-blessing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 15486,
                DeviceName: "Evolved Assassin's Blessing",
                IconId: 6554,
                ItemDescription: {
                    Description: "",
                    Menuitems: [],
                    SecondaryDescription: "+7 Power +100 Health +40% Bonus Damage vs. Jungle Monsters +7% Health and 25 Mana Restored on Killing a Jungle Monster +5 Penetration +5% Movement Speed ROLE QUEST: JUNGLE: COMPLETED!"
                },
                ItemId: 15487,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 15486,
                ShortDesc: "",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/evolved-assassins-blessing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Hunter's Blessing",
                IconId: 6557,
                ItemDescription: {
                    Description: null,
                    Menuitems: [],
                    SecondaryDescription: "+15 Basic Attack Damage +10 MP5 ROLE QUEST: CARRY Kill or Assist Lane Minions or Enemy gods to gain stacks. Lane Minions are worth 1 Stack and Enemy gods are worth 5 Stacks. At 75 Stacks Hunter's Blessing Evolves, gaining 15% Attack Speed and an additional 15 Bonus Basic Attack Damage."
                },
                ItemId: 15489,
                ItemTier: 1,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 15489,
                ShortDesc: "Starter Item for Basic Attack Carries",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/hunters-blessing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 15489,
                DeviceName: "Evolved Hunter's Blessing",
                IconId: 6558,
                ItemDescription: {
                    Description: null,
                    Menuitems: [],
                    SecondaryDescription: "+30 Basic Attack Damage +10 MP5 +15% Attack Speed ROLE QUEST: CARRY: COMPLETED!"
                },
                ItemId: 15490,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 15489,
                ShortDesc: "",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/evolved-hunters-blessing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Specialist's Blessing",
                IconId: 6627,
                ItemDescription: {
                    Description: null,
                    Menuitems: [],
                    SecondaryDescription: "+10 HP5 +20 MP5 +10% Cooldown Reduction ROLE QUEST: UTILITY Damage enemies or Heal allies to gain stacks. Each time an enemy is damaged or an ally god is healed by your abilities, gain 1 stack. Each ability can only trigger 3 stacks. At 75 Stacks Specialist's Blessing Evolves, gaining 10% Movement Speed."
                },
                ItemId: 15571,
                ItemTier: 1,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 15571,
                ShortDesc: "Blessing for Healers",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/specialists-blessing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 15571,
                DeviceName: "Evolved Specialist's Blessing",
                IconId: 6626,
                ItemDescription: {
                    Description: null,
                    Menuitems: [],
                    SecondaryDescription: "+10HP5 +20 MP5 +10% Cooldown Reduction +10% Movement Speed ROLE QUEST: UTILITY: COMPLETED!"
                },
                ItemId: 15572,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 15571,
                ShortDesc: "",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/evolved-specialists-blessing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Attacker's Blessing",
                IconId: 6623,
                ItemDescription: {
                    Description: null,
                    Menuitems: [],
                    SecondaryDescription: "+20 Physical Power +25 Magical Power ROLE QUEST: DAMAGE Damage lane minions and Enemy gods to gain stacks. Dealing 100 damage to Lane Minions provide 1 Stack and Dealing 100 damage to Enemy gods provide 3 Stacks. At 100 Stacks Attacker's Blessing Evolves, gaining 10 Penetration."
                },
                ItemId: 15577,
                ItemTier: 1,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 15577,
                ShortDesc: "Blessing for Damage Dealers",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/attackers-blessing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 15577,
                DeviceName: "Evolved Attacker's Blessing",
                IconId: 6622,
                ItemDescription: {
                    Description: null,
                    Menuitems: [],
                    SecondaryDescription: "+20 Physical Power +25 Magical Power +10 Penetration ROLE QUEST: DAMAGE: COMPLETED!"
                },
                ItemId: 15578,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 15577,
                ShortDesc: "",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/evolved-attackers-blessing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 0,
                DeviceName: "Defender's Blessing",
                IconId: 6625,
                ItemDescription: {
                    Description: null,
                    Menuitems: [],
                    SecondaryDescription: "+100 Health +10 Physical Protection +10 Magical Protection ROLE QUEST: TANK Mitigate damage to gain Stacks. Mitigating 50 damage provides 1 Stack. At 75 Stacks Defender's Blessing Evolves, gaining +150 Health and Mana."
                },
                ItemId: 15597,
                ItemTier: 1,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 15597,
                ShortDesc: "Blessing for Tanks",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/defenders-blessing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 15597,
                DeviceName: "Evolved Defender's Blessing",
                IconId: 6624,
                ItemDescription: {
                    Description: null,
                    Menuitems: [],
                    SecondaryDescription: "+250 Health +150 Mana +10 Physical Protection +10 Magical Protection ROLE QUEST: TANK: COMPLETED!"
                },
                ItemId: 15598,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 15597,
                ShortDesc: "",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/evolved-defenders-blessing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Baron's Brew",
                IconId: 7022,
                ItemDescription: {
                    Description: "This consumable heals and restores Mana over time.",
                    Menuitems: [],
                    SecondaryDescription: "Rum from Baron Samedi's personal cabinet. This consumable heals 140 Health and 100 Mana over 20 seconds per use. Comes with 3 uses that are refilled if you enter the Fountain, sells for 0 gold."
                },
                ItemId: 16083,
                ItemTier: 1,
                Price: 150,
                RestrictedRoles: "no restrictions",
                RootItemId: 16083,
                ShortDesc: "Restores Health and Mana over time.",
                StartingItem: false,
                Type: "Consumable",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/barons-brew.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Mask",
                IconId: 7068,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+50"
                        },
                        {
                            Description: "Mana",
                            Value: "+50"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 16393,
                ItemTier: 1,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 16393,
                ShortDesc: "Health and Mana",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/mask.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 16393,
                DeviceName: "Protector's Mask",
                IconId: 5305,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+50"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+15"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+15"
                        },
                        {
                            Description: "Crowd Control Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "Passive - Only can be bought by Mages, Hunters, Assassins"
                },
                ItemId: 16394,
                ItemTier: 2,
                Price: 700,
                RestrictedRoles: "guardian,warrior",
                RootItemId: 16393,
                ShortDesc: "Health and Protections",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/protectors-mask.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 16393,
                DeviceName: "Fighter's Mask",
                IconId: 5084,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+30"
                        },
                        {
                            Description: "Magical Power",
                            Value: "+60"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Only can be bought by Warriors, Guardians"
                },
                ItemId: 16397,
                ItemTier: 2,
                Price: 700,
                RestrictedRoles: "assassin,hunter,mage",
                RootItemId: 16393,
                ShortDesc: "Extra Power",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/fighters-mask.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 16395,
                DeviceName: "Bumba's Mask",
                IconId: 7070,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+30"
                        },
                        {
                            Description: "Magical Power ",
                            Value: "+65"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - GAIN MOBILITY, SACRIFICE DEFENSE & DAMAGE <font color='#42F46E'>+35% Movement Speed <font color='#F44242'>+15% Damage Taken <font color='#F44242'>-15% Damage Dealt"
                },
                ItemId: 8987,
                ItemTier: 3,
                Price: 1300,
                RestrictedRoles: "no restrictions",
                RootItemId: 16393,
                ShortDesc: "Gain Mobility, Sacrifice Defense and Damage",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/bumbas-mask.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 16397,
                DeviceName: "Rangda's Mask",
                IconId: 7069,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+60"
                        },
                        {
                            Description: "Magical Power",
                            Value: "+100"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - GAIN DAMAGE, SACRIFICE DEFENSES Only can be bought by Warriors, Guardians <font color='#42F46E'>+20% Damage Dealt <font color='#F44242'>+20% Damage Taken"
                },
                ItemId: 14098,
                ItemTier: 3,
                Price: 1300,
                RestrictedRoles: "assassin,hunter,mage",
                RootItemId: 16393,
                ShortDesc: "Gain Damage, Sacrifice Defenses",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/rangdas-mask.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 16394,
                DeviceName: "Lono's Mask",
                IconId: 7071,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+250"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+40"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+40"
                        },
                        {
                            Description: "Crowd Control Reduction",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - GAIN DEFENSE, SACRIFICE DAMAGE Only can be bought by Mages, Hunters, Assassins <font color='#42F46E'>-20% Damage Taken <font color='#F44242'>-20% Damage Dealt <font color='#F44242'>-20% Healing Done"
                },
                ItemId: 14541,
                ItemTier: 3,
                Price: 1100,
                RestrictedRoles: "guardian,warrior",
                RootItemId: 16393,
                ShortDesc: "Gain Defense, Sacrifice Damage",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/lonos-mask.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "n",
                ChildItemId: 14541,
                DeviceName: "Evolved Lono's Mask",
                IconId: 5462,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+150"
                        },
                        {
                            Description: "HP5",
                            Value: "+5"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 14857,
                ItemTier: 4,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 16394,
                ShortDesc: "Bonus max Health on assists. Gold Bonus on Completing Stacks.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/evolved-lonos-mask.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Elixir of Speed",
                IconId: 7490,
                ItemDescription: {
                    Description: "This consumable increases your Movement Speed.",
                    Menuitems: [],
                    SecondaryDescription: "This consumable increases your Movement Speed by 18% permanently. This effect disables Movement Speed from Boots or Shoes."
                },
                ItemId: 16878,
                ItemTier: 1,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 16878,
                ShortDesc: "Provides a Speed Buff",
                StartingItem: false,
                Type: "Consumable",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/elixir-of-speed.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Gem Of Fate",
                IconId: 7718,
                ItemDescription: {
                    Description: "Cooldown Reduction and Ultimate Activation",
                    Menuitems: [
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 17349,
                ItemTier: 1,
                Price: 900,
                RestrictedRoles: "no restrictions",
                RootItemId: 17349,
                ShortDesc: "Cooldown Reduction and Ultimate Activation",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/gem-of-fate.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 17349,
                DeviceName: "Honed Edge",
                IconId: 7720,
                ItemDescription: {
                    Description: "Cooldown Reduction and Physical Power",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+30"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 17351,
                ItemTier: 2,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 17349,
                ShortDesc: "Cooldown Reduction and Physical Power",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/honed-edge.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 17349,
                DeviceName: "Knight's Shield",
                IconId: 7719,
                ItemDescription: {
                    Description: "Cooldown Reduction and Protections",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+25"
                        },
                        {
                            Description: "Magical protection",
                            Value: "+25"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 17352,
                ItemTier: 2,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 17349,
                ShortDesc: "Cooldown Reduction and Protections",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/knights-shield.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 17349,
                DeviceName: "Apprentice Staff",
                IconId: 7721,
                ItemDescription: {
                    Description: "Cooldown Reduction and Magical Power",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+50"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: null
                },
                ItemId: 17353,
                ItemTier: 2,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 17349,
                ShortDesc: "Cooldown Reduction and Magical Power",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/apprentice-staff.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 17353,
                DeviceName: "Staff of Myrddin",
                IconId: 7725,
                ItemDescription: {
                    Description: "On ultimate use your next ability has no cooldown.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+110"
                        },
                        {
                            Description: "Magical Penetration",
                            Value: "+10%"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - When your Ultimate ability has finished casting, your next non-ultimate ability cast within the next 10s will have no cooldown but will only deal 70% of its normal damage and healing. This can only occur once every 45 seconds."
                },
                ItemId: 17354,
                ItemTier: 3,
                Price: 1200,
                RestrictedRoles: "no restrictions",
                RootItemId: 17349,
                ShortDesc: "On ultimate use your next ability has no cooldown",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/staff-of-myrddin.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 17352,
                DeviceName: "Pridwen",
                IconId: 7724,
                ItemDescription: {
                    Description: "On ultimate use, gain a defensive shield to punish attacks.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - When your Ultimate ability has finished casting, you gain a Shield equal to your Protections for 5s. When destroyed, by timing out or being depleted, it explodes and deals Magical damage equal to 50% of the Shield’s initial Health and slows targets by 25% for 3s. This can only occur once every 45 seconds."
                },
                ItemId: 17355,
                ItemTier: 3,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 17349,
                ShortDesc: "On ultimate use, gain a defensive shield to punish attacks",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/pridwen.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 17351,
                DeviceName: "Arondight",
                IconId: 7723,
                ItemDescription: {
                    Description: "On ultimate use seek out and banish evil.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+75"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - When your Ultimate ability has finished casting, reveal all enemy gods within 120 units for 8s. While moving towards revealed enemies gain 30% Movement Speed. When first striking a revealed target they take an additional 40 + 30% of your Physical Power. This can only occur once every 45 seconds."
                },
                ItemId: 17356,
                ItemTier: 3,
                Price: 1000,
                RestrictedRoles: "hunter",
                RootItemId: 17349,
                ShortDesc: "On ultimate use seek out and banish evil.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/arondight.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 17351,
                DeviceName: "Fail-not",
                IconId: 7722,
                ItemDescription: {
                    Description: "On ultimate use your next damaging ability marks an enemies weak point.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+45"
                        },
                        {
                            Description: "Critical Strike Chance",
                            Value: "+20%"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+20%"
                        },
                        {
                            Description: "Physical Penetration",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - When your Ultimate ability has finished casting, your next ability or basic attack within 8s that damages an enemy god marks them, increasing the chance you and your allies can land a Critical Strike by 15% for 10 seconds. This can only occur once every 45 seconds."
                },
                ItemId: 17357,
                ItemTier: 3,
                Price: 1200,
                RestrictedRoles: "assassin,warrior",
                RootItemId: 17349,
                ShortDesc: "On ultimate use your next damaging ability marks an enemies weak point",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/fail-not.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Potion of Power",
                IconId: 1980,
                ItemDescription: {
                    Description: null,
                    Menuitems: [
                        {
                            Description: " ",
                            Value: ""
                        },
                        {
                            Description: "Unlocks at level 10",
                            Value: ""
                        }
                    ],
                    SecondaryDescription: " This consumable increases your Physical Power by 40, Magical Power by 70 and Cooldown Reduction by 10% for 5 minutes or until you are killed. "
                },
                ItemId: 18194,
                ItemTier: 1,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 18194,
                ShortDesc: "Increases Physical and Magical Power on use",
                StartingItem: false,
                Type: "Consumable",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/potion-of-power.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Hand of the Gods",
                IconId: 8137,
                ItemDescription: {
                    Description: "",
                    Menuitems: [],
                    SecondaryDescription: "This consumable deals 200 True damage to Jungle Monsters around you. This only affects Monsters on your side of the Jungle."
                },
                ItemId: 18200,
                ItemTier: 1,
                Price: 100,
                RestrictedRoles: "no restrictions",
                RootItemId: 18200,
                ShortDesc: "Deals damage to Jungle Monsters",
                StartingItem: false,
                Type: "Consumable",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/hand-of-the-gods.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Vision Shard",
                IconId: 8136,
                ItemDescription: {
                    Description: null,
                    Menuitems: [],
                    SecondaryDescription: "Using this item places a ward that lasts 60 seconds. Vision Shard can be upgraded to a new relic once you reach Level 12. Cooldown - 120s."
                },
                ItemId: 18307,
                ItemTier: 1,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Allows you to place a short duration ward",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/vision-shard.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18307,
                DeviceName: "Heavenly Wings",
                IconId: 4309,
                ItemDescription: {
                    Description: "Increases ally Movement Speed",
                    Menuitems: [],
                    SecondaryDescription: "Using this item increases the Movement Speed of allied gods within 55 units by 20% for 5s and makes them immune to Slows. Cooldown - 140s"
                },
                ItemId: 7353,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Increases ally Movement Speed.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/heavenly-wings.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18307,
                DeviceName: "Cursed Ankh",
                IconId: 5064,
                ItemDescription: {
                    Description: "Reduces enemy Healing.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item reduces the Healing received by all enemy gods within 55 units by 40% for 10s and removes 50% of any currently applied shield. Cooldown - 120s."
                },
                ItemId: 7671,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Reduces enemy Healing",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/cursed-ankh.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18307,
                DeviceName: "Aegis Amulet",
                IconId: 4306,
                ItemDescription: {
                    Description: "Using this item grants the owner invulnerability for a short duration.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item makes you invulnerable to damage and healing for 1.5s, and prevents you from taking any actions. You may still move. Cooldown - 180s."
                },
                ItemId: 7672,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Invulnerability for a duration.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/aegis-amulet.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18307,
                DeviceName: "Blink Rune",
                IconId: 5060,
                ItemDescription: {
                    Description: "Short range teleport.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item will allow you to teleport up to 45 units away instantly. This item can not be used if you have taken or dealt damage in the last 3s. Cooldown - 140s."
                },
                ItemId: 8844,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Short range teleport",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/blink-rune.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18307,
                DeviceName: "Purification Beads",
                IconId: 4301,
                ItemDescription: {
                    Description: "Removes Crowd Control Effects.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item removes Crowd Control Effects and makes you immune to new ones for 2s. Cooldown - 160s."
                },
                ItemId: 8879,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Removes Crowd Control Effects.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/purification-beads.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18307,
                DeviceName: "Teleport Glyph",
                IconId: 5076,
                ItemDescription: {
                    Description: "Teleport to an allied structure or ward. Not interrupted by damage. ",
                    Menuitems: [],
                    SecondaryDescription: "Using this item allows you to teleport to any allied structure while Rooted in place. This effect is not interrupted by damage but is interrupted by hard Crowd Control. Cooldown - 200s."
                },
                ItemId: 9040,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Teleport to an allied structure. Not interrupted by damage.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/teleport-glyph.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18307,
                DeviceName: "Meditation Cloak",
                IconId: 4305,
                ItemDescription: {
                    Description: "Mana and Health restoration.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item restores 75 Health + 12 Health per level and 30% Mana to all Allied gods within 35 units. Cooldown - 120s."
                },
                ItemId: 9041,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Mana and Health restoration.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/meditation-cloak.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18307,
                DeviceName: "Magic Shell",
                IconId: 4308,
                ItemDescription: {
                    Description: "Protections and Damage Mitigation Buff",
                    Menuitems: [],
                    SecondaryDescription: "Using this item applies a shield to themselves and allies within 35 units for 100 Health + 12 Health per God Level for 3s. Cooldown - 150s."
                },
                ItemId: 9120,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Health Shield.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/magic-shell.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18307,
                DeviceName: "Shield of Thorns",
                IconId: 5072,
                ItemDescription: {
                    Description: "Upon activation you reflect 30% of all damage you take for the next 5s back to its owner.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item reflects 30% of all damage you take, before mitigations, for the next 5s, back to its owner as Magical Damage. If you are dealt 120 * your level damage while this effect is active, the effect will end early. Cooldown - 120s."
                },
                ItemId: 11106,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Reflect 40% of all damage",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/shield-of-thorns.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18307,
                DeviceName: "Sundering Spear",
                IconId: 5074,
                ItemDescription: {
                    Description: "Fires True Damage Projectile.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item fires a bolt that travels 70 units, stopping on the first god hit dealing 15% of the target's Current Health as True Damage and destroying any shields. Cooldown - 110s."
                },
                ItemId: 12580,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Fires Damage Increasing Projectile",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/sundering-spear.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18307,
                DeviceName: "Phantom Veil",
                IconId: 4671,
                ItemDescription: {
                    Description: "Ghostwalk",
                    Menuitems: [],
                    SecondaryDescription: "Using this item allows you and allied gods within 35 units to pass through players and player made objects for 5s. Cooldown - 150s."
                },
                ItemId: 13193,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Ghostwalk.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/phantom-veil.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18307,
                DeviceName: "Horrific Emblem",
                IconId: 5068,
                ItemDescription: {
                    Description: "Reduces enemy gods Attack Speed and Movement Speed.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item Slows the Movement Speed of all enemy gods within 35 units by 30% for 5s. Their Attack Speed is also reduced by 15% for the duration. Cooldown - 130s."
                },
                ItemId: 14056,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Reduces enemy Attack Speed and Movement Speed.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/horrific-emblem.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18307,
                DeviceName: "Bracer of Undoing",
                IconId: 5062,
                ItemDescription: {
                    Description: "Heals Mana and Health.",
                    Menuitems: [],
                    SecondaryDescription: "Using this restores 40% Health and Mana lost within the last 5s. Cooldown - 120s."
                },
                ItemId: 14112,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Heals Mana and Health.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/bracer-of-undoing.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18307,
                DeviceName: "Belt of Frenzy",
                IconId: 4304,
                ItemDescription: {
                    Description: "Ally damage buff.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item grants all allied gods within 70 units 10% Increased Damage dealt to all targets, including objectives, and 15% Attack Speed increase for 5 seconds. Cooldown - 120s."
                },
                ItemId: 14536,
                ItemTier: 2,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Ally damage buff.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/belt-of-frenzy.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 8879,
                DeviceName: "Purification Beads Upgrade",
                IconId: 5109,
                ItemDescription: {
                    Description: "Removes Crowd Control Effects.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item removes Crowd Control Effects and makes you immune to new ones for 2s. Cooldown - 130s."
                },
                ItemId: 14146,
                ItemTier: 3,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Removes Crowd Control Effects.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/purification-beads-upgrade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7353,
                DeviceName: "Heavenly Wings Upgrade",
                IconId: 5105,
                ItemDescription: {
                    Description: "Increases ally Movement Speed",
                    Menuitems: [],
                    SecondaryDescription: "Using this item increases the Movement Speed of allied gods within 55 units by 20% for 5s, makes them immune to Slows, and grants Haste causing them to be immune to Basic Attack Movement Penalty. Cooldown - 140s"
                },
                ItemId: 14147,
                ItemTier: 3,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Increases ally Movement Speed.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/heavenly-wings-upgrade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 8844,
                DeviceName: "Blink Rune Upgrade",
                IconId: 5061,
                ItemDescription: {
                    Description: "Short range teleport.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item will allow you to teleport up to 45 units away instantly. After using this item you gain a 10% Damage Mitigation Buff for 2s. This item can not be used if you have taken or dealt damage in the last 3s. Cooldown - 120s."
                },
                ItemId: 14150,
                ItemTier: 3,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Short range teleport",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/blink-rune-upgrade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7671,
                DeviceName: "Cursed Ankh Upgrade",
                IconId: 5065,
                ItemDescription: {
                    Description: "Reduces enemy Healing.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item reduces the Healing received by all enemy gods within 55 units by 40% for 10s and removes 50% of any currently applied shield. Enemies that are healed by god abilities while affected by this curse take 20% more damage from all sources for the duration of the curse. Cooldown - 120s."
                },
                ItemId: 14151,
                ItemTier: 3,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Reduced enemy healing.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/cursed-ankh-upgrade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9041,
                DeviceName: "Meditation Cloak Upgrade",
                IconId: 5107,
                ItemDescription: {
                    Description: "Mana and Health restoration.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item restores 75 Health + 12 Health per level and 30% Mana to all Allied gods within 35 units. Allies affected by Meditation Cloak have their abilities' mana cost reduced by 30% and their Ability Cooldowns reduced by 1s upon use. Cooldown - 120s."
                },
                ItemId: 14152,
                ItemTier: 3,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Mana and Health restoration.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/meditation-cloak-upgrade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 13193,
                DeviceName: "Phantom Veil Upgrade",
                IconId: 5108,
                ItemDescription: {
                    Description: "Ghostwalk and Damage Reduction Buff.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item allows you and allied gods within 35 units to pass through players and player made objects for 10s. It also provides a 15% Damage Mitigation Buff for 5s. Cooldown - 150s."
                },
                ItemId: 14153,
                ItemTier: 3,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Ghostwalk and Damage Mitigation Buff",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/phantom-veil-upgrade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 7672,
                DeviceName: "Aegis Amulet Upgrade",
                IconId: 5103,
                ItemDescription: {
                    Description: "Using this item grants the owner invulnerability for a short duration.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item makes you invulnerable to damage and healing for 1.5s, and prevents you from taking any actions. You may still move. Cooldown - 150s."
                },
                ItemId: 14154,
                ItemTier: 3,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Invulnerability for a duration.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/aegis-amulet-upgrade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9120,
                DeviceName: "Magic Shell Upgrade",
                IconId: 5106,
                ItemDescription: {
                    Description: "Protections and Damage Mitigation Buff.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item applies a shield to himself and allies within 35 units for 100 Health + 12 Health per God Level for 3 seconds. Additionally, all allies receive 2 stacks of Block, absorbing the next 2 Basic Attacks. Cooldown - 150s."
                },
                ItemId: 14155,
                ItemTier: 3,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Health Shield and Block Stacks.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/magic-shell-upgrade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 12580,
                DeviceName: "Sundering Spear Upgrade",
                IconId: 5075,
                ItemDescription: {
                    Description: "Fires True Damage Projectile.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item fires a bolt that travels 70 units, stopping on the first god hit dealing 15% of the target's Current Health as True Damage, destroying any shields, and increasing their damage taken by 20% for 5s. Cooldown - 110s."
                },
                ItemId: 14156,
                ItemTier: 3,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Fires True Damage Projectile",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/sundering-spear-upgrade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 9040,
                DeviceName: "Teleport Glyph Upgrade",
                IconId: 5077,
                ItemDescription: {
                    Description: "Teleport to an allied structure. Not interrupted by damage. ",
                    Menuitems: [],
                    SecondaryDescription: "Using this item allows you to teleport to any allied structure or ward while Rooted in place. This effect is not interrupted by damage but is interrupted by hard Crowd Control. Cooldown - 200s."
                },
                ItemId: 14157,
                ItemTier: 3,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Teleport to an allied structure or ward. Not interrupted by damage.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/teleport-glyph-upgrade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 11106,
                DeviceName: "Shield of Thorns Upgrade",
                IconId: 5073,
                ItemDescription: {
                    Description: "Upon activation you reflect 30% of all damage you take for the next 5s back to its owner.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item reflects 30% of all damage you take, before mitigations, for the next 5 seconds, back to its owner as Magical Damage. If you are dealt 120 * your level damage while this effect is active, the effect will end early. While this is active enemies can only lifesteal from you for 50% of their total lifesteal. Cooldown - 120s."
                },
                ItemId: 14158,
                ItemTier: 3,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Reflect 40% of all damage",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/shield-of-thorns-upgrade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 14056,
                DeviceName: "Horrific Emblem Upgrade",
                IconId: 5069,
                ItemDescription: {
                    Description: "Reduces enemy gods Attack Speed and Movement Speed.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item Slows the Movement Speed of all enemy gods within 35 units by 30% for 5s. Their Attack Speed is reduced by 25% for the duration. Additionally, their Damage Dealt is reduced by 15%. Cooldown - 130s."
                },
                ItemId: 14162,
                ItemTier: 3,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Reduces enemy Attack Speed and Movement Speed.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/horrific-emblem-upgrade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 14112,
                DeviceName: "Bracer of Undoing Upgrade",
                IconId: 5063,
                ItemDescription: {
                    Description: "Reduces ability Cooldowns and heals Mana and Health.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item subtracts 3s from all abilities currently on Cooldown and restores 40% Health and Mana lost within the last 5s. Cooldown - 120s."
                },
                ItemId: 14164,
                ItemTier: 3,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Reduces ability Cooldowns and heals Mana and Health.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/bracer-of-undoing-upgrade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 14536,
                DeviceName: "Belt of Frenzy Upgrade",
                IconId: 5302,
                ItemDescription: {
                    Description: "Ally damage buff.",
                    Menuitems: [],
                    SecondaryDescription: "Using this item grants all allied gods within 70 units 10% Increased Damage dealt to all targets, including objectives, and 15% Attack Speed increase for 8 seconds. While active they also gain +10 Penetration. Cooldown - 120s."
                },
                ItemId: 14538,
                ItemTier: 3,
                Price: 500,
                RestrictedRoles: "no restrictions",
                RootItemId: 18307,
                ShortDesc: "Ally damage buff.",
                StartingItem: false,
                Type: "Active",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/belt-of-frenzy-upgrade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Magic Acorn",
                IconId: 8682,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Movement Speed",
                            Value: "+8%"
                        }
                    ],
                    SecondaryDescription: "This item can be upgraded from anywhere and replaces Boots for Ratatoskr."
                },
                ItemId: 18703,
                ItemTier: 1,
                Price: 0,
                RestrictedRoles: "no restrictions",
                RootItemId: 18703,
                ShortDesc: "Starting Acorn",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/magic-acorn.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18703,
                DeviceName: "Lively Acorn",
                IconId: 8683,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+10"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE: When Ratatoskr deals damage with an ability he restores 3% of his Maximum Health."
                },
                ItemId: 18704,
                ItemTier: 2,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 18703,
                ShortDesc: "Restorative Acorn",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/lively-acorn.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18703,
                DeviceName: "Nettle Acorn",
                IconId: 8684,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+15"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: " "
                },
                ItemId: 18705,
                ItemTier: 2,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 18703,
                ShortDesc: "Powerful Acorn",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/nettle-acorn.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18705,
                DeviceName: "Bristlebush Acorn",
                IconId: 8687,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+35"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+20%"
                        },
                        {
                            Description: "Critical Strike Chance",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE: Dart deals 35% increased damage and can Critically Strike. When Dart damages an enemy Ratatoskr gains 10% Physical Lifesteal and 10% Basic Attack damage for 6s."
                },
                ItemId: 18706,
                ItemTier: 3,
                Price: 1350,
                RestrictedRoles: "no restrictions",
                RootItemId: 18703,
                ShortDesc: "Dart becomes empowered",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/bristlebush-acorn.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18705,
                DeviceName: "Thistlethorn Acorn",
                IconId: 8688,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+45"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE: Enemies hit by Acorn Blast are debuffed, taking 5% additional damage from Ratatoskr's abilities, stacking up to 3 times. Acorn Blast now fires 5 Acorns."
                },
                ItemId: 18707,
                ItemTier: 3,
                Price: 1350,
                RestrictedRoles: "no restrictions",
                RootItemId: 18703,
                ShortDesc: "Acorn Blast becomes empowered.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/thistlethorn-acorn.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18704,
                DeviceName: "Evergreen Acorn",
                IconId: 8685,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+25"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+20%"
                        },
                        {
                            Description: "Maximum Health",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE: When Ratatoskr deals damage to an enemy god with an ability he restores 7% of his Maximum Health and Mana."
                },
                ItemId: 18708,
                ItemTier: 3,
                Price: 1350,
                RestrictedRoles: "no restrictions",
                RootItemId: 18703,
                ShortDesc: "Restore health when hitting with abilities",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/evergreen-acorn.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 18704,
                DeviceName: "Thickbark Acorn",
                IconId: 8686,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+25"
                        },
                        {
                            Description: "Movement Speed",
                            Value: "+20%"
                        },
                        {
                            Description: "Protections",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE: When Ratatoskr deals damage with an ability he restores 3% of his Maximum Health. Flurry now provides protections equal to the protections shred from enemy gods. Flurry gains an additional charge."
                },
                ItemId: 18709,
                ItemTier: 3,
                Price: 1350,
                RestrictedRoles: "no restrictions",
                RootItemId: 18703,
                ShortDesc: "Flurry becomes empowered.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/thickbark-acorn.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Bluestone Pendant",
                IconId: 9184,
                ItemDescription: {
                    Description: "",
                    Menuitems: [],
                    SecondaryDescription: "+10 Physical Power +20 HP5 +10 MP5 PASSIVE - Enemies hit by your damaging Abilities take an additional 25 Physical Damage over 2s. (Max 2 Stacks) Can be upgraded at level 20."
                },
                ItemId: 19490,
                ItemTier: 1,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 19490,
                ShortDesc: "Deal additional damage with abilities.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/bluestone-pendant.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19490,
                DeviceName: "Bluestone Brooch",
                IconId: 9185,
                ItemDescription: {
                    Description: "",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+45"
                        },
                        {
                            Description: "HP5",
                            Value: "+30"
                        },
                        {
                            Description: "MP5",
                            Value: "+30"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Enemies hit by your damaging abilities take an additional 25 (+7.5% of their Current Health) as Physical Damage over 2s. (Max 2 Stacks)"
                },
                ItemId: 19491,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19490,
                ShortDesc: "Deal additional damage with abilities.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/bluestone-brooch.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19490,
                DeviceName: "Corrupted Bluestone",
                IconId: 9186,
                ItemDescription: {
                    Description: "Corrupt your opponents to gain power.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+60"
                        },
                        {
                            Description: "HP5",
                            Value: "+20"
                        },
                        {
                            Description: "MP5",
                            Value: "+20"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Enemies hit by your damaging Abilities take an additional 75 Physical Damage over 5s and have their Attack Speed reduced 10%. (Max 2 Stacks). For every enemy corrupted you gain 15% Attacks Speed up to a Maximum of 5 enemies."
                },
                ItemId: 19750,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19490,
                ShortDesc: "Corrupt your opponents to gain Attack Speed.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/corrupted-bluestone.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Death's Toll",
                IconId: 9172,
                ItemDescription: {
                    Description: "Basic Attack restore the wielder. ",
                    Menuitems: [],
                    SecondaryDescription: "+10 Physical Power +20 Magical Power +75 Health PASSIVE - Hitting an enemy with a Basic Attack restores 2 Health (+1% of your Maximum Health) and 1 Mana (+1.5% of your Maximum Mana). Basic Attacks that deal AoE damage restore half as much for each enemy hit after the first. Can be upgraded at level 20."
                },
                ItemId: 19492,
                ItemTier: 1,
                Price: 750,
                RestrictedRoles: "no restrictions",
                RootItemId: 19492,
                ShortDesc: "Basic Attacks restore health and mana.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/deaths-toll.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19492,
                DeviceName: "Death's Embrace",
                IconId: 9173,
                ItemDescription: {
                    Description: "This item gives the owner additional Health every time they hit with a Basic Attack.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+80"
                        },
                        {
                            Description: "Magical Power",
                            Value: "+140"
                        },
                        {
                            Description: "Health",
                            Value: "+200"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Hitting an enemy with a Basic Attack restores 3% of your Health and Mana. Basic Attacks that deal AoE damage restore half as much for each enemy hit after the first. Can be upgraded at level 20."
                },
                ItemId: 19493,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19492,
                ShortDesc: "Basic Attacks restore more Health and Mana.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/deaths-embrace.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19492,
                DeviceName: "Death's Temper",
                IconId: 9174,
                ItemDescription: {
                    Description: "Bonus Attack Power on Kill",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+50"
                        },
                        {
                            Description: "Magical power",
                            Value: "+75"
                        },
                        {
                            Description: "Health",
                            Value: "+100"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+30%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - When an enemy dies near you gain 1 stack of Temper that provides 3.5% increased Basic Attack Damage for 10s. This can stack up to 10 times. If an enemy god dies near you immediately gain 5 stacks."
                },
                ItemId: 19587,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19492,
                ShortDesc: "Killing enemies provides Basic Attack Damage",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/deaths-temper.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Gilded Arrow",
                IconId: 9175,
                ItemDescription: {
                    Description: "Mark a minion as your bounty.",
                    Menuitems: [],
                    SecondaryDescription: "+15 Basic Attack Damage +50 Health +7 MP5 PASSIVE - Every 10s the highest health nearby enemy minion or jungle monster is marked. If you secure the killing blow on that target you gain 10 bonus gold and 20% attack speed for 8s, and restore 20 Mana. Can be upgraded at level 20."
                },
                ItemId: 19494,
                ItemTier: 1,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 19494,
                ShortDesc: "Mark a minion as your bounty.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/gilded-arrow.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19494,
                DeviceName: "Diamond Arrow",
                IconId: 9176,
                ItemDescription: {
                    Description: "Defeating enemies provides gold and attack speed.",
                    Menuitems: [
                        {
                            Description: "Basic Attack Damage",
                            Value: "+80"
                        },
                        {
                            Description: "Health",
                            Value: "+100"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - When you kill an enemy you gain 10 gold and 20% Attack Speed for 8s. This can stack up to 3 times. If you kill an enemy god you gain 3 stacks and 30 gold immediately."
                },
                ItemId: 19495,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19494,
                ShortDesc: "Defeating enemies provides gold and attack speed.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/diamond-arrow.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19494,
                DeviceName: "Ornate Arrow",
                IconId: 9177,
                ItemDescription: {
                    Description: "Accrue gold, allowing your horde of treasure to empower you.",
                    Menuitems: [
                        {
                            Description: "Basic Attack Damage",
                            Value: "+60"
                        },
                        {
                            Description: "Health",
                            Value: "+150"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - All sources of gold gain are increased by 20%. For every 100 gold in you have gain 1% Attack Speed and 0.8% Critical Strike Chance, up to a maximum of 25 stacks."
                },
                ItemId: 19650,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19494,
                ShortDesc: "Accrue gold, allowing your horde of treasure to empower you",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/ornate-arrow.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Warrior's Axe",
                IconId: 9187,
                ItemDescription: {
                    Description: "This starter item steals life while fighting.",
                    Menuitems: [],
                    SecondaryDescription: "+15 Physical Protection +10 Magical Protection +50 Health +2 Flat Damage Reduction PASSIVE - Damaging an enemy god steals 25 health away from your target and restores it to you. This effect can only occur once every 10s. Can be upgraded at level 20."
                },
                ItemId: 19496,
                ItemTier: 1,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 19496,
                ShortDesc: "Steal your opponent's health through combat.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/warriors-axe.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19496,
                DeviceName: "Sundering Axe",
                IconId: 9188,
                ItemDescription: {
                    Description: "This starter item steals life while fighting.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "Health",
                            Value: "+250"
                        },
                        {
                            Description: "Flat Damage Reduction",
                            Value: "+5"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Damaging an enemy god steals 10% of their Current Health away from your target and restores it to you. This effect can only occur once every 7s."
                },
                ItemId: 19512,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19496,
                ShortDesc: "Steal a large amount of health from enemies during combat.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/sundering-axe.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19496,
                DeviceName: "Hero's Axe",
                IconId: 9189,
                ItemDescription: {
                    Description: "Shield your CC'd allies.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+35"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+35"
                        },
                        {
                            Description: "Health",
                            Value: "+300"
                        },
                        {
                            Description: "Crowd Control Reduction",
                            Value: "+30%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - When an ally god within 55 units of you is hit by a hard crowd control effect, give them a shield equal to 15% of your Maximum Health. This effect can only occur once every 8s."
                },
                ItemId: 19607,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19496,
                ShortDesc: "Shield your CC'd allies.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/heros-axe.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Manikin Scepter",
                IconId: 9196,
                ItemDescription: {
                    Description: "This item burns and slows enemies.",
                    Menuitems: [],
                    SecondaryDescription: "+10 Basic Attack Damage +15 Physical Protection +3 Flat Damage Reduction PASSIVE - Enemies hit by your Basic Attacks are burned, taking 20 Physical Damage over 2s and have their Attack Speed reduced by 7%. Jungle Monsters take 2.5x the amount of damage. This effect can stack up to 4 times. Can be upgraded at level 20."
                },
                ItemId: 19500,
                ItemTier: 1,
                Price: 750,
                RestrictedRoles: "no restrictions",
                RootItemId: 19500,
                ShortDesc: "Basic attack hits burn enemies. Jungle Monsters take extra damage.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/manikin-scepter.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19500,
                DeviceName: "Manikin Mace",
                IconId: 9197,
                ItemDescription: {
                    Description: "This item burns and slows enemies.",
                    Menuitems: [
                        {
                            Description: "Basic Attack Damage",
                            Value: "+50"
                        },
                        {
                            Description: "Health",
                            Value: "+100"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "Damage Reduction",
                            Value: "+8"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Enemies hit by your Basic Attacks are burned, taking 60 physical damage over 2s and have their Attack Speed slowed by 10%. Jungle Monsters and Bosses take quadruple damage. This effect can stack up to 4 times."
                },
                ItemId: 19513,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19500,
                ShortDesc: "Basic attack burn enemies. Jungle Monsters take extra damage.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/manikin-mace.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19500,
                DeviceName: "Manikin Hidden Blade",
                IconId: 9198,
                ItemDescription: {
                    Description: "Attack first for massive damage.",
                    Menuitems: [
                        {
                            Description: "Basic Attack Damage",
                            Value: "+75"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "Damage Reduction",
                            Value: "+5"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - If you have not taken or dealt damage in the last 5s and hit an enemy god, Jungle Monster, or Jungle Boss, they immediately take 15% of their Current Health as Physical Damage and are slowed by 20% for 5s."
                },
                ItemId: 19641,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19500,
                ShortDesc: "Attack first for massive damage.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/manikin-hidden-blade.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Bumba's Dagger",
                IconId: 9199,
                ItemDescription: {
                    Description: "Gives users Gold and Mana for killing Jungle monsters.",
                    Menuitems: [],
                    SecondaryDescription: "+50 Health +50 Mana PASSIVE - Your Basic Attacks deal +15 True Damage and your Abilities deal +30% Damage versus Jungle Monsters. When a Jungle Monster is killed you are restored for 10% of the Monster's Health and 25 Mana. Can be upgraded at level 20."
                },
                ItemId: 19502,
                ItemTier: 1,
                Price: 600,
                RestrictedRoles: "no restrictions",
                RootItemId: 19502,
                ShortDesc: "Defeating Jungle Monsters provides health and mana.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/bumbas-dagger.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19502,
                DeviceName: "Bumba's Spear",
                IconId: 9200,
                ItemDescription: {
                    Description: "Jungles and Objective fall before you.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+60"
                        },
                        {
                            Description: "Magical Power",
                            Value: "+90"
                        },
                        {
                            Description: "Health",
                            Value: "+200"
                        },
                        {
                            Description: "Mana",
                            Value: "+200"
                        }
                    ],
                    SecondaryDescription: "Your Basic Attacks deal +50 True Damage and your Abilities +50% damage against Jungle Camps, Structures, and Jungle Bosses. When any of these die you are healed for 10% of their Health, 10% of your Mana, and are given 10 gold."
                },
                ItemId: 19514,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19502,
                ShortDesc: "Jungle Monsters and Objectives take massive damage from you.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/bumbas-spear.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19502,
                DeviceName: "Bumba's Hammer",
                IconId: 9201,
                ItemDescription: {
                    Description: "Weave between Basic Attacks and abilities.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+300"
                        },
                        {
                            Description: "Mana",
                            Value: "+200"
                        },
                        {
                            Description: "Penetration",
                            Value: "+10%"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - After casting an ability your next Basic Attack deals an additional 80 True Damage. After hitting a Basic Attack empowered by Bumba’s Hammer, your active cooldowns are reduced by 1s and you are healed for 5% of your Maximum Health. "
                },
                ItemId: 19831,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "guardian",
                RootItemId: 19502,
                ShortDesc: "Weave in attacks and abilities.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/bumbas-hammer.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Sands of Time",
                IconId: 9214,
                ItemDescription: {
                    Description: "Cooldown Reduction and MP5",
                    Menuitems: [],
                    SecondaryDescription: "+30 Magical Power +5 MP5 +10% Cooldown Reduction PASSIVE - This item grants 2 MP5 per 10% of your missing Mana. Can be upgraded at level 20."
                },
                ItemId: 19508,
                ItemTier: 1,
                Price: 800,
                RestrictedRoles: "no restrictions",
                RootItemId: 19508,
                ShortDesc: "Cooldown Reduction and MP5",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/sands-of-time.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19508,
                DeviceName: "Pendulum of Ages",
                IconId: 9215,
                ItemDescription: {
                    Description: "This starting item reduces your cooldowns when you are hit by a Physical God",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+90"
                        },
                        {
                            Description: "MP5",
                            Value: "+20"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - This item grants 4 MP5 per 10% of your missing Mana. This item grants 7 Magical power per 10% of your available Mana."
                },
                ItemId: 19509,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19508,
                ShortDesc: "More power the higher your Mana pool is.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/pendulum-of-ages.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19508,
                DeviceName: "The Alternate Timeline",
                IconId: 9216,
                ItemDescription: {
                    Description: "Jump to an alternate timeline upon death.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+45"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+45"
                        },
                        {
                            Description: "Magical Protections",
                            Value: "+45"
                        },
                        {
                            Description: "MP5",
                            Value: "+15"
                        },
                        {
                            Description: "Cooldown Reduction",
                            Value: "+10%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - When you would die you instead find a timeline you are still alive, becoming CC Immune, Damage Immune, and unable to act. After 1.75s you are restored to 25% Health and Mana and can act again. This can only occur once every 10 minutes."
                },
                ItemId: 19654,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19508,
                ShortDesc: "Jump to an alternate timeline upon death.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/the-alternate-timeline.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Vampiric Shroud",
                IconId: 9217,
                ItemDescription: {
                    Description: "This starting item is for Magical users and gives them a chance to gain Health and Mana.",
                    Menuitems: [],
                    SecondaryDescription: "+15 Magical Power +15 Physical Protection +75 Health +5% Magical Lifesteal PASSIVE - Damaging any enemy with an ability restores 6 health and 6 mana. Can only trigger once per target per ability. Can be upgraded at level 20."
                },
                ItemId: 19510,
                ItemTier: 1,
                Price: 850,
                RestrictedRoles: "no restrictions",
                RootItemId: 19510,
                ShortDesc: "Bonus Sustain from hitting Abilities",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/vampiric-shroud.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19510,
                DeviceName: "Blood-soaked Shroud",
                IconId: 9218,
                ItemDescription: {
                    Description: "This starting item is for Magical users and gives them a chance to gain Health and Mana.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+75"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+40"
                        },
                        {
                            Description: "Health",
                            Value: "+200"
                        },
                        {
                            Description: "Magical Lifesteal",
                            Value: "+15%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Damaging any enemy with an ability restores 12 Health, 6 Mana and provide a stack 1% Magical Lifesteal for 6s. This can stack infinitely. Can only trigger once per target per ability."
                },
                ItemId: 19511,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19510,
                ShortDesc: "Bonus Sustain and Lifesteal for hitting Abilities",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/blood-soaked-shroud.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19510,
                DeviceName: "Sacrificial Shroud",
                IconId: 9219,
                ItemDescription: {
                    Description: "Bonus damage, costs health.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+100"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+20"
                        },
                        {
                            Description: "Health",
                            Value: "+100"
                        },
                        {
                            Description: "Magical Lifesteal",
                            Value: "+15%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Your abilities deal 15% more damage, but cost 5% of your Maximum Health."
                },
                ItemId: 19600,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19510,
                ShortDesc: "Abilities do more damage...for a price.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/sacrificial-shroud.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "War Flag",
                IconId: 9205,
                ItemDescription: {
                    Description: "This starter item restores its user's Health and Mana when in assist range of a slain minion.",
                    Menuitems: [],
                    SecondaryDescription: "+10 Physical Power +20 Magical Power +100 Health +10 MP5 PASSIVE - Getting an assist for a minion or jungle monster dying restores 6 Health and 6 Mana to all allies within 55 units and provides allies 1% Movement Speed and 2% Attack Speed for 8s. This effect stacks up to 10 times. Can be upgraded at level 17."
                },
                ItemId: 19518,
                ItemTier: 1,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 19518,
                ShortDesc: "Assists empower you and your allies.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/war-flag.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19518,
                DeviceName: "War Banner",
                IconId: 9206,
                ItemDescription: {
                    Description: "This starter item restores its user's Health and Mana when in assist range of a slain minion.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+30"
                        },
                        {
                            Description: "Magical Power",
                            Value: "+60"
                        },
                        {
                            Description: "Health",
                            Value: "+300"
                        },
                        {
                            Description: "MP5",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Getting an assist for a minion or jungle monster dying restores 1% Health and 1% Mana to all allies within 55 units and provides allies 2% Movement Speed and 4% Attack Speed for 8s. This effect stacks up to 10 times."
                },
                ItemId: 19519,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19518,
                ShortDesc: "Enemies fall to empower your allies.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/war-banner.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19518,
                DeviceName: "Spartan Flag",
                IconId: 9207,
                ItemDescription: {
                    Description: "Mark an area for attack! Charge!",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+40"
                        },
                        {
                            Description: "Magical Power",
                            Value: "+65"
                        },
                        {
                            Description: "Health",
                            Value: "+300"
                        },
                        {
                            Description: "MP5",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - When you damage an enemy god you call down a Spartan Flag at your location, providing 10% increased Power to allies standing in the radius. Lasts for 10s, can only occur once every 10s. "
                },
                ItemId: 19749,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19518,
                ShortDesc: "Mark an area for attack! Charge!",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/spartan-flag.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Sentinel's Gift",
                IconId: 9202,
                ItemDescription: {
                    Description: "Assist provide health, mana, and gold.",
                    Menuitems: [],
                    SecondaryDescription: "+7 Physical Protection +7 Magical Protection +75 Health +7 MP5 PASSIVE - Getting the assist for an enemy minion or jungle monster dying will provide 7 Bonus gold and restore 12 Health and 8 Mana. If you are not near an allied god for 20 seconds this passive is disabled until you are near an allied god again. Can be upgraded at level 17."
                },
                ItemId: 19609,
                ItemTier: 1,
                Price: 500,
                RestrictedRoles: "",
                RootItemId: 19609,
                ShortDesc: "Assists provide health, mana, and gold.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/sentinels-gift.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19609,
                DeviceName: "Sentinel's Boon",
                IconId: 9203,
                ItemDescription: {
                    Description: "Gain more health, mana, and gold!",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+45"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+45"
                        },
                        {
                            Description: "Health",
                            Value: "+300"
                        },
                        {
                            Description: "MP5",
                            Value: "+20"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Getting the assist when an enemy dies provides 15 Bonus Gold and restores 3% of your Health and Mana."
                },
                ItemId: 19625,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "",
                RootItemId: 19609,
                ShortDesc: "Gain more health, mana, and gold!",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/sentinels-boon.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19609,
                DeviceName: "Sentinel's Embrace",
                IconId: 9204,
                ItemDescription: {
                    Description: "Share protections with nearby allies.",
                    Menuitems: [
                        {
                            Description: "Physical Protection",
                            Value: "+20"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+20"
                        },
                        {
                            Description: "Health",
                            Value: "+200"
                        },
                        {
                            Description: "MP5",
                            Value: "+20"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Evenly split 120 Physical and Magical Protection among all nearby allied gods and yourself. If you are alone you only gain 60 Physical and Magical Protections."
                },
                ItemId: 19627,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "",
                RootItemId: 19609,
                ShortDesc: "Share protections with nearby allies.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/sentinels-embrace.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Benevolence",
                IconId: 9208,
                ItemDescription: {
                    Description: "Share your earned rewards. Gain passive benefit.",
                    Menuitems: [],
                    SecondaryDescription: "+75 Health +10 MP5 +7 HP5 PASSIVE - You gain +2 GP5 (+0.5 per level) and +1 XpP5 (+0.5 per level). Any time you would gain experience or gold from slain enemies you only gain 90% of the reward. If an ally is nearby you give the lost 10% to that ally. Can be upgraded at level 17."
                },
                ItemId: 19634,
                ItemTier: 1,
                Price: 750,
                RestrictedRoles: "no restrictions",
                RootItemId: 19634,
                ShortDesc: "Share your earned rewards. Gain passive benefits.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/benevolence.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19634,
                DeviceName: "Compassion",
                IconId: 9209,
                ItemDescription: {
                    Description: "Protect your allies from harm at a cost.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+300"
                        },
                        {
                            Description: "HP5",
                            Value: "+30"
                        },
                        {
                            Description: "MP5",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Damage taken by nearby allies is reduced by 15%, up to a maximum of 100 damage. The reduced damage is redirected to you as Magical Damage. If you would die from this damage it does not get reduced or redirected."
                },
                ItemId: 19635,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19634,
                ShortDesc: "Sacrifice your health to defend your allies.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/compassion.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19634,
                DeviceName: "Animosity",
                IconId: 9210,
                ItemDescription: {
                    Description: "Turn your defense into offense.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+400"
                        },
                        {
                            Description: "HP5",
                            Value: "+20"
                        },
                        {
                            Description: "MP5",
                            Value: "+20"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Your Basic Attacks deal bonus damage equal to 4% of your Maximum Health as Magical Damage. This effect is doubled against structures."
                },
                ItemId: 19636,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19634,
                ShortDesc: "Turn your defense into offense.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/animosity.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Tainted Steel",
                IconId: 9181,
                ItemDescription: {
                    Description: "Hit an enemy to reduce their healing taken.",
                    Menuitems: [],
                    SecondaryDescription: "+10 Physical Power +15 Magical Power +15 Physical Protection +15 Magical Protection PASSIVE - Enemy gods that you hit have their healing taken reduced by 20% for 6s. Can be upgraded at level 20."
                },
                ItemId: 19640,
                ItemTier: 1,
                Price: 750,
                RestrictedRoles: "no restrictions",
                RootItemId: 19640,
                ShortDesc: "Hit an enemy to reduce their healing taken.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/tainted-steel.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19640,
                DeviceName: "Tainted Amulet",
                IconId: 9183,
                ItemDescription: {
                    Description: "Siphon healing from enemies your have hit.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+30"
                        },
                        {
                            Description: "Magical Power",
                            Value: "+50"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+30"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+80"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Enemy Gods that you hit have their healing taken reduced by 20% for 6s. You are healed for 100% of the healing reduced. "
                },
                ItemId: 19643,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19640,
                ShortDesc: "Siphon healing from enemies your have hit.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/tainted-amulet.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19640,
                DeviceName: "Tainted Breastplate",
                IconId: 9182,
                ItemDescription: {
                    Description: "Hit an enemy to reduce their healing taken.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+40"
                        },
                        {
                            Description: "Magical Power",
                            Value: "+60"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+70"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+30"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Enemy gods that you hit have their healing taken reduced by 50% for 8s."
                },
                ItemId: 19645,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19640,
                ShortDesc: "Hit an enemy to reduce their healing taken.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/tainted-breastplate.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Leather Cowl",
                IconId: 9178,
                ItemDescription: {
                    Description: "Stalk alone, fight together.",
                    Menuitems: [],
                    SecondaryDescription: "+15 Physical Power +10% Physical Lifesteal +5% Attack Speed PASSIVE - While you are near an allied god you gain 10% Attack Speed. If you are alone you instead gain 5% Movement Speed. Can be upgraded at level 20."
                },
                ItemId: 19672,
                ItemTier: 1,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 19672,
                ShortDesc: "Stalk alone, fight together.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/leather-cowl.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19672,
                DeviceName: "Hunter's Cowl",
                IconId: 9179,
                ItemDescription: {
                    Description: "Stalk alone, fight with allies to empower them.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+60"
                        },
                        {
                            Description: "Physical Lifesteal",
                            Value: "+15%"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+20%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - While you are near an allied god you gain 25% Attack Speed Aura. If you are alone you instead gain 10% Movement Speed."
                },
                ItemId: 19674,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19672,
                ShortDesc: "Stalk alone, fight with allies to empower them.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/hunters-cowl.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19672,
                DeviceName: "Leader's Cowl",
                IconId: 9180,
                ItemDescription: {
                    Description: "Move together. Fight together. Isolate your enemies.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+40"
                        },
                        {
                            Description: "Health",
                            Value: "+300"
                        },
                        {
                            Description: "Physical Lifesteal",
                            Value: "+15%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - For each nearby friendly god you gain a stack of Outnumber. For each nearby enemy god you lose a stack of Outnumber. Each stack of Outnumber provides 3% increased Power to nearby allied gods."
                },
                ItemId: 19675,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19672,
                ShortDesc: "Move together. Fight together. Isolate your enemies.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/leaders-cowl.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Conduit Gem",
                IconId: 9211,
                ItemDescription: {
                    Description: "Focus your power and release it.",
                    Menuitems: [],
                    SecondaryDescription: "+30 Magical Power +15 MP5 PASSIVE - Every second you gain a stack of Arcane Energy, causing your next damaging ability to deal an additional 2 True Damage and remove all stacks. This effect stacks up to 20 times. Can be upgraded at level 20."
                },
                ItemId: 19677,
                ItemTier: 1,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 19677,
                ShortDesc: "Focus your power and release it.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/conduit-gem.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19677,
                DeviceName: "Archmage's Gem",
                IconId: 9212,
                ItemDescription: {
                    Description: "Charge up power to release a devastating attack.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+100"
                        },
                        {
                            Description: "MP5",
                            Value: "+25"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Every 1s you gain a stack of Demise, causing your next damaging ability to deal an additional 2.5% of your Magical Power in damage and remove all stacks. This effect stacks up to 20 times."
                },
                ItemId: 19678,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19677,
                ShortDesc: "Charge up power to release a devastating attack.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/archmages-gem.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19677,
                DeviceName: "Gem of Focus",
                IconId: 9213,
                ItemDescription: {
                    Description: "Cast continuously, do not break your focus.",
                    Menuitems: [
                        {
                            Description: "Magical Power",
                            Value: "+90"
                        },
                        {
                            Description: "Health",
                            Value: "+150"
                        },
                        {
                            Description: "MP5",
                            Value: "+15"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Every time you cast an ability that costs mana you gain a stack of Focus for 10s, providing 3% Movement Speed, 3% Damage Increase, and 2% Damage Taken Reduction, stacking up to 3 times."
                },
                ItemId: 19679,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19677,
                ShortDesc: "Cast continuously, do not break your focus.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/gem-of-focus.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Eye of the Jungle",
                IconId: 9193,
                ItemDescription: {
                    Description: "Steal enemy monsters away and gain new sight.",
                    Menuitems: [],
                    SecondaryDescription: "+10 Physical Power +20 Magical Power +15 HP5 +20% Attack Speed PASSIVE - You deal 30% increased damage to Jungle Monsters. Upon defeating a Large Jungle Monster you place a ward at its location that lasts for 30 seconds. Can be upgraded at level 20."
                },
                ItemId: 19694,
                ItemTier: 1,
                Price: 650,
                RestrictedRoles: "no restrictions",
                RootItemId: 19694,
                ShortDesc: "Slay camps to gain new vision.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/eye-of-the-jungle.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19694,
                DeviceName: "Seer of the Jungle",
                IconId: 9195,
                ItemDescription: {
                    Description: "Gain the sight to see what is hidden.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+60"
                        },
                        {
                            Description: "Magical Power",
                            Value: "+90"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+25"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+15%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - You deal 30% increased damage to Jungle Monsters and Jungle Bosses. Upon defeating a Large Jungle Monster or Jungle Boss, you gain the ability to see wards for 10s."
                },
                ItemId: 19695,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19694,
                ShortDesc: "Gain the sight to see what is hidden.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/seer-of-the-jungle.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19694,
                DeviceName: "Protector of the Jungle",
                IconId: 9194,
                ItemDescription: {
                    Description: "Guard the jungle to gain immense power.",
                    Menuitems: [
                        {
                            Description: "Physical Power",
                            Value: "+65"
                        },
                        {
                            Description: "Magical Power",
                            Value: "+100"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+35"
                        },
                        {
                            Description: "Attack Speed",
                            Value: "+35%"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - While in the jungle you gain 15% Power and 15% Protections. "
                },
                ItemId: 19697,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19694,
                ShortDesc: "Guard the jungle to gain immense power.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/protector-of-the-jungle.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 0,
                DeviceName: "Warding Sigil",
                IconId: 9190,
                ItemDescription: {
                    Description: "Ward off enemy abilities to gain protection.",
                    Menuitems: [],
                    SecondaryDescription: "+15 Magical Protection +100 Health PASSIVE - When you are hit by an ability you gain a stack of Dampening, decreasing damage taken by 5 for 5s. This occurs only once per ability cast. This can stack twice. Can be upgraded at level 20."
                },
                ItemId: 19751,
                ItemTier: 1,
                Price: 700,
                RestrictedRoles: "no restrictions",
                RootItemId: 19751,
                ShortDesc: "Ward off enemy abilities to gain protection.",
                StartingItem: false,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/warding-sigil.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19751,
                DeviceName: "Sigil of The Old Guard",
                IconId: 9191,
                ItemDescription: {
                    Description: "Stalwart against abilities.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+200"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+75"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - Whenever you are hit by an ability you gain a stack of Rebuke, decreasing damage taken by 4% for 5s. This occurs only once per ability cast. This can stack three times. "
                },
                ItemId: 19752,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19751,
                ShortDesc: "Stalwart against abilities.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/sigil-of-the-old-guard.jpg",
                ret_msg: null
            },
            {
                ActiveFlag: "y",
                ChildItemId: 19751,
                DeviceName: "Infused Sigil",
                IconId: 9192,
                ItemDescription: {
                    Description: "Absorb attacks to generate an explosion.",
                    Menuitems: [
                        {
                            Description: "Health",
                            Value: "+350"
                        },
                        {
                            Description: "Magical Protection",
                            Value: "+25"
                        },
                        {
                            Description: "Physical Protection",
                            Value: "+25"
                        }
                    ],
                    SecondaryDescription: "PASSIVE - When you are hit by an ability the Infused Sigil gains a stack. This can occur only once per ability cast. At 10 stacks it explodes after 0.5s, dealing 400 Magical Damage to enemies within 30 units of you. "
                },
                ItemId: 19753,
                ItemTier: 2,
                Price: 1500,
                RestrictedRoles: "no restrictions",
                RootItemId: 19751,
                ShortDesc: "Absorb attacks to generate an explosion.",
                StartingItem: true,
                Type: "Item",
                itemIcon_URL: "https://web2.hirez.com/smite/item-icons/infused-sigil.jpg",
                ret_msg: null
            }
        ]);
    process.exit()
})();