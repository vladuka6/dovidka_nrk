/* ===========================
   NRK app (v2026) — app.js
   Повністю оновлений JS під:
   - Вкладка "Довідник" (замість "Паспорт")
   - Автокомпліт пошуку (підказки під полем, без select)
   - Автозаповнення полів характеристик + фото
   - KPI зверху замість ID: грн/кг та грн/(кг·км)
   - Підготовка під розширення Оцінки/Чек-листа
   =========================== */

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
    photo: "img/D-21.png",
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
    photo: "",
  },
];

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

  // ТУТ ВАЖЛИВО: КЛІРЕНС / КУТ ПІДЙОМУ / КУТ КРЕНУ
  // Ми ставимо чітко:
  // clearance -> кліренс (мм)
  // climb     -> кут підйому (°)
  // tilt      -> кут крену (°)
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

  // фото + підписи
  setPhoto(p);
  if ($("photoModel")) $("photoModel").textContent = p.model;
  if ($("photoMaker")) $("photoMaker").textContent = p.maker;

  renderKPI();
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
        <input id="s_${esc(c.id)}" type="number" min="0" max="5" placeholder="0..5"/>

        <label>Коментар / зауваження</label>
        <textarea id="c_${esc(c.id)}" placeholder="Що не підтверджено, що потрібно доопрацювати..."></textarea>
      </div>
      `
    );
  });

  document.querySelectorAll("[data-help]").forEach((btn) => {
    btn.addEventListener("click", (e) => openHelp(e.currentTarget.dataset.help));
  });

  CRITERIA.forEach((c) => {
    const el = $("s_" + c.id);
    if (el) el.addEventListener("input", () => calcFinal(false));
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
    const v = $("s_" + c.id)?.value;
    s[c.id] = v === "" ? null : Number(v);
  });
  return s;
}
function validateScoring(sc) {
  const errors = [];
  CRITERIA.forEach((c) => {
    const v = sc[c.id];
    if (v === null || Number.isNaN(v)) errors.push(`• ${c.name} — не заповнено`);
    else if (v < 0 || v > 5) errors.push(`• ${c.name} — значення поза діапазоном 0–5`);
  });
  return errors;
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

/* =========================================================
   INIT
========================================================= */
function init() {
  wireTabs();
  wireHelpModal();

  renderCriteria();
  renderChecklist();

  // KPI підтягується при зміні ключових полів
  ["price", "payloadNom", "rangeRoad"].forEach((id) => {
    const el = $(id);
    if (el) el.addEventListener("input", renderKPI);
  });

  // Автокомпліт
  wireAutocomplete();
    initCompare();   // <-- ОЦЕ ДОДАЙ
  // стартовий KPI
  renderKPI();
}

document.addEventListener("DOMContentLoaded", init);
