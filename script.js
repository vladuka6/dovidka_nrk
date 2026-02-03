const KEY = "nrk_app_v2026";


/* ---------- ВАГИ / КЛЮЧОВІ ---------- */
const WEIGHTS = {
  payload: 0.12,
  mob: 0.10,
  end: 0.10,
  link: 0.16,
  reb: 0.14,
  sens: 0.08,
  deploy: 0.06,
  ops: 0.08,
  value: 0.16,
};
const KEY_CRITERIA = ["link", "reb"];

/* ---------- ДОВІДНИК МОДЕЛЕЙ (PRESETS) ----------
   ДОДАЙ сюди поле photo (URL або шлях) коли буде.
   Якщо photo немає — показуємо "Фото".
-------------------------------------------------- */
const PRESETS = [
  // ВАЖКІ ЛОГІСТИЧНІ КОЛІСНІ
  {
    group: "Важкі логістичні (колісні)",
    maker: 'ТОВ "РОВЕР-ТЕК"',
    model: "ЗМІЙ ЛОГІСТИЧНИЙ",
    price: 973409,
    power: "електричний",
    mass: 850,
    dims: "2155x1509x904",
    payload: 500,
    maxSpeed: 8,
    rangeRoad: 20,
    clearance: 250,
    climb: 30,
    tilt: 30,
    optical: "-",
    opticalIR: "+",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "+",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: "",
  },
  {
    group: "Важкі логістичні (колісні)",
    maker: 'ТОВ "ДОДЖЕР НРК"',
    model: "DODGER",
    price: 1190000,
    power: "електричний",
    mass: 510,
    dims: "1590х1170х1300",
    payload: 250,
    maxSpeed: 10,
    rangeRoad: 20,
    clearance: 210,
    climb: 35,
    tilt: 25,
    optical: "-",
    opticalIR: "+",
    thermal: "-",
    radioKm: 2.5,
    starlink: "+",
    lte: "+",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: "",
  },
  {
    group: "Важкі логістичні (колісні)",
    maker: 'ТОВ "МОРОЗ-ТЕХ"',
    model: "БНК MOROZ-02L",
    price: 1250000,
    power: "електричний",
    mass: 720,
    dims: "2250х1305х1905",
    payload: 400,
    maxSpeed: 22,
    rangeRoad: 45,
    clearance: 300,
    climb: 23,
    tilt: 23,
    optical: "3",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "+",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: "",
  },
  {
    group: "Важкі логістичні (колісні)",
    maker: 'ТОВ "ДЖЕЙКЕЙ ЛЕНД ВІКЛЗ"',
    model: "RATEL М",
    price: 1300000,
    power: "електричний",
    mass: 760,
    dims: "1800x1400x1820",
    payload: 300,
    maxSpeed: 8,
    rangeRoad: 32,
    clearance: 170,
    climb: 30,
    tilt: 45,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1.1,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: "",
  },
  {
    group: "Важкі логістичні (колісні)",
    maker: 'ТОВ "КОТИГОРОШКО"',
    model: "TOR 800",
    price: 1308500,
    power: "електричний",
    mass: 700,
    dims: "2330x1680x1900",
    payload: 400,
    maxSpeed: 10,
    rangeRoad: 20,
    clearance: 280,
    climb: 30,
    tilt: 30,
    optical: "-",
    opticalIR: "+",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: "",
  },
  {
    group: "Важкі логістичні (колісні)",
    maker: 'ТОВ "КОТИГОРОШКО"',
    model: "TOR 1000",
    price: 1677500,
    power: "електричний",
    mass: 1300,
    dims: "2544x1770x2215",
    payload: 700,
    maxSpeed: 10,
    rangeRoad: 30,
    clearance: 370,
    climb: 30,
    tilt: 30,
    optical: "-",
    opticalIR: "+",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: "",
  },
  {
    group: "Важкі логістичні (колісні)",
    maker: 'ТОВ "ДЖЕЙКЕЙ ЛЕНД ВІКЛЗ"',
    model: "RATEL H",
    price: 2000000,
    power: "електричний",
    mass: 900,
    dims: "2480x1300x740",
    payload: 400,
    maxSpeed: 8,
    rangeRoad: 10,
    clearance: 140,
    climb: 30,
    tilt: 30,
    optical: "1",
    opticalIR: "1",
    thermal: "-",
    radioKm: 1.1,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: "",
  },
  {
    group: "Важкі логістичні (колісні)",
    maker: 'ТОВ "РІВА-СТАЛЬ"',
    model: "D-21",
    price: 2155350,
    power: "електричний",
    mass: 541,
    dims: "1390х1245х1363",
    payload: 200,
    maxSpeed: 10,
    rangeRoad: 14,
    clearance: 240,
    climb: 20,
    tilt: 20,
    optical: "-",
    opticalIR: "+",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "+",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: "D-21.png",
  },
  {
    group: "Важкі логістичні (колісні)",
    maker: 'ТОВ "УКРАЇНСЬКІ БЕЗПІЛОТНІ ТЕХНОЛОГІЇ"',
    model: "УМП-РАВЛИК-2",
    price: 2390000,
    power: "електричний",
    mass: 620,
    dims: "2114x1322x1647",
    payload: 200,
    maxSpeed: 6,
    rangeRoad: 12,
    clearance: 223,
    climb: 30,
    tilt: 20,
    optical: "-",
    opticalIR: "+",
    thermal: "-",
    radioKm: 0.5,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: "",
  },
  {
    group: "Важкі логістичні (колісні)",
    maker: 'ТОВ КВП "СИНЕРГІЯ"',
    model: "МИРОТВОРЕЦЬ",
    price: 3205000,
    power: "електричний",
    mass: 1050,
    dims: "3173x1602x1570",
    payload: 450,
    maxSpeed: 9,
    rangeRoad: 27,
    clearance: 210,
    climb: 30,
    tilt: 20,
    optical: "-",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "-",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: "",
  },
  {
    group: "Важкі логістичні (колісні)",
    maker: 'ТОВ "УКРАЇНСЬКА БРОНЕТЕХНІКА"',
    model: "PROTECTOR",
    price: 3900000,
    power: "ДВЗ",
    mass: 2230,
    dims: "5070x1900x1564",
    payload: 700,
    maxSpeed: 40,
    rangeRoad: 200,
    clearance: 235,
    climb: 30,
    tilt: 25,
    optical: "1",
    opticalIR: "1",
    thermal: "-",
    radioKm: 7,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: "",
  },

  // ВАЖКІ ЛОГІСТИЧНІ ГУСЕНИЧНІ
  {
    group: "Важкі логістичні (гусеничні)",
    maker: 'ТОВ "ТЕНКОР"',
    model: "ТЕРМІТ",
    price: 895000,
    power: "електричний",
    mass: 569,
    dims: "1465х1220х1240",
    payload: 300,
    maxSpeed: 15,
    rangeRoad: 40,
    clearance: 264,
    climb: 30,
    tilt: 25,
    optical: "-",
    opticalIR: "+",
    thermal: "-",
    radioKm: 1.5,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: "",
  },
  {
    group: "Важкі логістичні (гусеничні)",
    maker: 'ТОВ "РОБОТИЗОВАНІ КОМПЛЕКСИ"',
    model: "МУРАХА",
    price: 970200,
    power: "електричний",
    mass: 630,
    dims: "1940х1260х1770",
    payload: 250,
    maxSpeed: 12,
    rangeRoad: 50,
    clearance: 240,
    climb: 35,
    tilt: 20,
    optical: "-",
    opticalIR: "+",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: "",
  },
  {
    group: "Важкі логістичні (гусеничні)",
    maker: 'ТОВ "УКРПРОТОТИП"',
    model: "БУРЕВІЙ",
    price: 1433000,
    power: "електричний",
    mass: 1250,
    dims: "3000х1700х1240",
    payload: 600,
    maxSpeed: 12,
    rangeRoad: 40,
    clearance: 400,
    climb: 40,
    tilt: 20,
    optical: "1",
    opticalIR: "-",
    thermal: "1",
    radioKm: 2,
    starlink: "+",
    lte: "+",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: "",
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "РОБОТИЗОВАНІ СИСТЕМИ"',
    model: "PIXEL",
    price: 120000,
    power: "електричний",
    mass: 163.5,
    dims: "1050x790x1170",
    payload: 50,
    maxSpeed: 8,
    rangeRoad: 17,
    clearance: 160,
    climb: 20,
    tilt: 25,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "МАРКЕТ ЛОГІСТИКИ"',
    model: "ТАРГАН 2К",
    price: 191945,
    power: "електричний",
    mass: 120,
    dims: "1110x780x1150",
    payload: 105,
    maxSpeed: 10,
    rangeRoad: 10,
    clearance: 170,
    climb: 20,
    tilt: 20,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "-",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "КБ БУРЕВІЙ"',
    model: "MANGAL",
    price: 215300,
    power: "електричний",
    mass: 60,
    dims: "740x700x1330",
    payload: 50,
    maxSpeed: 30,
    rangeRoad: 20,
    clearance: 180,
    climb: 30,
    tilt: 30,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "-",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "СКОРТЕХ"',
    model: "СПАЙДЕР-Л",
    price: 282386,
    power: "електричний",
    mass: 70,
    dims: "950х850х765",
    payload: 80,
    maxSpeed: 12,
    rangeRoad: 24,
    clearance: 175,
    climb: 20,
    tilt: 20,
    optical: "-",
    opticalIR: "1",
    thermal: "-",
    radioKm: null,     // у таблиці "-"
    starlink: "+",
    lte: "+",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "МАРКЕТ ЛОГІСТИКИ"',
    model: "ТАРГАН 200",
    price: 351903,
    power: "електричний",
    mass: 266,
    dims: "1440x1120x1170",
    payload: 200,
    maxSpeed: 8,
    rangeRoad: 20,
    clearance: 210,
    climb: 20,
    tilt: 20,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "-",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "СОКІЛСКАЙ"',
    model: "ДРОНДРИН",
    price: 387000,
    power: "електричний",
    mass: 185,
    dims: "1250х1000х1050",
    payload: 250,
    maxSpeed: 20,
    rangeRoad: 40,
    clearance: 200,
    climb: 30,
    tilt: 25,
    optical: "2",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "СУМИСПЕЦПОСТАВКА"',
    model: "BRO-1409",
    price: 500000,
    power: "електричний",
    mass: 200,
    dims: "1950х1020х1810",
    payload: 400,
    maxSpeed: 27,
    rangeRoad: 40,
    clearance: 200,
    climb: 30,
    tilt: 40,
    optical: "-",
    opticalIR: "2",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "ГРІНТЕХ ХАРВЕСТ"',
    model: "СІМБА",
    price: 502192,
    power: "електричний",
    mass: 380,
    dims: "1700х1200х1400",
    payload: 300,
    maxSpeed: 12,
    rangeRoad: 50,
    clearance: 230,
    climb: 30,
    tilt: 15,
    optical: "-",
    opticalIR: "1",
    thermal: "-",
    radioKm: 1.5,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "ВІКТОРІСОФТ"',
    model: "ГУЛІВЕР К7",
    price: 555000,
    power: "електричний",
    mass: 325,
    dims: "1250х1400х1350",
    payload: 320,
    maxSpeed: 15,
    rangeRoad: 40,
    clearance: 180,
    climb: 30,
    tilt: 30,
    optical: "2",
    opticalIR: "-",
    thermal: "-",
    radioKm: 0.1,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "ФАНТОМ ТЕХНОЛОДЖИ"',
    model: "ТЕСЛЯ",
    price: 584000,
    power: "електричний",
    mass: 200,
    dims: "1300x980x1650",
    payload: 180,
    maxSpeed: 7,
    rangeRoad: 25,
    clearance: 300,
    climb: 30,
    tilt: 20,
    optical: "2",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "ЕЛЬФ СИСТЕМ"',
    model: "ГІМЛІ-Е",
    price: 608133,
    power: "електричний",
    mass: 120,
    dims: "1200х1300х450",
    payload: 100,
    maxSpeed: 15,
    rangeRoad: 11,
    clearance: 200,
    climb: 35,
    tilt: 30,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "-",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "НОРД-ТРЕК"',
    model: "CRAB-LS",
    price: 625000,
    power: "електричний",
    mass: 170,
    dims: "2000х1080х780",
    payload: 270,
    maxSpeed: 12,
    rangeRoad: 15,
    clearance: 300,
    climb: 30,
    tilt: 20,
    optical: "1",
    opticalIR: "1",
    thermal: "-",
    radioKm: 0.5,
    starlink: "-",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "ТЕМЕРЛАНД"',
    model: "ГНОМ-ЛОГІСТ",
    price: 649000,
    power: "електричний",
    mass: 213,
    dims: "1170х900х1860",
    payload: 150,
    maxSpeed: 8,
    rangeRoad: 20,
    clearance: 160,
    climb: 20,
    tilt: 21,
    optical: "1",
    opticalIR: "1",
    thermal: "-",
    radioKm: 1.1,
    starlink: "+",
    lte: "+",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",
    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "СКАЙ-ЛАБ ЮА"',
    model: "SIRKO-S1",
    price: 723400,
    power: "електричний",
    mass: 92.4,
    dims: "1130x800x1240",
    payload: 130,
    maxSpeed: 5,
    rangeRoad: 30,
    clearance: 160,
    climb: 15,
    tilt: 20,
    optical: "1",
    opticalIR: "1",
    thermal: "-",
    radioKm: 13,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "КБ-АЙТІ-С.А.М.Р.С"',
    model: "ДРАЙВЕР-М",
    price: 774625,
    power: "електричний",
    mass: 320,
    dims: "1450х1350х1200",
    payload: 200,
    maxSpeed: 45,
    rangeRoad: 30,
    clearance: 240,
    climb: 20,
    tilt: 20,
    optical: "-",
    opticalIR: "2",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "+",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",
    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "GLOBAL DYNAMICS"',
    model: "РИСЬ",
    price: 881975,
    power: "електричний",
    mass: 207,
    dims: "980х846х693",
    payload: 150,
    maxSpeed: 5,
    rangeRoad: 10,
    clearance: 146,
    climb: 30,
    tilt: 30,
    optical: "1",
    opticalIR: "1",
    thermal: "-",
    radioKm: 0.6,
    starlink: "+",
    lte: "+",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",
    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "РОБОТИЗОВАНІ СИСТЕМИ"',
    model: "PONY",
    price: 830000,
    power: "електричний",
    mass: 340,
    dims: "1600x1163x1180",
    payload: 200,
    maxSpeed: 8,
    rangeRoad: 50,
    clearance: 210,
    climb: 30,
    tilt: 23,
    optical: "-",
    opticalIR: "2",
    thermal: "-",
    radioKm: 0.15,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",
    photo: ""
  },
  {
    group: "Середні логістичні (колісні)",
    maker: 'ТОВ "GLOBAL DYNAMICS"',
    model: "РИСЬ PRO",
    price: 1259043,
    power: "електричний",
    mass: 456,
    dims: "1330x1090x825",
    payload: 250,
    maxSpeed: 5,
    rangeRoad: 8,
    clearance: 146,
    climb: 30,
    tilt: 30,
    optical: "1",
    opticalIR: "1",
    thermal: "-",
    radioKm: 0.6,
    starlink: "+",
    lte: "+",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",
    photo: ""
  },


// ===============================
// СЕРЕДНІ ЛОГІСТИЧНІ (ГУСЕНИЧНІ)
// ===============================

  {
    group: "Середні логістичні (гусеничні)",
    maker: 'ТОВ "РЕМТЕХНОЛОГІЯ"',
    model: "ЛЕГІТ МОДЕЛЬ L1",
    price: 180000,
    power: "електричний",
    mass: 100,
    dims: "950х730х430",
    payload: 80,
    maxSpeed: 15,
    rangeRoad: 12,
    clearance: 150,
    climb: 30,
    tilt: 30,
    optical: "1",
    opticalIR: "1",
    thermal: "-",
    radioKm: 0.7,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (гусеничні)",
    maker: 'ТОВ "ІНДУСТРІАЛЬНЕ БЮРО"',
    model: "FOXTAC",
    price: 478415,
    power: "електричний",
    mass: 115,
    dims: "1970х980х380",
    payload: 140,
    maxSpeed: 6,
    rangeRoad: 6,
    clearance: 150,
    climb: 30,
    tilt: 22,
    optical: "2",
    opticalIR: "-",
    thermal: "-",
    radioKm: 0.7,
    starlink: "+",
    lte: "+",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (гусеничні)",
    maker: 'ТОВ "ТЕРРА ТРАВЕРСЕ"',
    model: "ВОЛЯ-Е",
    price: 480000,
    power: "електричний",
    mass: 254,
    dims: "1390х990х1280",
    payload: 200,
    maxSpeed: 10,
    rangeRoad: 15,
    clearance: 240,
    climb: 40,
    tilt: 30,
    optical: "-",
    opticalIR: "2",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (гусеничні)",
    maker: 'ТОВ "АРГИРОПРАТ"',
    model: "ЛЮТІК",
    price: 505000,
    power: "електричний",
    mass: 240,
    dims: "1900х1000х550",
    payload: 250,
    maxSpeed: 8,
    rangeRoad: 8,
    clearance: 150,
    climb: 30,
    tilt: 20,
    optical: "2",
    opticalIR: "-",
    thermal: "1",
    radioKm: 0.3,
    starlink: "-",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (гусеничні)",
    maker: 'ТОВ "ФАЙРБОКС"',
    model: "ТАНЧИК",
    price: 526000,
    power: "електричний",
    mass: 450,
    dims: "1595х1140х1670",
    payload: 250,
    maxSpeed: 10,
    rangeRoad: 25,
    clearance: 280,
    climb: 30,
    tilt: 25,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1.5,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (гусеничні)",
    maker: 'ГО "ROBOFORCE"',
    model: "ГОЛЕМ",
    price: 540000,
    power: "електричний",
    mass: 290,
    dims: "1640х1150х690",
    payload: 200,
    maxSpeed: 4.5,
    rangeRoad: 10,
    clearance: 180,
    climb: 25,
    tilt: 24,
    optical: "-",
    opticalIR: "2",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "+",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (гусеничні)",
    maker: 'ТОВ "ПАРТНЕР-ВС"',
    model: "КНЛР-Е",
    price: 644295,
    power: "електричний",
    mass: 300,
    dims: "1210х850х1120",
    payload: 300,
    maxSpeed: 4,
    rangeRoad: 12,
    clearance: 110,
    climb: 33,
    tilt: 36,
    optical: "-",
    opticalIR: "1",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (гусеничні)",
    maker: 'ТОВ КБ "БУРЕВІЙ"',
    model: "АРДАЛ 920",
    price: 647500,
    power: "електричний",
    mass: 275,
    dims: "1300х1080х1300",
    payload: 150,
    maxSpeed: 12,
    rangeRoad: 40,
    clearance: 190,
    climb: 25,
    tilt: 30,
    optical: "-",
    opticalIR: "3",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "+",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (гусеничні)",
    maker: 'ТОВ "ІНДУСТРІАЛЬНЕ БЮРО"',
    model: "BOAR TAC",
    price: 690738,
    power: "електричний",
    mass: 210,
    dims: "1350х920х400",
    payload: 200,
    maxSpeed: 19,
    rangeRoad: 25,
    clearance: 150,
    climb: 30,
    tilt: 25,
    optical: "3",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "+",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (гусеничні)",
    maker: 'ТОВ ТВП "РОСЬ-ГУМА"',
    model: "ВОЖАК",
    price: 720267,
    power: "електричний",
    mass: 450,
    dims: "1555х1050х1320",
    payload: 250,
    maxSpeed: 8,
    rangeRoad: 30,
    clearance: 190,
    climb: 30,
    tilt: 25,
    optical: "-",
    opticalIR: "1",
    thermal: "-",
    radioKm: 0.8,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (гусеничні)",
    maker: 'ТОВ "ТАНКОВЕ БЮРО МАМОНОВА"',
    model: "NUMO",
    price: 732885,
    power: "електричний",
    mass: 320,
    dims: "1500х1233х1406",
    payload: 300,
    maxSpeed: 5,
    rangeRoad: 40,
    clearance: 235,
    climb: 33,
    tilt: 35,
    optical: "-",
    opticalIR: "2",
    thermal: "-",
    radioKm: 1.5,
    starlink: "-",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (гусеничні)",
    maker: 'ТОВ "РОБОВЕЙВ"',
    model: "FOX 2.0",
    price: 810000,
    power: "електричний",
    mass: 250,
    dims: "1165х900х1225",
    payload: 300,
    maxSpeed: 7,
    rangeRoad: 15,
    clearance: 115,
    climb: 25,
    tilt: 20,
    optical: "-",
    opticalIR: "1",
    thermal: "-",
    radioKm: 0.5,
    starlink: "-",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (гусеничні)",
    maker: 'ТОВ "КБ ВЕПРИК"',
    model: "ВЕПРИК 6.1",
    price: 983200,
    power: "електричний",
    mass: 465,
    dims: "2010х1107х1350",
    payload: 300,
    maxSpeed: 4,
    rangeRoad: 14,
    clearance: 230,
    climb: 25,
    tilt: 28,
    optical: "2",
    opticalIR: "2",
    thermal: "-",
    radioKm: 0.45,
    starlink: "+",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Середні логістичні (гусеничні)",
    maker: 'ТОВ "РОБОТ ЗАХИСНИК"',
    model: "КОЗАК",
    price: 1538623,
    power: "електричний",
    mass: 198,
    dims: "1070х1050х1450",
    payload: 300,
    maxSpeed: 5,
    rangeRoad: 8,
    clearance: 160,
    climb: 30,
    tilt: 20,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 0.4,
    starlink: "-",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Легкі логістичні (колісні)",
    maker: 'ТОВ "МАРКЕТ ЛОГІСТИКИ"',
    model: "ТАРГАН 1К",
    price: 98892,
    power: "електричний",
    mass: 36.5,
    dims: "755x625x1100",
    payload: 42,
    maxSpeed: 10,
    rangeRoad: 12,
    clearance: 150,
    climb: 30,
    tilt: 30,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 0.5,
    starlink: "+",
    lte: "+",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  {
    group: "Легкі логістичні (колісні)",
    maker: 'ТОВ "ТРАЙДЕНТ ТЕК"',
    model: "ПЛАСТУН",
    price: 328000,
    power: "електричний",
    mass: 48,
    dims: "900x800x800",
    payload: 40,
    maxSpeed: 24,
    rangeRoad: 16,
    clearance: 180,
    climb: 35,
    tilt: 30,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "-",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },


// ===============================
// ЛЕГКІ ЛОГІСТИЧНІ (ГУСЕНИЧНІ)
// ===============================

  {
    group: "Легкі логістичні (гусеничні)",
    maker: 'ТОВ "РЕМТЕХНОЛОГІЯ"',
    model: "ЛЕГІТ МОДЕЛЬ S1",
    price: 180000,
    power: "електричний",
    mass: 43,
    dims: "660x670x350",
    payload: 12,
    maxSpeed: 13,
    rangeRoad: 10,
    clearance: 95,
    climb: 20,
    tilt: 30,
    optical: "1",
    opticalIR: "1",
    thermal: "-",
    radioKm: 0.7,
    starlink: "-",
    lte: "-",
    contactName: "Іван Петренко",
contactInfo: "+380501112233",

    photo: ""
  },
  // ===============================
// ВАЖКІ ІНЖЕНЕРНІ (КОЛІСНІ)
// ===============================

  {
    group: "Важкі інженерні (колісні)",
    maker: 'ТОВ "РОВЕР-ТЕК"',
    model: "ЗМІЙ",
    // примітка: "розмінування" — це призначення (у нас поки нема поля, можна додати в notes пізніше)
    price: 908044,
    power: "комбінований",
    mass: 1100,
    dims: "2850x1670x860",
    payload: 150,
    maxSpeed: 15,
    rangeRoad: 250,
    clearance: 250,
    climb: 30,
    tilt: 30,
    optical: "-",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "-",
    lte: "-",
    photo: ""
  },
  {
    group: "Важкі інженерні (колісні)",
    maker: 'ТОВ "ДОДЖЕР НРК"',
    model: "DODGER",
    price: 1304000,
    power: "електричний",
    mass: 510,
    dims: "1590x1170x1300",
    payload: 250,
    maxSpeed: 20,
    rangeRoad: 210,
    clearance: 210,
    climb: 35,
    tilt: 25,
    optical: "-",
    opticalIR: "2",
    thermal: "-",
    radioKm: 10,
    starlink: "+",
    lte: "+",
    photo: ""
  },


// ===============================
// ВАЖКІ ІНЖЕНЕРНІ (ГУСЕНИЧНІ)
// ===============================

  {
    group: "Важкі інженерні (гусеничні)",
    maker: 'ТОВ "ТЕНКОР"',
    model: "ТЕРМІТ ПІД ТМ-62",
    price: 825000,
    power: "електричний",
    mass: 711,
    dims: "1465x1220x1241",
    payload: 200,
    maxSpeed: 40,
    rangeRoad: 400,
    clearance: 400,
    climb: 30,
    tilt: 25,
    optical: "-",
    opticalIR: "2",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "-",
    photo: ""
  },


// ===============================
// СЕРЕДНІ ІНЖЕНЕРНІ (КОЛІСНІ)
// ===============================

  {
    group: "Середні інженерні (колісні)",
    maker: 'ТОВ "РОБОТИЗОВАНІ СИСТЕМИ"',
    model: "PIXEL",
    price: 120000,
    power: "електричний",
    mass: 163.5,
    dims: "1050x790x1170",
    payload: 50,
    maxSpeed: 17,
    rangeRoad: 160,
    clearance: 160,
    climb: 20,
    tilt: 25,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "-",
    photo: ""
  },
  {
    group: "Середні інженерні (колісні)",
    maker: 'ТОВ "ДЖЕЙКЕЙ ЛЕНД ВІКЛЗ"',
    model: "RATEL S",
    price: 147034,
    power: "електричний",
    mass: 65,
    dims: "830x740x1010",
    payload: 95,
    maxSpeed: 6,
    rangeRoad: 150,
    clearance: 150,
    climb: 30,
    tilt: 30,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1.5,
    starlink: "-",
    lte: "-",
    photo: ""
  },
  {
    group: "Середні інженерні (колісні)",
    maker: 'ТОВ "КБ БУРЕВІЙ"',
    model: "MANGAL",
    price: 215300,
    power: "електричний",
    mass: 60,
    dims: "740x700x1330",
    payload: 50,
    maxSpeed: 20,
    rangeRoad: 180,
    clearance: 180,
    climb: 30,
    tilt: 30,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "+",
    photo: ""
  },
  {
    group: "Середні інженерні (колісні)",
    maker: 'ТОВ "СКОРТЕХ"',
    model: "СПАЙДЕР-М",
    price: 250046,
    power: "електричний",
    mass: 70,
    dims: "950x850x765",
    payload: 80,
    maxSpeed: 24,
    rangeRoad: 175,
    clearance: 175,
    climb: 20,
    tilt: 20,
    optical: "-",
    opticalIR: "1",
    thermal: "-",
    radioKm: null,     // в тебе в рядку стоїть "-" перед +/+ (схоже це radioKm)
    starlink: "+",
    lte: "+",
    photo: ""
  },
  {
    group: "Середні інженерні (колісні)",
    maker: 'ТОВ "ТЕМЕРЛАНД"',
    model: 'ГНОМ-МІНЕР (на пневмо-колесі)',
    price: 370490,
    power: "електричний",
    mass: 135,
    dims: "1080x785x1248",
    payload: 41,
    maxSpeed: 30,
    rangeRoad: 163,
    clearance: 163,
    climb: 17,
    tilt: 22,
    optical: "1",
    opticalIR: "1",
    thermal: "-",
    radioKm: 1.1,
    starlink: "-",
    lte: "+",
    photo: ""
  },
  {
    group: "Середні інженерні (колісні)",
    maker: 'ТОВ "ТЕМЕРЛАНД"',
    model: 'ГНОМ-МІНЕР (на безповітряному колесі)',
    price: 499820,
    power: "електричний",
    mass: 176,
    dims: "1055x870x1260",
    payload: 44,
    maxSpeed: 32,
    rangeRoad: 160,
    clearance: 160,
    climb: 23,
    tilt: 23,
    optical: "1",
    opticalIR: "1",
    thermal: "-",
    radioKm: 1.1,
    starlink: "-",
    lte: "+",
    photo: ""
  },
  {
    group: "Середні інженерні (колісні)",
    maker: 'ТОВ "ТЕМЕРЛАНД"',
    model: "ГНОМ-М5",
    price: 509700,
    power: "електричний",
    mass: 157,
    dims: "1485x900x1860",
    payload: 50,
    maxSpeed: 25,
    rangeRoad: 165,
    clearance: 165,
    climb: 23,
    tilt: 23,
    optical: "1",
    opticalIR: "1",
    thermal: "-",
    radioKm: 1.1,
    starlink: "+",
    lte: "+",
    photo: ""
  },
  {
    group: "Середні інженерні (колісні)",
    maker: 'ТОВ "ЕЛЬФ СИСТЕМ"',
    model: "ГІМЛІ-Р(1)",
    price: 608133,
    power: "електричний",
    mass: 280,
    dims: "1400x1200x1500",
    payload: 200,
    maxSpeed: 11,
    rangeRoad: 200,
    clearance: 200,
    climb: 30,
    tilt: 30,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "-",
    lte: "-",
    photo: ""
  },
  {
    group: "Середні інженерні (колісні)",
    maker: 'ТОВ "ЕЛЬФ СИСТЕМ"',
    model: "ГІМЛІ-Р(2)",
    price: 608133,
    power: "електричний",
    mass: 280,
    dims: "1400x1200x1500",
    payload: 200,
    maxSpeed: 11,
    rangeRoad: 200,
    clearance: 200,
    climb: 30,
    tilt: 30,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "-",
    lte: "-",
    photo: ""
  },
  {
    group: "Середні інженерні (колісні)",
    maker: 'ТОВ "ЕЛЬФ СИСТЕМ"',
    model: "ГІМЛІ-РЗП",
    price: 608133,
    power: "електричний",
    mass: 290,
    dims: "1400x1200x2140",
    payload: 200,
    maxSpeed: 11,
    rangeRoad: 200,
    clearance: 200,
    climb: 30,
    tilt: 30,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "-",
    lte: "-",
    photo: ""
  },
  {
    group: "Середні інженерні (колісні)",
    maker: 'ТОВ "ВІКТОРІСОФТ"',
    model: "ГУЛІВЕР К10",
    price: 615000,
    power: "електричний",
    mass: 325,
    dims: "1250x1400x1350",
    payload: 320,
    maxSpeed: 40,
    rangeRoad: 180,
    clearance: 180,
    climb: 30,
    tilt: 30,
    optical: "2",
    opticalIR: "-",
    thermal: "-",
    radioKm: 0.1,
    starlink: "+",
    lte: "-",
    photo: ""
  },
  {
    group: "Середні інженерні (колісні)",
    maker: 'ТОВ "СКАЙ-ЛАБ ЮА"',
    model: "SIRKO-S1 MINER (ТМ-124)",
    price: 728600,
    power: "електричний",
    mass: 90,
    dims: "1410x370x325",
    payload: 130,
    maxSpeed: 30,
    rangeRoad: 160,
    clearance: 160,
    climb: 15,
    tilt: 20,
    optical: "-",
    opticalIR: "1",
    thermal: "-",
    radioKm: 13,
    starlink: "+",
    lte: "-",
    photo: ""
  },
  {
    group: "Середні інженерні (колісні)",
    maker: 'ТОВ "СКАЙ-ЛАБ ЮА"',
    model: "SIRKO-S1 MINER (ПТМ-У)",
    price: 837400,
    power: "електричний",
    mass: 142,
    dims: "1540x400x220",
    payload: 130,
    maxSpeed: 30,
    rangeRoad: 160,
    clearance: 160,
    climb: 15,
    tilt: 20,
    optical: "-",
    opticalIR: "1",
    thermal: "-",
    radioKm: 13,
    starlink: "+",
    lte: "-",
    photo: ""
  },
  {
    group: "Середні інженерні (колісні)",
    maker: 'ТОВ "АСИМЕТРИКА"',
    model: "SPEXTR K2",
    price: null, // у тебе порожньо
    power: "електричний",
    mass: 73,
    dims: "935x710x510",
    payload: 43,
    maxSpeed: 25,
    rangeRoad: 140,
    clearance: 140,
    climb: 30,
    tilt: 25,
    optical: "1",
    opticalIR: "1",
    thermal: "-",
    radioKm: 0.35,
    starlink: "-",
    lte: "-",
    photo: ""
  },


// ===============================
// СЕРЕДНІ ІНЖЕНЕРНІ (ГУСЕНИЧНІ)
// ===============================

  {
    group: "Середні інженерні (гусеничні)",
    maker: 'ГО "ROBOFORCE"',
    model: "ГОЛЕМ",
    price: 590000,
    power: "електричний",
    mass: 360,
    dims: "1640x1150x1050",
    payload: 200,
    maxSpeed: 10,
    rangeRoad: 180,
    clearance: 180,
    climb: 25,
    tilt: 24,
    optical: "-",
    opticalIR: "2",
    thermal: "-",
    radioKm: 1,
    starlink: "-",
    lte: "-",
    photo: ""
  },
  {
    group: "Середні інженерні (гусеничні)",
    maker: 'ТОВ КБ "БУРЕВІЙ"',
    model: "АРДАЛ 920",
    price: 647500,
    power: "електричний",
    mass: 275,
    dims: "1300x1080x1300",
    payload: 150,
    maxSpeed: 40,
    rangeRoad: 190,
    clearance: 190,
    climb: 25,
    tilt: 30,
    optical: "-",
    opticalIR: "3",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "+",
    photo: ""
  },
  {
    group: "Середні інженерні (гусеничні)",
    maker: 'ТОВ "ПАРТНЕР-ВС"',
    model: "КНЛР-Б",
    price: 651779,
    power: "електричний",
    mass: 400,
    dims: "1810x1110x1120",
    payload: 300,
    maxSpeed: 12,
    rangeRoad: 110,
    clearance: 110,
    climb: 33,
    tilt: 36,
    optical: "-",
    opticalIR: "1",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "-",
    photo: ""
  },
  {
    group: "Середні інженерні (гусеничні)",
    maker: 'ТОВ "РОБОВЕЙВ"',
    model: "FOX 2.0",
    price: 810000,
    power: "електричний",
    mass: 250,
    dims: "1165x900x1225",
    payload: 300,
    maxSpeed: 15,
    rangeRoad: 115,
    clearance: 115,
    climb: 25,
    tilt: 20,
    optical: "-",
    opticalIR: "1",
    thermal: "-",
    radioKm: 0.5,
    starlink: "-",
    lte: "-",
    photo: ""
  },


// ===============================
// ЛЕГКІ ІНЖЕНЕРНІ (КОЛІСНІ)
// ===============================

  {
    group: "Легкі інженерні (колісні)",
    maker: 'ТОВ "МАРКЕТ ЛОГІСТИКИ"',
    model: "ТАРГАН 1 С",
    price: 103376,
    power: "електричний",
    mass: 43.5,
    dims: "740x650x1120",
    payload: 30,
    maxSpeed: 13,
    rangeRoad: 150,
    clearance: 150,
    climb: 30,
    tilt: 30,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 0.5,
    starlink: "-",
    lte: "-",
    photo: ""
  },
  {
    group: "Легкі інженерні (колісні)",
    maker: 'ТОВ "ТРАЙДЕНТ ТЕК"',
    model: "ПЛАСТУН",
    price: 342000,
    power: "електричний",
    mass: 48,
    dims: "900x800x800",
    payload: 50,
    maxSpeed: 16,
    rangeRoad: 180,
    clearance: 180,
    climb: 35,
    tilt: 30,
    optical: "1",
    opticalIR: "-",
    thermal: "-",
    radioKm: 1,
    starlink: "+",
    lte: "-",
    photo: ""
  },



];
// ===============================
// ПРИКЗ: ДОВІДНИК ЗАГОНІВ (поки цифрами)
// ===============================
const UNITS = [
  { id: "1", name: "1 загін" },
  { id: "2", name: "2 загін" },
  { id: "3", name: "3 загін" },
  { id: "4", name: "4 загін" },
  { id: "5", name: "5 загін" },
];

// ===============================
// ПРИКЗ: НАЯВНІСТЬ (приклад)
// ключ: unitId -> { modelName: qty }
// modelName має співпадати з PRESETS[].model
// ===============================
const INVENTORY = {
  "1": {
    'ТОВ "РІВА-СТАЛЬ"__D-21': 2,
    'ТОВ "ВІКТОРІСОФТ"__ГУЛІВЕР К7': 1,
    'ТОВ "GLOBAL DYNAMICS"__РИСЬ PRO': 1,
    'ТОВ "ТЕНКОР"__ТЕРМІТ': 1,
    'ТОВ "МАРКЕТ ЛОГІСТИКИ"__ТАРГАН 2К': 3,
    'ТОВ "ІНДУСТРІАЛЬНЕ БЮРО"__BOAR TAC': 1,
    'ГО "ROBOFORCE"__ГОЛЕМ': 1
  },

  "2": {
    'ТОВ "РОВЕР-ТЕК"__ЗМІЙ ЛОГІСТИЧНИЙ': 1,
    'ТОВ "ДОДЖЕР НРК"__DODGER': 2,
    'ТОВ "МОРОЗ-ТЕХ"__БНК MOROZ-02L': 1,
    'ТОВ "ДЖЕЙКЕЙ ЛЕНД ВІКЛЗ"__RATEL М': 1,
    'ТОВ "КОТИГОРОШКО"__TOR 800': 1,
    'ТОВ "КОТИГОРОШКО"__TOR 1000': 1,
    'ТОВ "УКРАЇНСЬКІ БЕЗПІЛОТНІ ТЕХНОЛОГІЇ"__УМП-РАВЛИК-2': 1,
    'ТОВ "УКРПРОТОТИП"__БУРЕВІЙ': 1
  },

  "3": {
    'ТОВ КВП "СИНЕРГІЯ"__МИРОТВОРЕЦЬ': 1,
    'ТОВ "УКРАЇНСЬКА БРОНЕТЕХНІКА"__PROTECTOR': 1,
    'ТОВ "ДЖЕЙКЕЙ ЛЕНД ВІКЛЗ"__RATEL H': 1,
    'ТОВ "РОБОТИЗОВАНІ КОМПЛЕКСИ"__МУРАХА': 1,
    'ТОВ "РОБОТИЗОВАНІ СИСТЕМИ"__PIXEL': 2,
    'ТОВ "СКОРТЕХ"__СПАЙДЕР-Л': 1,
    'ТОВ "МАРКЕТ ЛОГІСТИКИ"__ТАРГАН 200': 1
  },

  "4": {
    'ТОВ "МАРКЕТ ЛОГІСТИКИ"__ТАРГАН 1К': 3,
    'ТОВ "КБ БУРЕВІЙ"__MANGAL': 1,
    'ТОВ "СОКІЛСКАЙ"__ДРОНДРИН': 1,
    'ТОВ "СУМИСПЕЦПОСТАВКА"__BRO-1409': 1,
    'ТОВ "ГРІНТЕХ ХАРВЕСТ"__СІМБА': 1,
    'ТОВ "ФАНТОМ ТЕХНОЛОДЖИ"__ТЕСЛЯ': 1,
    'ТОВ "ЕЛЬФ СИСТЕМ"__ГІМЛІ-Е': 1,
    'ТОВ "НОРД-ТРЕК"__CRAB-LS': 1,
    'ТОВ "ТЕМЕРЛАНД"__ГНОМ-ЛОГІСТ': 1
  },

  "5": {
    'ТОВ "ТРАЙДЕНТ ТЕК"__ПЛАСТУН': 1,
    'ТОВ "КБ-АЙТІ-С.А.М.Р.С"__ДРАЙВЕР-М': 1,
    'ТОВ "GLOBAL DYNAMICS"__РИСЬ': 1,
    'ТОВ "РОБОТИЗОВАНІ СИСТЕМИ"__PONY': 1,
    'ТОВ "РЕМТЕХНОЛОГІЯ"__ЛЕГІТ МОДЕЛЬ L1': 1,
    'ТОВ "ІНДУСТРІАЛЬНЕ БЮРО"__FOXTAC': 1,
    'ТОВ "ТЕРРА ТРАВЕРСЕ"__ВОЛЯ-Е': 1,
    'ТОВ "АРГИРОПРАТ"__ЛЮТІК': 1,
    'ТОВ "ФАЙРБОКС"__ТАНЧИК': 1,
    'ТОВ "ПАРТНЕР-ВС"__КНЛР-Е': 1,
    'ТОВ КБ "БУРЕВІЙ"__АРДАЛ 920': 1,
    'ТОВ ТВП "РОСЬ-ГУМА"__ВОЖАК': 1,
    'ТОВ "ТАНКОВЕ БЮРО МАМОНОВА"__NUMO': 1,
    'ТОВ "РОБОВЕЙВ"__FOX 2.0': 2,
    'ТОВ "КБ ВЕПРИК"__ВЕПРИК 6.1': 1,
    'ТОВ "РОБОТ ЗАХИСНИК"__КОЗАК': 1,
    'ТОВ "РЕМТЕХНОЛОГІЯ"__ЛЕГІТ МОДЕЛЬ S1': 1,
    'ТОВ "РОВЕР-ТЕК"__ЗМІЙ': 1,
    'ТОВ "ТЕНКОР"__ТЕРМІТ ПІД ТМ-62': 1,
    'ТОВ "ДЖЕЙКЕЙ ЛЕНД ВІКЛЗ"__RATEL S': 1,
    'ТОВ "СКОРТЕХ"__СПАЙДЕР-М': 1,
    'ТОВ "ТЕМЕРЛАНД"__ГНОМ-МІНЕР (на пневмо-колесі)': 1,
    'ТОВ "ТЕМЕРЛАНД"__ГНОМ-МІНЕР (на безповітряному колесі)': 1,
    'ТОВ "ТЕМЕРЛАНД"__ГНОМ-М5': 1,
    'ТОВ "ЕЛЬФ СИСТЕМ"__ГІМЛІ-Р(1)': 1,
    'ТОВ "ЕЛЬФ СИСТЕМ"__ГІМЛІ-Р(2)': 1,
    'ТОВ "ЕЛЬФ СИСТЕМ"__ГІМЛІ-РЗП': 1,
    'ТОВ "ВІКТОРІСОФТ"__ГУЛІВЕР К10': 1,
    'ТОВ "СКАЙ-ЛАБ ЮА"__SIRKO-S1': 1,
    'ТОВ "СКАЙ-ЛАБ ЮА"__SIRKO-S1 MINER (ТМ-124)': 1,
    'ТОВ "СКАЙ-ЛАБ ЮА"__SIRKO-S1 MINER (ПТМ-У)': 1,
    'ТОВ "АСИМЕТРИКА"__SPEXTR K2': 1,
    'ТОВ "МАРКЕТ ЛОГІСТИКИ"__ТАРГАН 1 С': 1
  }
};



/* ---------- КРИТЕРІЇ (поки як було; розширимо у твоєму наступному кроці) ---------- */
const CRITERIA = [
  {
    id: "payload",
    name: "Навантаження",
    short: "скільки реально везе і як стабільно",
    weight: WEIGHTS.payload,
    scale: [
      "0 — <50% від потреб або нестабільно під вантажем",
      "3 — тягне/везе типові вантажі стабільно",
      "5 — має запас + стабільний рух/поворот з вантажем",
    ],
    how: "Оцінюй на демо: рух 200–300 м з вантажем, поворот, старт/стоп, чи не просідає швидкість/керованість.",
    questions: [
      "Який номінал/максимум (підтверджено де)?",
      "Покажіть рух з номінальним вантажем 2 рази підряд.",
      "Що при перевищенні: захист/обмеження?",
    ],
  },
  {
    id: "mob",
    name: "Прохідність",
    short: "реальний ґрунт/ухили/колія",
    weight: WEIGHTS.mob,
    scale: [
      "0 — застрягає/зриває керування",
      "3 — долає типові перешкоди",
      "5 — стабільно на ухилах/багнюці/піску з вантажем",
    ],
    how: "Проси ділянку з колією/ухилом. Важлива повторюваність (2–3 проходи).",
    questions: [
      "Який кут підйому/крену підтверджено?",
      "Покажіть колію/багнюку (2 проходи).",
      "Є обмеження по швидкості на бездоріжжі?",
    ],
  },
  {
    id: "end",
    name: "Автономність",
    short: "час/дистанція в реальному режимі",
    weight: WEIGHTS.end,
    scale: [
      "0 — <1 год або <5 км (або нема підтвердження)",
      "3 — 2–3 год або 10–20 км (підтверджено)",
      "5 — ≥4 год або ≥30 км (підтверджено з вантажем)",
    ],
    how: "Не плутай паспорт і практику. Проси режим: вантаж+середня швидкість+температура.",
    questions: [
      "Реальний час з вантажем X кг при температурі Y?",
      "Ресурс АКБ/цикли/час зарядки?",
      "Захист при розряді/відсікання?",
    ],
  },
  {
    id: "link",
    name: "Зв’язок/керування",
    short: "стабільність керування і резерв",
    weight: WEIGHTS.link,
    scale: [
      "0 — один канал, нестабільний",
      "3 — 1–2 канали, але слабкий резерв/перемикання",
      "5 — ≥2 канали + резерв + зрозуміле перемикання + прийнятна затримка",
    ],
    how: "Ключовий критерій: дальність, latency, поведінка при втраті сигналу, відновлення керування.",
    questions: [
      "Які канали (основний/резервний) і як перемикається?",
      "Покажіть втрату каналу і відновлення 2 рази.",
      "Яка затримка і як міряли?",
    ],
  },
  {
    id: "reb",
    name: "РЕБ / Fail-safe",
    short: "поведінка при завадах/втраті",
    weight: WEIGHTS.reb,
    scale: [
      "0 — небезпечно: продовжує рух/не реагує",
      "3 — безпечна зупинка при втраті зв’язку",
      "5 — зупинка + відновлення/перехід на резерв + прозора логіка",
    ],
    how: "Вимагай демонстрацію: що через 1–3 секунди після втрати керування.",
    questions: [
      "Логіка fail-safe: стоп/режим очікування/повернення?",
      "Час спрацювання?",
      "Є лог подій?",
    ],
  },
  {
    id: "sens",
    name: "Сенсори",
    short: "камери/ніч/тепло + стабільність",
    weight: WEIGHTS.sens,
    scale: [
      "0 — мінімальна камера/поганий огляд",
      "3 — 2+ камери або ІЧ",
      "5 — огляд + тепловіз (за потреби) + стабільне відео в русі",
    ],
    how: "Оцінюй користь: огляд під колеса, перемикання камер, лаги.",
    questions: [
      "Де камери? Є огляд під колеса?",
      "Перемикання камер під час руху?",
      "Ніч/ІЧ/тепло (як заявлено) підтвердити.",
    ],
  },
  {
    id: "deploy",
    name: "Розгортання",
    short: "час і простота підготовки",
    weight: WEIGHTS.deploy,
    scale: ["0 — >20 хв", "3 — 5–10 хв", "5 — ≤3 хв після транспортування"],
    how: "Реально: витягли з авто → ввімкнули → поїхали. Таймер.",
    questions: [
      "Покажіть запуск з нуля з таймером.",
      "Скільки людей потрібно?",
      "Що в комплекті для швидкого розгортання?",
    ],
  },
  {
    id: "ops",
    name: "Експлуатація/сервіс",
    short: "ремонтопридатність і підтримка",
    weight: WEIGHTS.ops,
    scale: [
      "0 — ремонт тільки у виробника, нема ЗІП",
      "3 — базовий ЗІП, частковий ремонт",
      "5 — польовий ремонт ≤30 хв, документація/гарантія/запчастини",
    ],
    how: "Для 1–2 лінії важливо швидко відновити після дрібних пошкоджень.",
    questions: [
      "Який ЗІП/витратники в комплекті?",
      "Гарантія, SLA, склад запчастин?",
      "Час відновлення типових поломок?",
    ],
  },
  {
    id: "value",
    name: "Ціна/ефект",
    short: "чи не переплачуємо",
    weight: WEIGHTS.value,
    scale: [
      "0 — ціна явно завищена",
      "3 — ринкова при підтверджених ТТХ",
      "5 — найкраща ціна за підтверджені можливості + прозора комплектація",
    ],
    how: "Порівнюй не паспорт, а підтверджене на демо (зв’язок, fail-safe, прохідність, вантаж).",
    questions: [
      "Що входить у базову ціну?",
      "Які опції платні?",
      "Вартість експлуатації (АКБ/шини/сервіс)?",
    ],
  },
];

/* ---------- ЧЕК-ЛИСТ (розширимо далі; зараз базовий) ---------- */
const checklistItems = [
  { k: "link_main", t: "Основний канал керування стабільний (200–500 м)" },
  { k: "link_res", t: "Резервний канал керування наявний і перевірений" },
  { k: "switching", t: "Перемикання каналів (авто/ручне) працює" },
  { k: "failsafe", t: "Fail-safe при втраті зв’язку працює" },
  { k: "failsafe_time", t: "Час реакції на втрату зв’язку ≤ 3 с" },
  { k: "payload_run", t: "Рух з номінальним вантажем стабільний" },
  { k: "turn_loaded", t: "Поворот під вантажем без зриву/заклинювання" },
  { k: "slope", t: "Ухил (заявлений кут) підтверджено" },
  { k: "cams", t: "Камери працюють, перемикання без зависань" },
  { k: "night", t: "Ніч/ІЧ/тепловіз (якщо заявлено) підтверджено" },
  { k: "overheat", t: "Немає перегріву/відмов під навантаженням" },
  { k: "deploy_time", t: "Час розгортання відповідає заявленому" },
  { k: "zip", t: "ЗІП/інструмент у комплекті, продемонстровано" },
];

/* =========================================================
   УТИЛІТИ
========================================================= */
function $(id) {
  return document.getElementById(id);
}
function setContactsVisible(visible) {
  const block = $("contactBlock");
  if (!block) return;
  block.classList.toggle("hide", !visible);
}

function esc(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
function formatPrice(n) {
  if (!Number.isFinite(n)) return "—";
  return n.toLocaleString("uk-UA") + " грн";
}
function toNum(v) {
  if (v === "" || v === null || v === undefined) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}
function valNum(id) {
  const el = $(id);
  if (!el) return null;
  return toNum(el.value);
}
function valStr(id) {
  const el = $(id);
  if (!el) return "";
  return el.value ?? "";
}
function setVal(id, v) {
  const el = $(id);
  if (!el) return;
  el.value = v === null || v === undefined ? "" : v;
}
function setSelect(id, v) {
  const el = $(id);
  if (!el) return;
  el.value = v ?? "-";
}

/* =========================================================
   TABS
========================================================= */
function switchTab(id) {
  document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("active", b.dataset.tab === id));
  document.querySelectorAll("main section").forEach((s) => s.classList.toggle("hide", s.id !== id));
}
function wireTabs() {
  document.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => switchTab(b.dataset.tab)));
}

/* =========================================================
   KPI (замість ID)
   грн/кг та грн/(кг·км)
========================================================= */
function renderKPI() {
  const price = valNum("price");
  const payload = valNum("payloadNom");
  const range = valNum("rangeRoad");

  const box = $("kpi");
  if (!box) return;
  box.innerHTML = "";

  // Пояснення (коротко, як ти просив)
  box.insertAdjacentHTML(
    "beforeend",
    `<div class="small" style="margin-bottom:10px">
      <b>Швидкі KPI (ціна ефекту)</b>: це <u>не оцінка</u>, а швидкий індикатор “скільки гривень за корисну роботу”.
      Допомагає грубо порівняти моделі по економіці.
    </div>`
  );

  const pills = [];
  if (price && payload) pills.push(`<span class="pill">грн/кг: <strong>${(price / payload).toFixed(0)}</strong></span>`);
  if (price && payload && range)
    pills.push(`<span class="pill">грн/(кг·км): <strong>${(price / (payload * range)).toFixed(2)}</strong></span>`);

  if (pills.length) box.insertAdjacentHTML("beforeend", `<div class="kpi">${pills.join("")}</div>`);
  else box.insertAdjacentHTML("beforeend", `<span class="pill">Заповни “Ціна”, “Навантаження”, “Запас ходу”</span>`);
}

/* =========================================================
   ФОТО
   В HTML має бути:
   - img#nrkPhoto
   - div#nrkPhotoText (для "Фото")
   - span#photoModel, span#photoMaker (підпис)
========================================================= */
function setPhoto(preset) {
  const img = $("nrkPhoto");
  const no = $("noPhoto"); // ✅ під твій HTML
  if (!img || !no) return;

  const url = (preset?.photo || "").trim();

  // reset handlers
  img.onerror = null;

  if (url) {
    img.src = url;
    img.style.display = "block";
    no.style.display = "none";

    // якщо файл не знайдено — показати "Фото"
    img.onerror = () => {
      img.removeAttribute("src");
      img.style.display = "none";
      no.style.display = "flex";
    };
  } else {
    img.removeAttribute("src");
    img.style.display = "none";
    no.style.display = "flex";
    no.textContent = "Фото";
  }
}

/* =========================================================
   АВТОЗАПОВНЕННЯ ПОЛІВ (ДОВІДНИК)
========================================================= */
function presetKey(p) {
  return `${p.group} — ${p.model} (${p.maker})`;
}
function setReferenceLocked(locked) {
  const idsReadonly = [
    "maker","model","price","power","mass","dims",
    "payloadNom","maxSpeed","rangeRoad","clearance","climb","tilt","radioKm"
  ];

  const idsSelect = ["optical","opticalIR","thermal","starlink","lte"];

  idsReadonly.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.readOnly = locked;
  });

  const notes = document.getElementById("notes");
  if (notes) notes.readOnly = locked;

  idsSelect.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.disabled = locked;
  });

  // щоб видно було, що “readonly”
  const tab = document.getElementById("t1"); 
  if (tab) tab.classList.toggle("locked", locked);
}




function applyPresetByKey(key) {
  const p = PRESETS.find((x) => presetKey(x) === key);
  if (!p) return;

  // базові поля
  setVal("maker", p.maker);
  setVal("model", p.model);
  setVal("price", p.price);
  setVal("power", p.power);
  setVal("mass", p.mass);
  setVal("dims", p.dims);

  // ТТХ
  setVal("payloadNom", p.payload);
  setVal("maxSpeed", p.maxSpeed);
  setVal("rangeRoad", p.rangeRoad);
  setVal("clearance", p.clearance);
  setVal("climb", p.climb);
  setVal("tilt", p.tilt);

  // сенсори/зв'язок
  setSelect("optical", p.optical ?? "-");
  setSelect("opticalIR", p.opticalIR ?? "-");
  setSelect("thermal", p.thermal ?? "-");
  setVal("radioKm", p.radioKm);
  setSelect("starlink", p.starlink ?? "-");
  setSelect("lte", p.lte ?? "-");

  // ✅ КОНТАКТИ — ТІЛЬКИ В БЛОЦІ "Модель/Виробник" (photoMeta)
  updateContactUI(p);

  // фото + підписи
  setPhoto(p);
  if ($("photoModel")) $("photoModel").textContent = p.model;
  if ($("photoMaker")) $("photoMaker").textContent = p.maker;

  renderKPI();
  setReferenceLocked(true);

}

function updateContactUI(p) {
  const nameEl = $("photoContact");
  const linkEl = $("contactLink");
  const btnCopy = $("copyContactBtn");

  const name = String(p?.contactName ?? "").trim();
  const info = String(p?.contactInfo ?? "").trim();

  // Контакт (ПІБ)
  if (nameEl) nameEl.textContent = name || "—";

  // Телефон/контактний канал
  if (!linkEl || !btnCopy) return;

  if (!info) {
    linkEl.textContent = "—";
    linkEl.href = "#";
    linkEl.onclick = (e) => e.preventDefault();
    btnCopy.style.display = "none";
    return;
  }

  btnCopy.style.display = "inline-block";
  linkEl.textContent = info;

  const phone = info.match(/\+?\d[\d\s().-]{8,}\d/g)?.[0]?.replace(/[^\d+]/g, "");
  const email = info.match(/[^\s]+@[^\s]+\.[^\s]+/)?.[0];

  if (phone && phone.replace(/\D/g, "").length >= 10) {
    linkEl.href = "tel:" + phone;
    linkEl.onclick = null;
  } else if (email) {
    linkEl.href = "mailto:" + email;
    linkEl.onclick = null;
  } else {
    linkEl.href = "#";
    linkEl.onclick = async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(info);
        alert("Скопійовано в буфер");
      } catch {
        alert("Не вдалось скопіювати");
      }
    };
  }

  btnCopy.onclick = async () => {
    try {
      await navigator.clipboard.writeText(info);
      alert("Скопійовано в буфер");
    } catch {
      alert("Не вдалось скопіювати");
    }
  };
}

/* =========================================================
   AUTOCOMPLETE (typeahead) — підказки під полем
   HTML потрібні:
   - input#presetSearch
   - div#presetSuggestions
   - input[type=hidden]#selectedPresetKey
   - button#applyPresetBtn
========================================================= */
let activeIndex = -1;
let currentMatches = [];

function buildSuggestions(query) {
  const q = (query || "").trim().toLowerCase();
  if (q.length < 2) return [];

  return PRESETS
    .map((p) => {
      const m = (p.model || "").toLowerCase();
      const maker = (p.maker || "").toLowerCase();
      const group = (p.group || "").toLowerCase();
      const text = `${m} ${maker} ${group}`;

      // простий скоринг (модель важливіше)
      const score =
        (m.includes(q) ? 5 : 0) +
        (maker.includes(q) ? 3 : 0) +
        (group.includes(q) ? 1 : 0) +
        (text.includes(q) ? 1 : 0);

      return { p, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || (a.p.price ?? 0) - (b.p.price ?? 0))
    .slice(0, 12)
    .map((x) => x.p);
}

function renderSuggestions(list) {
  const box = $("presetSuggestions");
  if (!box) return;
  box.innerHTML = "";
  activeIndex = -1;
  currentMatches = list;

  if (!list.length) {
    box.classList.add("hide");
    return;
  }

  list.forEach((p, idx) => {
    const key = presetKey(p);
    const div = document.createElement("div");
    div.className = "sugItem";
    div.dataset.key = key;

    div.innerHTML = `
      <div class="sugLeft">
        <div class="sugTitle"><b>${esc(p.model)}</b></div>
        <div class="sugSub">${esc(p.maker)} • ${esc(p.group)}</div>
      </div>
      <div class="sugPrice">${esc(formatPrice(p.price))}</div>
    `;

    div.addEventListener("click", () => selectSuggestionByIndex(idx));
    box.appendChild(div);
  });

  box.classList.remove("hide");
}

function setActiveSuggestion(idx) {
  const box = $("presetSuggestions");
  if (!box) return;
  const items = Array.from(box.querySelectorAll(".sugItem"));
  items.forEach((i) => i.classList.remove("active"));

  if (idx >= 0 && idx < items.length) {
    items[idx].classList.add("active");
    activeIndex = idx;
    items[idx].scrollIntoView({ block: "nearest" });
  }
}

function selectSuggestionByIndex(idx) {
  const p = currentMatches[idx];
  if (!p) return;

  const key = presetKey(p);
  if ($("selectedPresetKey")) $("selectedPresetKey").value = key;

  // показуємо обрану модель в інпуті
  if ($("presetSearch")) $("presetSearch").value = `${p.model} — ${formatPrice(p.price)}`;

  // активуємо кнопку "Заповнити"
  if ($("applyPresetBtn")) $("applyPresetBtn").disabled = false;

  // одразу показуємо фото/підпис (без заповнення всіх полів)
  setPhoto(p);
  if ($("photoModel")) $("photoModel").textContent = p.model;
  if ($("photoMaker")) $("photoMaker").textContent = p.maker;

  // сховати список
  if ($("presetSuggestions")) $("presetSuggestions").classList.add("hide");
}

function clearSelection() {
  if ($("selectedPresetKey")) $("selectedPresetKey").value = "";
  if ($("applyPresetBtn")) $("applyPresetBtn").disabled = true;
}

function wireAutocomplete() {
  const inp = $("presetSearch");
  const box = $("presetSuggestions");
  const btn = $("applyPresetBtn");
  if (!inp || !box || !btn) return;

  btn.disabled = true;

  inp.addEventListener("input", () => {
    clearSelection();
    const matches = buildSuggestions(inp.value);
    renderSuggestions(matches);
  });

  inp.addEventListener("keydown", (e) => {
    if (box.classList.contains("hide")) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveSuggestion(Math.min(activeIndex + 1, currentMatches.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggestion(Math.max(activeIndex - 1, 0));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0) {
        e.preventDefault();
        selectSuggestionByIndex(activeIndex);
      }
    } else if (e.key === "Escape") {
      box.classList.add("hide");
    }
  });

  // клік поза автокомплітом — сховати
  document.addEventListener("click", (e) => {
    const inside = e.target.closest(".autocomplete");
    if (!inside) box.classList.add("hide");
  });

  // кнопка "Заповнити"
  btn.addEventListener("click", () => {
    const key = $("selectedPresetKey")?.value;
    if (!key) return alert("Спочатку обери модель зі списку підказок.");
    applyPresetByKey(key);
    renderKPI();
  });
  // ховати підказки при скролі (щоб не накладались)
const hideOnScroll = () => {
  const box = $("presetSuggestions");
  if (box) box.classList.add("hide");
};
window.addEventListener("scroll", hideOnScroll, true); // true — ловить скрол всередині контейнерів теж

}
/* =========================================================
   ПОРІВНЯННЯ (Tab 5)
   Потрібні елементи в HTML:
   - select#compareSelect (multiple)
   - button#buildCompareBtn
   - button#clearCompareBtn
   - div#compareTable
========================================================= */

function updateCompareSelect() {
  const sel = $("compareSelect");
  if (!sel) return;

  sel.innerHTML = "";

  // групуємо як раніше по group
  const groups = {};
  PRESETS.forEach((p) => {
    (groups[p.group] ||= []).push(p);
  });

  Object.keys(groups).forEach((g) => {
    const og = document.createElement("optgroup");
    og.label = g;

    // всередині групи можна відсортувати по ціні
    groups[g]
      .slice()
      .sort((a, b) => (a.price ?? 0) - (b.price ?? 0))
      .forEach((p) => {
        const opt = document.createElement("option");
        opt.value = presetKey(p); // важливо: співпадає з applyPresetByKey
        opt.textContent = `${p.model} — ${formatPrice(p.price)} (${p.maker})`;
        og.appendChild(opt);
      });

    sel.appendChild(og);
  });

  if (!sel.options.length) {
    const opt = document.createElement("option");
    opt.disabled = true;
    opt.textContent = "Моделі відсутні в довіднику";
    sel.appendChild(opt);
  }
}

// ==== ДОДАЙ/ЗАМІНИ buildCompareTable() НА ЦЮ ВЕРСІЮ ====
// Підсвічує "краще" в кожному рядку (зелена підсвітка):
// - для ціни / грн/кг / грн/(кг·км) -> МЕНШЕ краще
// - для навантаження / швидкості / запасу ходу / кліренсу / кутів / радіо -> БІЛЬШЕ краще
// - для +/− -> "+" краще
// - для виробника/розмірів/силової -> без підсвітки

function buildCompareTable() {
  const sel = $("compareSelect");
  const out = $("compareTable");
  if (!sel || !out) return;

  const keys = Array.from(sel.selectedOptions).map(o => o.value);
  if (keys.length < 2) {
    alert("Оберіть принаймні 2 моделі (утримуйте Ctrl для множинного вибору)");
    return;
  }

  // helpers
  const getPreset = (k) => PRESETS.find(x => presetKey(x) === k);

  const toNumberOrNull = (v) => {
    if (v === null || v === undefined) return null;
    if (typeof v === "number") return Number.isFinite(v) ? v : null;
    const s = String(v).trim().replace(",", ".");
    if (!s) return null;
    const n = Number(s);
    return Number.isFinite(n) ? n : null;
  };

  const isPlus = (v) => String(v ?? "").trim() === "+";
  const format = (label, key, v) => {
  if (v === null || v === undefined || v === "") return "—";

  // Ціна
  if (label === "Орієнтовна ціна, грн") {
    return formatPrice(toNumberOrNull(v));
  }

  // KPI округлення
  if (label === "KPI: грн/кг") {
    const n = toNumberOrNull(v);
    return n === null ? "—" : Math.round(n).toString();
  }

  if (label === "KPI: грн/(кг·км)") {
    const n = toNumberOrNull(v);
    return n === null ? "—" : n.toFixed(2);
  }

  // інші числові — без змін
  return String(v);
};


  // Параметри для порівняння
  // dir: "max" або "min" або "bool" або "none"
  const rowsSpec = [
    { label: "Виробник", key: "maker", dir: "none" },
    { label: "Орієнтовна ціна, грн", key: "price", dir: "min", type: "num" },

    // KPI (рахуємо на льоту)
    { label: "KPI: грн/кг", key: "__kpi_uah_per_kg", dir: "min", type: "num" },
    { label: "KPI: грн/(кг·км)", key: "__kpi_uah_per_kgkm", dir: "min", type: "num" },

    { label: "Силова установка", key: "power", dir: "none" },
    { label: "Маса, кг", key: "mass", dir: "min", type: "num" }, // як правило менша маса + (але якщо хочеш інакше — скажи)
    { label: "Розміри (ДхШхВ)", key: "dims", dir: "none" },
    { label: "Корисне навантаж., кг", key: "payload", dir: "max", type: "num" },
    { label: "Макс швид., км/год", key: "maxSpeed", dir: "max", type: "num" },
    { label: "Запас ходу, км", key: "rangeRoad", dir: "max", type: "num" },

    // ВАЖЛИВО: правильні поля
    { label: "Кліренс, мм", key: "clearance", dir: "max", type: "num" },
    { label: "Кут підйому, °", key: "climb", dir: "max", type: "num" },
    { label: "Кут крену, °", key: "tilt", dir: "max", type: "num" },

    { label: "Оптична", key: "optical", dir: "bool", type: "bool" },
    { label: "Оптична з ІЧ", key: "opticalIR", dir: "bool", type: "bool" },
    { label: "Тепловізійна", key: "thermal", dir: "bool", type: "bool" },
    { label: "Радіо, км", key: "radioKm", dir: "max", type: "num" },
    { label: "Starlink", key: "starlink", dir: "bool", type: "bool" },
    { label: "LTE", key: "lte", dir: "bool", type: "bool" },
  ];

  // зібрати значення по рядках
  const tableData = rowsSpec.map(r => {
    const vals = keys.map(k => {
      const p = getPreset(k);
      if (!p) return null;

      if (r.key === "__kpi_uah_per_kg") {
        const price = toNumberOrNull(p.price);
        const payload = toNumberOrNull(p.payload);
        return (price && payload) ? price / payload : null;
      }
      if (r.key === "__kpi_uah_per_kgkm") {
        const price = toNumberOrNull(p.price);
        const payload = toNumberOrNull(p.payload);
        const range = toNumberOrNull(p.rangeRoad);
        return (price && payload && range) ? price / (payload * range) : null;
      }

      return p[r.key];
    });

    // визначити "краще" для підсвітки
    let bestSet = new Set(); // індекси колонок, які найкращі
    if (r.dir === "max") {
      const nums = vals.map(toNumberOrNull);
      const max = Math.max(...nums.filter(v => v !== null));
      if (Number.isFinite(max)) nums.forEach((v, i) => { if (v === max) bestSet.add(i); });
    } else if (r.dir === "min") {
      const nums = vals.map(toNumberOrNull);
      const filtered = nums.filter(v => v !== null);
      if (filtered.length) {
        const min = Math.min(...filtered);
        nums.forEach((v, i) => { if (v === min) bestSet.add(i); });
      }
    } else if (r.dir === "bool") {
      vals.forEach((v, i) => { if (isPlus(v)) bestSet.add(i); });
      // якщо всі "-", тоді нічого не підсвічуємо
      const anyPlus = vals.some(isPlus);
      if (!anyPlus) bestSet = new Set();
    }

    return { spec: r, vals, bestSet };
  });

  // build HTML
  let html = `<table><tr><th>Параметр</th>`;
  keys.forEach(k => {
    const p = getPreset(k);
    html += `<th>${esc(p ? p.model : k)}</th>`;
  });
  html += `</tr>`;

  tableData.forEach(row => {
    html += `<tr><td>${esc(row.spec.label)}</td>`;
    row.vals.forEach((v, idx) => {
      const formatted = format(row.spec.label, row.spec.key, v);
      const cls = row.bestSet.has(idx) ? "highlight-best" : "";
      html += `<td class="${cls}">${esc(formatted)}</td>`;
    });
    html += `</tr>`;
  });

  html += `</table>`;

  // легенда
  html = `
    <div class="small" style="margin-bottom:10px">
      Підсвічування показує <b>найкраще</b> значення в рядку (може бути кілька однакових “кращих”).
      Для KPI/ціни — <b>менше краще</b>. Для більшості ТТХ — <b>більше краще</b>. Для “+/-” — “+” краще.
    </div>
  ` + html;

  out.innerHTML = html;
}


function clearCompare() {
  const sel = $("compareSelect");
  const out = $("compareTable");
  if (sel) Array.from(sel.options).forEach((o) => (o.selected = false));
  if (out) out.innerHTML = "";
}

function initCompare() {
  // наповнити список
  updateCompareSelect();

  // кнопки
  const btnBuild = $("buildCompareBtn");
  const btnClear = $("clearCompareBtn");

  if (btnBuild) btnBuild.addEventListener("click", buildCompareTable);
  if (btnClear) btnClear.addEventListener("click", clearCompare);
}

/* =========================================================
   ОЦІНКА / ДОВІДКА (модалка) — як було, але стабільно
========================================================= */
function renderCriteria() {
  const box = $("criteriaList");
  if (!box) return;
  box.innerHTML = "";

  CRITERIA.forEach((c) => {
    box.insertAdjacentHTML(
      "beforeend",
      `
      <div class="crit">
        <div class="critTop">
          <div class="critName">
            <b>${esc(c.name)}</b>
            <span>${esc(c.short)}</span>
          </div>
          <div class="critActions">
            <span class="weightTag">вага ${(c.weight * 100).toFixed(0)}%</span>
            <button class="helpBtn" type="button" data-help="${esc(c.id)}">Довідка</button>
          </div>
        </div>

        <label>Оцінка 0–5</label>
        <input
          id="s_${esc(c.id)}"
          type="text"
          inputmode="numeric"
          placeholder="0..5"
          aria-label="Оцінка ${esc(c.name)}"
        />
        <div class="fieldError hide" id="e_${esc(c.id)}">Дозволено лише одну цифру 0–5</div>

        <label>Коментар / зауваження</label>
        <textarea id="c_${esc(c.id)}" placeholder="Що не підтверджено, що потрібно доопрацювати..."></textarea>
      </div>
      `
    );
  });

  // довідка
  document.querySelectorAll("[data-help]").forEach((btn) => {
    btn.addEventListener("click", (e) => openHelp(e.currentTarget.dataset.help));
  });

  // ✅ Валідація БЕЗ clamp і БЕЗ відкату:
  // - можна ввести будь-що, але якщо не "0..5" (одна цифра) -> показуємо помилку
  // - calcFinal() рахує тільки коли все валідно (вона і так це робить)
  CRITERIA.forEach((c) => {
    const el = $("s_" + c.id);
    const err = $("e_" + c.id);
    if (!el) return;

    const setErr = (on) => {
      if (!err) return;
      err.classList.toggle("hide", !on);
    };

    const isValidScoreText = (raw) => {
      const s = String(raw ?? "").trim();
      if (s === "") return false;          // порожнє = не заповнено
      return /^[0-5]$/.test(s);            // тільки ОДНА цифра 0..5
    };

    const validateAndRender = () => {
      const ok = isValidScoreText(el.value);
      setErr(!ok);

      // якщо все валідно — перерахувати підсумок
      // якщо не валідно — calcFinal сам покаже помилки в validationBox при потребі
      calcFinal(false);
    };

    el.addEventListener("input", validateAndRender);
    el.addEventListener("blur", validateAndRender);

    el.addEventListener("paste", (e) => {
      // вставка типу "78" теж має бути помилкою
      // але щоб не вставлялись пробіли/букви — беремо чистий текст
      e.preventDefault();
      const txt = (e.clipboardData?.getData("text") || "").trim();
      el.value = txt;
      validateAndRender();
    });
  });
}

function openHelp(id) {
  const c = CRITERIA.find((x) => x.id === id);
  if (!c) return;

  const overlay = $("modalOverlay");
  if (!overlay) return;

  if ($("modalTitle")) $("modalTitle").textContent = `${c.name} — як оцінювати`;
  if ($("modalMeta")) $("modalMeta").textContent = `Вага ${(c.weight * 100).toFixed(0)}%. ${c.short}`;

  if ($("modalScale"))
    $("modalScale").innerHTML = `<b>Шкала</b><br><br><div class="small">${c.scale.map((s) => `• ${esc(s)}`).join("<br>")}</div>`;

  if ($("modalHow")) $("modalHow").innerHTML = `<b>Як оцінювати</b><br><br><div class="small">${esc(c.how)}</div>`;

  if ($("modalQuestions"))
    $("modalQuestions").innerHTML = `<b>Що просити на демо</b><br><br><div class="small">${c.questions.map((q) => `• ${esc(q)}`).join("<br>")}</div>`;

  overlay.style.display = "flex";
}

function wireHelpModal() {
  const overlay = $("modalOverlay");
  const closeBtn = $("modalCloseBtn");
  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener("click", () => (overlay.style.display = "none"));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.style.display = "none";
  });
}

/* ---------- scoring ---------- */
function collectScoring() {
  const s = {};
  CRITERIA.forEach((c) => {
    const raw = ($("s_" + c.id)?.value ?? "").trim();

    // тільки одна цифра 0..5
    if (/^[0-5]$/.test(raw)) s[c.id] = Number(raw);
    else s[c.id] = null; // і порожнє, і 8, і 78, і "a" = null
  });
  return s;
}

function validateScoring(sc) {
  const errors = [];
  CRITERIA.forEach((c) => {
    const v = sc[c.id];
    if (v === null) errors.push(`• ${c.name} — введіть одну цифру 0–5`);
    else if (v < 0 || v > 5) errors.push(`• ${c.name} — значення поза діапазоном 0–5`);
  });
  return errors;
}

function requireFullScoringOrThrow() {
  const sc = collectScoring();
  const errors = validateScoring(sc); // вже перевіряє null і 0..5

  if (errors.length) {
    const msg = "Не можна сформувати звіт. Заповніть оцінювання:\n\n" +
      errors.map(e => e.replace(/^•\s*/, "• ")).join("\n");
    alert(msg);
    return false;
  }

  // додатково: якщо calcFinal ще не пораховано/не виведено — порахуємо
  calcFinal(false);
  return true;
}

function setSummary(score, decision, riskObj) {
  if ($("finalScore")) $("finalScore").textContent = score === null ? "—" : score.toFixed(2);
  if ($("finalDecision")) $("finalDecision").textContent = decision || "—";

  const badge = $("riskBadge");
  const rText = $("riskText");
  const minKey = $("minKey");
  if (!badge || !rText || !minKey) return;

  badge.className = "badge";
  if (riskObj) {
    rText.textContent = riskObj.risk.text;
    minKey.textContent = riskObj.keyMin;
    badge.classList.add(riskObj.risk.color);
  } else {
    rText.textContent = "—";
    minKey.textContent = "—";
  }
}

function calcFinal(showAlert = true) {
  const sc = collectScoring();
  const errors = validateScoring(sc);

  const vbox = $("validationBox");
  if (errors.length) {
    if (vbox) vbox.innerHTML = "<b>Помилки:</b><br>" + errors.join("<br>");
    setSummary(null, null, null);
    if (showAlert) alert("Заповніть усі бали коректно.");
    return null;
  }
  if (vbox) vbox.textContent = "";

  let total = 0;
  CRITERIA.forEach((c) => (total += c.weight * (sc[c.id] || 0)));
  total = Math.round(total * 100) / 100;

  let decision = "Умовно рекомендовано";
  if (total >= 4.0) decision = "Рекомендовано";
  else if (total < 3.2) decision = "Не рекомендовано";

  const keyMin = Math.min(...KEY_CRITERIA.map((k) => sc[k] || 0));
  const allMin = Math.min(...CRITERIA.map((c) => sc[c.id] || 0));

  let risk = { color: "green", text: "🟢 Прийнятно" };
  if (keyMin < 3) risk = { color: "red", text: "🔴 Високий ризик (зв’язок/Fail-safe)" };
  else if (allMin < 3) risk = { color: "yellow", text: "🟡 Обмеження (є слабкі місця)" };

  setSummary(total, decision, { risk, keyMin });
  return { total, decision, risk };
}

/* =========================================================
   ЧЕК-ЛИСТ (рендер)
========================================================= */
function renderChecklist() {
  const box = $("checklist");
  if (!box) return;
  box.innerHTML = "";

  checklistItems.forEach((it) => {
    box.insertAdjacentHTML(
      "beforeend",
      `
      <div class="row" style="align-items:center;gap:10px;padding:10px;border:1px solid var(--line);border-radius:12px;margin:8px 0;background:rgba(0,0,0,.10)">
        <input type="checkbox" id="chk_${esc(it.k)}" style="width:18px;height:18px;"/>
        <div style="font-size:13px">${esc(it.t)}</div>
      </div>
      `
    );
  });
}

/* =========================================================
   LOCAL STORAGE (поки простий каркас)
   Якщо тобі не потрібно — можемо вимкнути.
========================================================= */
function loadState() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || { records: [] };
  } catch (e) {
    return { records: [] };
  }
}
function saveState(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}
function safeText(v) {
  const s = (v ?? "").toString().trim();
  return s ? s : "—";
}

function getVal(id) {
  const el = document.getElementById(id);
  return el ? el.value : "";
}

function getText(id) {
  const el = document.getElementById(id);
  return el ? el.textContent : "";
}

function todayStampUA() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(-2);
  return `${dd}.${mm}.${yy}`;
}

function centerLine(text, width = 70) {
  const s = String(text ?? "").trim();
  if (!s) return "";
  if (s.length >= width) return s;
  const left = Math.floor((width - s.length) / 2);
  return " ".repeat(left) + s;
}


function fileSafeName(s) {
  return (s || "")
    .toString()
    .trim()
    .replace(/[\\/:*?"<>|]+/g, "_")
    .replace(/\s+/g, " ")
    .slice(0, 80) || "report";
}

function downloadBlob(content, filename, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();

  setTimeout(() => URL.revokeObjectURL(url), 3000);
}

/**
 * Забирає з UI поточні дані.
 * Якщо у тебе інша структура критеріїв — нижче є блок "criteriaDump"
 * який максимально безболісно витягує все з #criteriaList.
 */
function collectCriteriaDump() {
  const lines = [];

  CRITERIA.forEach((c) => {
    const scoreEl = document.getElementById("s_" + c.id);
    const commEl  = document.getElementById("c_" + c.id);

    const rawScore = (scoreEl ? scoreEl.value : "").trim();
    const score = /^[0-5]$/.test(rawScore) ? rawScore : "—";

    const comm = (commEl ? commEl.value : "").trim();

    // формат: Навантаження(5):все чудово
    lines.push(`${c.name}(${score}):${comm ? comm : "—"}`);
  });

  return lines.join("\n").trim();
}

function collectReportData() {
  const maker = safeText(getVal("maker"));
  const model = safeText(getVal("model"));

  const price = safeText(getVal("price"));
  const power = safeText(getVal("power"));
  const mass = safeText(getVal("mass"));
  const dims = safeText(getVal("dims"));

  const payload = safeText(getVal("payloadNom"));
  const maxSpeed = safeText(getVal("maxSpeed"));
  const rangeRoad = safeText(getVal("rangeRoad"));
  const clearance = safeText(getVal("clearance"));
  const climb = safeText(getVal("climb"));
  const tilt = safeText(getVal("tilt"));

  const optical = safeText(getVal("optical"));
  const opticalIR = safeText(getVal("opticalIR"));
  const thermal = safeText(getVal("thermal"));
  const radioKm = safeText(getVal("radioKm"));
  const starlink = safeText(getVal("starlink"));
  const lte = safeText(getVal("lte"));

  // контакти з фотоблоку (в тебе вони тільки там)
  const contactName = safeText(getText("photoContact"));
  const contactPhone = safeText(getText("contactLink"));

  const notes = safeText(getVal("notes"));
  const commissionNotes = safeText(getVal("commissionNotes"));

  // результат оцінки
  const finalScore = safeText(getText("finalScore"));
  const finalDecision = safeText(getText("finalDecision"));
  const riskText = safeText(getText("riskText"));
  const minKey = safeText(getText("minKey"));

  // KPI (з верхнього блоку)
  const kpiTop = document.getElementById("kpiTop");
  const kpiText = kpiTop ? kpiTop.innerText.trim() : "";

  const criteriaDump = collectCriteriaDump();


  return {
    maker, model,
    contactName, contactPhone,
    price, power, mass, dims,
    payload, maxSpeed, rangeRoad, clearance, climb, tilt,
    optical, opticalIR, thermal, radioKm, starlink, lte,
    notes,
    finalScore, finalDecision, riskText, minKey,
    commissionNotes,
    kpiText,
    criteriaDump
  };
}
function toggleHowCalcInline(forceOpen = null) {
  const box = $("howCalcInline");
  if (!box) return;

  const willOpen = forceOpen === null ? box.classList.contains("hide") : !!forceOpen;

  // якщо відкриваємо — будуємо HTML один раз / або перебудовуємо (зручно, якщо ваги зміняться)
  if (willOpen) {
    const weights = CRITERIA
      .map(c => `<li><b>${esc(c.name)}</b> — ${(c.weight * 100).toFixed(0)}%</li>`)
      .join("");

    // ВАЖЛИВО: використовуємо KEY_CRITERIA з твого коду
    const keyNames = KEY_CRITERIA
      .map(k => CRITERIA.find(c => c.id === k)?.name)
      .filter(Boolean)
      .map(n => `<span class="tag">${esc(n)}</span>`)
      .join(" ");

    box.innerHTML = `
      <div class="howcalcHead">
  <div>
    <div class="howcalcTitle">Як рахується результат</div>
    <div class="howcalcSub">
      Формула, пороги рішення та логіка “світлофора” — максимально коротко.
    </div>
  </div>
</div>


      <div class="howcalcGrid">

        <div class="howcalcCard">
          <div class="howcalcH">1) Формула</div>
          <div class="howcalcText">
            <div><b>Підсумковий бал</b> = Σ (<b>вага критерію</b> × <b>оцінка</b>).</div>
            <div class="muted">Оцінка кожного критерію — лише <b>одна цифра 0–5</b>.</div>
            <div class="muted">Ваги в сумі дають 100% — це “важливість” критерію у підсумку.</div>
          </div>
        </div>

        <div class="howcalcCard">
          <div class="howcalcH">2) Пороги рішення</div>
          <ul class="howcalcList">
            <li><b>≥ 4.0</b> → <b>Рекомендовано</b> (можна приймати)</li>
            <li><b>3.2 – 3.99</b> → <b>Умовно рекомендовано</b> (можна, але з умовами/доопрацюванням)</li>
            <li><b>&lt; 3.2</b> → <b>Не рекомендовано</b> (ризики/невідповідність)</li>
          </ul>
          <div class="muted">Пороги підібрані так, щоб “Рекомендовано” означало стабільно сильний результат по більшості критеріїв.</div>
        </div>

        <div class="howcalcCard">
          <div class="howcalcH">3) Світлофор (ризики)</div>
          <div class="howcalcText">
            <div><b>Ключові критерії:</b> ${keyNames || "<span class='muted'>не задані</span>"}</div>
            <ul class="howcalcList">
              <li>Якщо мінімум по ключових <b>&lt; 3</b> → <b>🔴 Високий ризик</b></li>
              <li>Інакше якщо мінімум по будь-якому критерію <b>&lt; 3</b> → <b>🟡 Є слабкі місця</b></li>
              <li>Інакше → <b>🟢 Прийнятно</b></li>
            </ul>
            <div class="muted">Логіка проста: навіть при високому середньому балі “провал” по зв’язку/Fail-safe небезпечний.</div>
          </div>
        </div>

        <div class="howcalcCard">
          <div class="howcalcH">4) Ваги критеріїв</div>
          <ul class="howcalcList">${weights}</ul>
          <div class="muted">Більша вага = критерій сильніше впливає на фінальний бал.</div>
        </div>

      </div>
    `;

    // кнопка "Згорнути"
    const closeBtn = $("howCalcCloseBtn");
    if (closeBtn) closeBtn.addEventListener("click", () => toggleHowCalcInline(false));

    // автоскрол до секції, щоб не “шукати очима”
    box.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  box.classList.toggle("hide", !willOpen);

  // (опційно) змінюємо текст кнопки зверху
  const topBtn = $("howCalcBtn");
  if (topBtn) topBtn.innerHTML = willOpen
    ? `<i class="fa-solid fa-chevron-up"></i> Згорнути`
    : `<i class="fa-solid fa-circle-info"></i> Як рахується?`;
}

function buildTxtReport(d) {
  const W = 70;

  const centerLine = (text, width = W) => {
    const s = String(text ?? "").trim();
    if (!s) return "";
    if (s.length >= width) return s;
    const left = Math.floor((width - s.length) / 2);
    return " ".repeat(left) + s;
  };

  const isPlus = (v) => String(v ?? "").trim() === "+";
  const isDash = (v) => {
    const s = String(v ?? "").trim();
    return s === "" || s === "-" || s === "—";
  };
  const numOrNull = (v) => {
    if (v === null || v === undefined) return null;
    const s = String(v).trim().replace(",", ".");
    if (!s) return null;
    const n = Number(s);
    return Number.isFinite(n) ? n : null;
  };

  const today = todayStampUA();

  // Камери
  const cameraLines = [];
  const opticalN = numOrNull(d.optical);
  const opticalIRN = numOrNull(d.opticalIR);
  const thermalN = numOrNull(d.thermal);

  if (!isDash(d.optical)) {
    if (opticalN !== null) cameraLines.push(`• Оптична — ${opticalN}`);
    else if (isPlus(d.optical)) cameraLines.push(`• Оптична`);
  }
  if (!isDash(d.opticalIR)) {
    if (opticalIRN !== null) cameraLines.push(`• Оптична з ІЧ — ${opticalIRN}`);
    else if (isPlus(d.opticalIR)) cameraLines.push(`• Оптична з ІЧ`);
  }
  if (!isDash(d.thermal)) {
    if (thermalN !== null) cameraLines.push(`• Тепловізійна — ${thermalN}`);
    else if (isPlus(d.thermal)) cameraLines.push(`• Тепловізійна`);
  }

  // Зв’язок
  const linkLines = [];
  const radioN = numOrNull(d.radioKm);
  if (radioN !== null && radioN > 0) linkLines.push(`• Радіоканал — ${radioN} км`);
  if (isPlus(d.starlink)) linkLines.push(`• Starlink`);
  if (isPlus(d.lte)) linkLines.push(`• LTE`);

  const lines = [];

  // ====== ЗАГОЛОВОК ======
  lines.push(centerLine("ЗВІТ", W));
  lines.push(centerLine(`щодо БеНК ${d.model} ${d.maker}`, W));
  lines.push(centerLine(`Дата: ${today}`, W));
  lines.push("");

  // ====== 1) ОСНОВНІ ХАРАКТЕРИСТИКИ ======
  lines.push(centerLine("1) ОСНОВНІ ХАРАКТЕРИСТИКИ", W));
  lines.push(`Ціна, грн: ${d.price}`);
  lines.push(`Силова установка: ${d.power}`);
  lines.push(`Маса, кг: ${d.mass}`);
  lines.push(`Розміри: ${d.dims}`);
  lines.push(`Корисне навантаження, кг: ${d.payload}`);
  lines.push(`Макс швидкість, км/год: ${d.maxSpeed}`);
  lines.push(`Запас ходу, км: ${d.rangeRoad}`);
  lines.push(`Кліренс, мм: ${d.clearance}`);
  lines.push(`Кут підйому, °: ${d.climb}`);
  lines.push(`Кут крену, °: ${d.tilt}`);

  if (cameraLines.length) {
    lines.push("Камери:");
    cameraLines.forEach((x) => lines.push(x));
  }

  if (linkLines.length) {
    lines.push("Види зв’язку:");
    linkLines.forEach((x) => lines.push(x));
  }

  lines.push("");

  // ====== 2) ДЕТАЛІЗАЦІЯ ======
  lines.push(centerLine("2) ДЕТАЛІЗАЦІЯ КРИТЕРІЇВ", W));
  lines.push(d.criteriaDump ? d.criteriaDump : "—");
  lines.push("");

  // ====== 3) РЕЗУЛЬТАТ ======
  lines.push(centerLine("3) РЕЗУЛЬТАТ ОЦІНКИ", W));
  lines.push(`Бал: ${d.finalScore}`);
  lines.push(`Рішення: ${d.finalDecision}`);
  lines.push(`Світлофор: ${d.riskText}`);
  lines.push(`Мін. ключовий: ${d.minKey}`);
  lines.push("");

  // ====== 4) КОМЕНТАРІ ======
  lines.push(centerLine("4) КОМЕНТАРІ", W));
  lines.push(`Загальні зауваження комісії: ${d.commissionNotes}`);
  lines.push("");

  return lines.join("\n");
}

function wireHowCalcInline() {
  const btn = $("howCalcBtn");
  const box = $("howCalcInline");
  if (!btn || !box) return;

  // початково сховано
  box.classList.add("hide");

  btn.addEventListener("click", () => toggleHowCalcInline());
}

function escapeHtml(s) {
  return (s || "").toString()
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildHtmlReport(d) {
  const title = `Звіт оцінювання НРК — ${d.model}`;
  const css = `
    body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; margin:24px; color:#111}
    h1{margin:0 0 8px}
    .muted{color:#555}
    .box{border:1px solid #ddd;border-radius:12px;padding:14px;margin:12px 0}
    .grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .row{display:flex;justify-content:space-between;gap:12px;padding:6px 0;border-bottom:1px dashed #eee}
    .row:last-child{border-bottom:none}
    .kpi{white-space:pre-wrap}
    pre{white-space:pre-wrap;background:#fafafa;border:1px solid #eee;border-radius:12px;padding:12px}
  `;

  return `<!doctype html>
<html lang="uk">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${escapeHtml(title)}</title>
<style>${css}</style>
</head>
<body>
  <h1>${escapeHtml(title)}</h1>
  <div class="muted">Дата: ${escapeHtml(todayStamp())}</div>

  <div class="box">
    <h2>1) Ідентифікація</h2>
    <div class="grid">
      <div class="row"><b>Модель</b><span>${escapeHtml(d.model)}</span></div>
      <div class="row"><b>Виробник</b><span>${escapeHtml(d.maker)}</span></div>
      <div class="row"><b>Контакт</b><span>${escapeHtml(d.contactName)}</span></div>
      <div class="row"><b>Телефон</b><span>${escapeHtml(d.contactPhone)}</span></div>
    </div>
  </div>

  <div class="box">
    <h2>2) Основні характеристики</h2>
    <div class="grid">
      <div class="row"><b>Ціна, грн</b><span>${escapeHtml(d.price)}</span></div>
      <div class="row"><b>Силова установка</b><span>${escapeHtml(d.power)}</span></div>
      <div class="row"><b>Маса, кг</b><span>${escapeHtml(d.mass)}</span></div>
      <div class="row"><b>Розміри</b><span>${escapeHtml(d.dims)}</span></div>
      <div class="row"><b>Корисне навантаження, кг</b><span>${escapeHtml(d.payload)}</span></div>
      <div class="row"><b>Макс швидкість, км/год</b><span>${escapeHtml(d.maxSpeed)}</span></div>
      <div class="row"><b>Запас ходу, км</b><span>${escapeHtml(d.rangeRoad)}</span></div>
      <div class="row"><b>Кліренс, мм</b><span>${escapeHtml(d.clearance)}</span></div>
      <div class="row"><b>Кут підйому, °</b><span>${escapeHtml(d.climb)}</span></div>
      <div class="row"><b>Кут крену, °</b><span>${escapeHtml(d.tilt)}</span></div>
    </div>
  </div>

  <div class="box">
    <h2>3) Сенсори / зв’язок</h2>
    <div class="grid">
      <div class="row"><b>Оптична</b><span>${escapeHtml(d.optical)}</span></div>
      <div class="row"><b>Оптична з ІЧ</b><span>${escapeHtml(d.opticalIR)}</span></div>
      <div class="row"><b>Тепловізійна</b><span>${escapeHtml(d.thermal)}</span></div>
      <div class="row"><b>Радіо, км</b><span>${escapeHtml(d.radioKm)}</span></div>
      <div class="row"><b>Starlink</b><span>${escapeHtml(d.starlink)}</span></div>
      <div class="row"><b>LTE</b><span>${escapeHtml(d.lte)}</span></div>
    </div>
  </div>

  ${d.kpiText ? `
  <div class="box">
    <h2>4) KPI</h2>
    <div class="kpi">${escapeHtml(d.kpiText)}</div>
  </div>` : ""}

  <div class="box">
    <h2>5) Результат оцінки</h2>
    <div class="grid">
      <div class="row"><b>Бал</b><span>${escapeHtml(d.finalScore)}</span></div>
      <div class="row"><b>Рішення</b><span>${escapeHtml(d.finalDecision)}</span></div>
      <div class="row"><b>Світлофор</b><span>${escapeHtml(d.riskText)}</span></div>
      <div class="row"><b>Мін. ключовий</b><span>${escapeHtml(d.minKey)}</span></div>
    </div>
  </div>

  <div class="box">
    <h2>6) Коментарі</h2>
    <div class="row"><b>Примітки (довідник)</b><span>${escapeHtml(d.notes)}</span></div>
    <div class="row"><b>Загальні зауваження комісії</b><span>${escapeHtml(d.commissionNotes)}</span></div>
  </div>

  ${d.criteriaDump ? `
  <div class="box">
    <h2>7) Деталізація критеріїв (з форми)</h2>
    <pre>${escapeHtml(d.criteriaDump)}</pre>
  </div>` : ""}

</body>
</html>`;
}

function wireReportButtons() {
  const btnHtml = document.getElementById("downloadReportHtmlBtn");
  const btnTxt = document.getElementById("downloadReportTxtBtn");

  if (!btnHtml && !btnTxt) return;

  const fileToken = (s) => (s || "")
    .toString()
    .trim()
    .replace(/[\\/:*?"<>|]+/g, "_")
    .replace(/\s+/g, "_")
    .replace(/_+/g, "_")
    .slice(0, 60);

  const buildBaseName = (d) => {
    const model = fileToken(d.model) || "Без_назви";
    const maker = fileToken(d.maker);
    const date = todayStampUA();
    // якщо виробник порожній/—, не додаємо його
    return maker && maker !== "—"
      ? `Звіт_БенК_${model}_${maker}_${date}`
      : `Звіт_БенК_${model}_${date}`;
  };

  if (btnTxt) {
    btnTxt.addEventListener("click", () => {
      if (!requireFullScoringOrThrow()) return;
      const d = collectReportData();
      const fname = `${buildBaseName(d)}.txt`;
      downloadBlob(buildTxtReport(d), fname, "text/plain;charset=utf-8");
    });
  }

  if (btnHtml) {
    btnHtml.addEventListener("click", () => {
      if (!requireFullScoringOrThrow()) return;
      const d = collectReportData();
      const fname = `${buildBaseName(d)}.html`;
      downloadBlob(buildHtmlReport(d), fname, "text/html;charset=utf-8");
    });
  }
}

function uniqModelsFromPresets() {
  // беремо назви моделей з PRESETS, унікальні
  const set = new Set(PRESETS.map(p => String(p.model || "").trim()).filter(Boolean));
  return Array.from(set).sort((a,b)=>a.localeCompare(b, "uk"));
}

function getGroupsFromPresets() {
  const set = new Set(PRESETS.map(p => String(p.group || "").trim()).filter(Boolean));
  return ["Усі"].concat(Array.from(set).sort((a,b)=>a.localeCompare(b, "uk")));
}

function modelToGroupMap() {
  const map = new Map();
  PRESETS.forEach(p => {
    const m = String(p.model || "").trim();
    const g = String(p.group || "").trim();
    if (m) map.set(m, g || "—");
  });
  return map;
}

function buildInvModelList({ groupFilter = "Усі", search = "" } = {}) {
  const all = uniqModelsFromPresets();
  const m2g = modelToGroupMap();
  const q = String(search || "").trim().toLowerCase();

  return all.filter(m => {
    const g = m2g.get(m) || "—";
    const okGroup = (groupFilter === "Усі") ? true : (g === groupFilter);
    const okSearch = q ? m.toLowerCase().includes(q) : true;
    return okGroup && okSearch;
  });
}

function renderInventoryFilters() {
  const sel = $("invGroupFilter");
  if (!sel) return;

  sel.innerHTML = "";
  getGroupsFromPresets().forEach(g => {
    const opt = document.createElement("option");
    opt.value = g;
    opt.textContent = g;
    sel.appendChild(opt);
  });
}

function getQty(unitId, modelName) {
  const unit = INVENTORY[unitId] || {};
  let total = 0;

  Object.entries(unit).forEach(([key, qty]) => {

    const [maker, model] = key.split("__");  // 👈 ОСЬ ТУТ

    if (model === modelName) {
      total += Number(qty) || 0;
    }

  });

  return total;
}


function renderInventory() {
  const out = $("inventoryTable");
  const sumOut = $("inventorySummary");
  if (!out || !sumOut) return;

  const groupFilter = $("invGroupFilter")?.value || "Усі";
  const search = $("invSearch")?.value || "";

  const models = buildInvModelList({ groupFilter, search });

  if (!models.length) {
    out.innerHTML = `<div class="small">Нічого не знайдено.</div>`;
    sumOut.innerHTML = "";
    return;
  }

  // Генерація таблиці з ВИПРАВЛЕНИМИ min-width для мобілки
  let html = `<table>
    <tr>
      <th style="min-width:120px; max-width:160px; white-space:normal; word-break:break-word;">БеНК</th>
      ${UNITS.map(u => `<th style="min-width:45px; text-align:center;">${u.id}</th>`).join("")}
      <th style="min-width:80px; text-align:center;">Всього</th>
    </tr>`;

  let grandTotal = 0;
  const totalByUnit = Object.fromEntries(UNITS.map(u => [u.id, 0]));

  models.forEach(model => {
    let rowTotal = 0;
    html += `<tr>
      <td style="white-space:normal; word-break:break-word;"><b>${esc(model)}</b></td>`;

    UNITS.forEach(u => {
      const qty = getQty(u.id, model);
      rowTotal += qty;
      totalByUnit[u.id] += qty;
      html += `<td style="text-align:center;">${qty ? `<b>${qty}</b>` : "—"}</td>`;
    });

    grandTotal += rowTotal;
    html += `<td style="text-align:center;"><b>${rowTotal || "—"}</b></td></tr>`;
  });

  // Підсумковий рядок
  html += `<tr>
    <td><b>Всього</b></td>
    ${UNITS.map(u => `<td style="text-align:center;"><b>${totalByUnit[u.id] || "—"}</b></td>`).join("")}
    <td style="text-align:center;"><b>${grandTotal || "—"}</b></td>
  </tr>`;

  html += `</table>`;

  out.innerHTML = html;

  // Підсумковий блок
  sumOut.innerHTML = `
    <div class="small">
      Загальна кількість БеНК за поточним фільтром: <b>${grandTotal}</b>
    </div>
  `;
}

function classifyMass(mass) {
  const m = Number(mass);
  if (!Number.isFinite(m)) return "—";
  if (m <= 5) return "Міні";
  if (m <= 50) return "Легкі";
  if (m <= 500) return "Середні";
  if (m <= 5000) return "Важкі";
  return "Надважкі";
}

function classifyFunction(p) {
  const g = String(p?.group || "").toLowerCase();
  if (g.includes("бой")) return "Бойовий";
  if (g.includes("логіст")) return "Логістичний";
  if (g.includes("інжен")) return "Інженерний";
  if (g.includes("спец")) return "Спеціальний";
  if (g.includes("трен")) return "Тренажер";
  return "—";
}

function classifyChassis(p) {
  const g = String(p?.group || "").toLowerCase();
  if (g.includes("коліс")) return "Колісне";
  if (g.includes("гусен")) return "Гусеничне";
  if (g.includes("спец")) return "Спеціальне";
  return "—";
}

function classifyPower(p) {
  const s = String(p?.power || "").toLowerCase();
  if (s.includes("елект")) return "Електрична";
  if (s.includes("двз") || s.includes("двз")) return "ДВЗ";
  if (s.includes("комб")) return "Комбінована";
  return p?.power ? String(p.power) : "—";
}

function shortChassis(label) {
  switch (label) {
    case "Колісне": return "К";
    case "Гусеничне": return "Г";
    case "Спеціальне": return "Сп";
    default: return "—";
  }
}

function shortPower(label) {
  switch (label) {
    case "Електрична": return "Е";
    case "ДВЗ": return "Д";
    case "Комбінована": return "К";
    default: return "—";
  }
}

function funcClassName(func) {
  switch (func) {
    case "Бойовий": return "func-b";
    case "Логістичний": return "func-l";
    case "Інженерний": return "func-i";
    case "Спеціальний": return "func-s";
    case "Тренажер": return "func-t";
    default: return "func-na";
  }
}

function renderT6Catalog() {
  const out = $("t6Catalog");
  if (!out || typeof PRESETS === "undefined") return;

  const rows = PRESETS.map(p => {
    const model = String(p.model || "").trim();
    const maker = String(p.maker || "").trim();
    const func = classifyFunction(p);
    const massClass = classifyMass(p.mass);
    const chassis = classifyChassis(p);
    const power = classifyPower(p);
    const chassisShort = shortChassis(chassis);
    const powerShort = shortPower(power);
    const massNum = Number(p.mass);
    const mass = Number.isFinite(massNum) && massNum > 0 ? `${massNum} кг` : "—";
    const priceNum = Number(p.price);
    const price = Number.isFinite(priceNum) && priceNum > 0 ? formatPrice(priceNum) : "—";
    const key = presetKey(p);
    const funcClass = funcClassName(func);
    return { key, model, maker, func, funcClass, massClass, chassis, chassisShort, power, powerShort, mass, massNum, price, priceNum };
  }).sort((a, b) => a.model.localeCompare(b.model, "uk"));

  const funcSelect = $("t6FuncFilter");
  if (funcSelect && funcSelect.options.length === 0) {
    const groupOrder = ["Бойовий", "Логістичний", "Інженерний", "Спеціальний", "Тренажер", "—"];
    funcSelect.innerHTML = `<option value="Усі">Усі</option>` + groupOrder
      .filter(g => rows.some(r => r.func === g))
      .map(g => `<option value="${g}">${g}</option>`).join("");
  }

  const filter = funcSelect?.value || "Усі";
  const search = ($("t6Search")?.value || "").trim().toLowerCase();
  const sort = $("t6Sort")?.value || "model_asc";

  const filtered = rows.filter(r => {
    const okFilter = (filter === "Усі") ? true : r.func === filter;
    const hay = `${r.model} ${r.maker}`.toLowerCase();
    const okSearch = search ? hay.includes(search) : true;
    return okFilter && okSearch;
  });

  const groupOrder = ["Бойовий", "Логістичний", "Інженерний", "Спеціальний", "Тренажер", "—"];
  const sortItems = (arr) => {
    const copy = arr.slice();
    switch (sort) {
      case "price_asc":
        return copy.sort((a, b) => (a.priceNum || Infinity) - (b.priceNum || Infinity) || a.model.localeCompare(b.model, "uk"));
      case "price_desc":
        return copy.sort((a, b) => (b.priceNum || -Infinity) - (a.priceNum || -Infinity) || a.model.localeCompare(b.model, "uk"));
      case "mass_asc":
        return copy.sort((a, b) => (a.massNum || Infinity) - (b.massNum || Infinity) || a.model.localeCompare(b.model, "uk"));
      case "mass_desc":
        return copy.sort((a, b) => (b.massNum || -Infinity) - (a.massNum || -Infinity) || a.model.localeCompare(b.model, "uk"));
      case "chassis_asc":
        return copy.sort((a, b) => a.chassis.localeCompare(b.chassis, "uk") || a.model.localeCompare(b.model, "uk"));
      default:
        return copy.sort((a, b) => a.model.localeCompare(b.model, "uk"));
    }
  };

  const grouped = groupOrder.map(name => ({
    name,
    items: sortItems(filtered.filter(r => r.func === name))
  })).filter(g => g.items.length);

  const html = grouped.map(g => `
    <div class="classGroup">
      <div class="classGroupTitle">${esc(g.name)} <span class="count">${g.items.length}</span></div>
      <table class="classTable">
        <tr>
          <th class="numCell">№</th>
          <th>Модель</th>
          <th>Призначення</th>
          <th>Клас маси</th>
          <th>Маса</th>
          <th>Ціна</th>
          <th>Шасі</th>
          <th>Силова</th>
        </tr>
        ${g.items.map((r, idx) => `
          <tr class="classRow" data-preset="${encodeURIComponent(r.key)}">
            <td class="numCell">${idx + 1}</td>
            <td>
              <div class="modelCell">
                <strong>${esc(r.model || "—")}</strong>
                <span class="muted">${esc(r.maker || "—")}</span>
              </div>
            </td>
            <td><span class="chip ${r.funcClass}">${esc(r.func)}</span></td>
            <td><span class="chip">${esc(r.massClass)}</span></td>
            <td><span class="chip muted">${esc(r.mass)}</span></td>
            <td><span class="chip muted">${r.price}</span></td>
            <td><span class="chip" title="${esc(r.chassis)}">${esc(r.chassisShort)}</span></td>
            <td><span class="chip" title="${esc(r.power)}">${esc(r.powerShort)}</span></td>
          </tr>
        `).join("")}
      </table>
    </div>
  `).join("");

  out.innerHTML = html;
}

function renderT6Insights() {
  const topOut = $("t6Top5");
  const valOut = $("t6Value");
  if (!topOut || !valOut || typeof PRESETS === "undefined") return;

  const items = PRESETS.map(p => ({
    model: String(p.model || "").trim(),
    maker: String(p.maker || "").trim(),
    payload: Number(p.payload),
    rangeRoad: Number(p.rangeRoad),
    maxSpeed: Number(p.maxSpeed),
    clearance: Number(p.clearance),
    price: Number(p.price),
  })).filter(x => x.model);

  const top5 = (arr, key) => arr
    .filter(x => Number.isFinite(x[key]) && x[key] > 0)
    .sort((a, b) => b[key] - a[key])
    .slice(0, 5);

  const renderList = (title, list, key, suffix) => `
    <div class="insightCard">
      <div class="insightTitle">${title}</div>
      <ul class="insightList">
        ${list.map(x => `
          <li class="insightItem">
            <span>${esc(x.model)}</span>
            <span class="muted">${x[key]}${suffix}</span>
          </li>
        `).join("")}
      </ul>
    </div>`;

  topOut.innerHTML = [
    renderList("ТОП‑5 вантажність", top5(items, "payload"), "payload", " кг"),
    renderList("ТОП‑5 дальність", top5(items, "rangeRoad"), "rangeRoad", " км"),
    renderList("ТОП‑5 швидкість", top5(items, "maxSpeed"), "maxSpeed", " км/год"),
    renderList("ТОП‑5 кліренс", top5(items, "clearance"), "clearance", " мм"),
  ].join("");

  const withValue = items
    .filter(x => Number.isFinite(x.price) && x.price > 0)
    .map(x => ({
      ...x,
      pricePerKg: (x.payload && x.payload > 0) ? x.price / x.payload : null,
      pricePerKm: (x.rangeRoad && x.rangeRoad > 0) ? x.price / x.rangeRoad : null,
    }));

  const bestKg = withValue
    .filter(x => x.pricePerKg)
    .sort((a, b) => a.pricePerKg - b.pricePerKg)
    .slice(0, 5);

  const bestKm = withValue
    .filter(x => x.pricePerKm)
    .sort((a, b) => a.pricePerKm - b.pricePerKm)
    .slice(0, 5);

  const renderValueList = (title, list, key) => `
    <div class="insightCard">
      <div class="insightTitle">${title}</div>
      <ul class="insightList">
        ${list.map(x => `
          <li class="insightItem">
            <span>${esc(x.model)}</span>
            <span class="muted">${formatPrice(Math.round(x[key]))}</span>
          </li>
        `).join("")}
      </ul>
    </div>`;

  valOut.innerHTML = [
    renderValueList("Ціна за кг вантажності (краще)", bestKg, "pricePerKg"),
    renderValueList("Ціна за км пробігу (краще)", bestKm, "pricePerKm"),
  ].join("");
}

function wireT6CatalogControls() {
  const func = $("t6FuncFilter");
  const search = $("t6Search");
  const sort = $("t6Sort");
  if (func) func.addEventListener("change", renderT6Catalog);
  if (sort) sort.addEventListener("change", renderT6Catalog);
  if (search) search.addEventListener("input", renderT6Catalog);
}

function wireT6CatalogRowClicks() {
  const wrap = $("t6Catalog");
  if (!wrap) return;
  wrap.addEventListener("click", (e) => {
    const row = e.target.closest("tr[data-preset]");
    if (!row) return;
    const key = decodeURIComponent(row.getAttribute("data-preset") || "");
    if (!key) return;
    openPresetModalByKey(key);
  });
}

function buildPresetModalHtml(p) {
  const photoUrl = String(p.photo || "").trim();
  const imgHtml = photoUrl
    ? `<img src="${esc(photoUrl)}" alt="${esc(p.model || "")}">`
    : "";

  const photoBlock = `
    <div class="photoBox">
      <div class="photoFrame">
        ${imgHtml}
        <div class="noPhoto"${photoUrl ? ' style="display:none"' : ""}>Фото</div>
      </div>
      <div class="photoMeta">
        <div class="pill"><strong>${esc(p.model || "—")}</strong></div>
        <div class="pill">${esc(p.maker || "—")}</div>
        <div class="pill">Ціна: <strong>${formatPrice(Number(p.price))}</strong></div>
        <div class="pill">Силова: <strong>${esc(p.power || "—")}</strong></div>
      </div>
    </div>
  `;

  const specBlock = `
    <div class="box">
      <h2>1) Загальні</h2>
      <div class="grid">
        <div class="row"><b>Маса, кг</b><span>${esc(p.mass ?? "—")}</span></div>
        <div class="row"><b>Розміри</b><span>${esc(p.dims ?? "—")}</span></div>
        <div class="row"><b>Корисне навантаження, кг</b><span>${esc(p.payload ?? "—")}</span></div>
        <div class="row"><b>Макс швидкість, км/год</b><span>${esc(p.maxSpeed ?? "—")}</span></div>
        <div class="row"><b>Запас ходу, км</b><span>${esc(p.rangeRoad ?? "—")}</span></div>
        <div class="row"><b>Кліренс, мм</b><span>${esc(p.clearance ?? "—")}</span></div>
        <div class="row"><b>Кут підйому, °</b><span>${esc(p.climb ?? "—")}</span></div>
        <div class="row"><b>Кут крену, °</b><span>${esc(p.tilt ?? "—")}</span></div>
      </div>
    </div>
  `;

  const sensorsBlock = `
    <div class="box">
      <h2>2) Сенсори / зв’язок</h2>
      <div class="grid">
        <div class="row"><b>Оптична</b><span>${esc(p.optical ?? "—")}</span></div>
        <div class="row"><b>Оптична з ІЧ</b><span>${esc(p.opticalIR ?? "—")}</span></div>
        <div class="row"><b>Тепловізійна</b><span>${esc(p.thermal ?? "—")}</span></div>
        <div class="row"><b>Радіо, км</b><span>${esc(p.radioKm ?? "—")}</span></div>
        <div class="row"><b>Starlink</b><span>${esc(p.starlink ?? "—")}</span></div>
        <div class="row"><b>LTE</b><span>${esc(p.lte ?? "—")}</span></div>
      </div>
    </div>
  `;

  const contactBlock = `
    <div class="box">
      <h2>3) Контакти</h2>
      <div class="grid">
        <div class="row"><b>Контакт</b><span>${esc(p.contactName ?? "—")}</span></div>
        <div class="row"><b>Зв’язок</b><span>${esc(p.contactInfo ?? "—")}</span></div>
      </div>
    </div>
  `;

  return `${photoBlock}${specBlock}${sensorsBlock}${contactBlock}`;
}

function openPresetModalByKey(key) {
  const p = PRESETS.find(x => presetKey(x) === key);
  if (!p) return;

  const overlay = $("presetModal");
  const title = $("presetModalTitle");
  const meta = $("presetModalMeta");
  const body = $("presetModalBody");
  if (!overlay || !title || !meta || !body) return;

  title.textContent = p.model ? `БеНК: ${p.model}` : "БеНК";
  meta.textContent = p.maker ? `Виробник: ${p.maker}` : "";
  body.innerHTML = buildPresetModalHtml(p);
  overlay.style.display = "flex";
}

function wirePresetModal() {
  const overlay = $("presetModal");
  const closeBtn = $("presetModalCloseBtn");
  if (closeBtn) closeBtn.addEventListener("click", () => { if (overlay) overlay.style.display = "none"; });
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.style.display = "none";
    });
  }
}

function wireInventory() {
  renderInventoryFilters();
  renderInventory();

  const sel = $("invGroupFilter");
  const inp = $("invSearch");
  const reset = $("invResetBtn");

  if (sel) sel.addEventListener("change", renderInventory);
  if (inp) inp.addEventListener("input", () => {
    // легкий debounce без таймерів: просто перерендер
    renderInventory();
  });

  if (reset) reset.addEventListener("click", () => {
    if (sel) sel.value = "Усі";
    if (inp) inp.value = "";
    renderInventory();
  });
}

function toggleTheme() {
  const current = document.body.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  
  document.body.setAttribute("data-theme", next);
  
  // запам'ятовуємо вибір
  localStorage.setItem("preferredTheme", next);
  
  // оновлюємо іконку та текст
  const btn = document.getElementById("themeToggle");
  if (btn) {
    const icon = btn.querySelector("i");
    const label = btn.querySelector(".themeLabel");
    if (next === "dark") {
      icon.className = "fa-solid fa-moon";
      label.textContent = "Темна";
    } else {
      icon.className = "fa-solid fa-sun";
      label.textContent = "Світла";
    }
  }
}
// в init() або після завантаження сторінки
function updateHeaderHeight() {
  const header = document.querySelector('header');
  if (header) {
    const height = header.offsetHeight;
    document.documentElement.style.setProperty('--headerH', height + 'px');
  }
}

window.addEventListener('load', updateHeaderHeight);
window.addEventListener('resize', updateHeaderHeight);
// ініціалізація при завантаженні
function initTheme() {
  let saved = localStorage.getItem("preferredTheme");
  
  // якщо є збережений вибір — використовуємо його
  if (saved) {
    document.body.setAttribute("data-theme", saved);
  } else {
    // інакше дивимось на системні налаштування
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = prefersDark ? "dark" : "light";
    document.body.setAttribute("data-theme", initial);
  }
  
  // одразу оновлюємо кнопку
  toggleTheme();   // це викличе оновлення іконки/тексту
}
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);
});
function handleStickyBar() {
  const bar = document.getElementById('invStickyBar');
  if (!bar) return;

  const sectionT7 = document.getElementById('t7');
  if (!sectionT7 || sectionT7.classList.contains('hide')) {
    bar.classList.remove('isStuck');
    return;
  }

  const rect = bar.getBoundingClientRect();
  const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--headerH')) || 92;

  if (rect.top <= headerHeight) {
    bar.classList.add('isStuck');
  } else {
    bar.classList.remove('isStuck');
  }
}

// Виклик при скролі та при перемиканні вкладок
window.addEventListener('scroll', handleStickyBar);
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    setTimeout(handleStickyBar, 100); // даємо час на показ секції
  });
});

// Початковий виклик
setTimeout(handleStickyBar, 300);
/* =========================================================
   INIT
========================================================= */
function init() {
  wireTabs();
  wireHelpModal();
  wireInventory();

  renderCriteria();
  renderChecklist();

  // KPI підтягується при зміні ключових полів
  ["price", "payloadNom", "rangeRoad"].forEach((id) => {
    const el = $(id);
    if (el) el.addEventListener("input", renderKPI);
  });
wireHowCalcInline();

  // Автокомпліт
  wireAutocomplete();
    initCompare();   // <-- ОЦЕ ДОДАЙ
  // стартовий KPI
  wireReportButtons();
  renderKPI();
  wireCopyButton();
  initDebugBadge();
  renderT6Catalog();
  renderT6Insights();
  wireT6CatalogControls();
  wireT6CatalogRowClicks();
  wirePresetModal();
}

document.addEventListener("DOMContentLoaded", init);
function wireCopyButton() {
  const copyBtn = $("copyContactBtn");
  const link = $("contactLink");

  if (!copyBtn || !link) return;

  const icon = copyBtn.querySelector("i");
  if (!icon) return;

  copyBtn.addEventListener("click", () => {
    const text = link.textContent.trim();
    if (!text || text === "—") return;

    navigator.clipboard.writeText(text).then(() => {

      // змінюємо іконку
      icon.classList.remove("fa-copy");
      icon.classList.add("fa-check");

      setTimeout(() => {
        icon.classList.remove("fa-check");
        icon.classList.add("fa-copy");
      }, 1200);

    });
  });
}

function initDebugBadge() {
  const params = new URLSearchParams(window.location.search || "");
  if (!params.has("debug")) return;

  let badge = document.getElementById("devDebug");
  if (!badge) {
    badge = document.createElement("div");
    badge.id = "devDebug";
    document.body.appendChild(badge);
  }

  const update = () => {
    const w = window.innerWidth || 0;
    const h = window.innerHeight || 0;
    const dpr = window.devicePixelRatio || 1;
    const theme = document.body.getAttribute("data-theme") || "dark";
    const active = document.querySelector("main section:not(.hide)")?.id || "—";
    const sticky = document.getElementById("invStickyBar")?.classList.contains("isStuck")
      ? "stuck"
      : "free";
    badge.textContent = `${w}x${h} @${dpr} | theme:${theme} | tab:${active} | sticky:${sticky}`;
  };

  update();
  window.addEventListener("resize", update, { passive: true });
  window.addEventListener("scroll", update, { passive: true });
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => setTimeout(update, 80));
  });
  document.getElementById("themeToggle")?.addEventListener("click", () => setTimeout(update, 80));
}
