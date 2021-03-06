const dataSource = {
  chart: {
    caption: "2020 թվականի արցախյան պատերազմի հետևանքով Ավետարանոց գյուղի բնակչության միգրացիան",
    theme: "fusion",

    orientation: "vertical",
    linkalpha: 30,
    linkhoveralpha: 60,
    nodelabelposition: "start",
    legendItemFontSize: 12,
    legendNumColumns: 5,
    legendNumRows: 10,
    showNodeLabels: false
  },
  nodes: [
    { label: 'Ավետարանոց' },
    { label: 'Այգեստան' },
    { label: 'Առինջ' },
    { label: 'Ասկերան' },
    { label: 'Աստղաշեն' },
    { label: 'Արարատ' },
    { label: 'Արմավիր' },
    { label: 'Գավառ' },
    { label: 'Գեղանիստ' },
    { label: 'Գյումրի' },
    { label: 'Դահիրով' },
    { label: 'Դաշուշեն' },
    { label: 'Երևան' },
    { label: 'Էջմիածին' },
    { label: 'Իվանյան' },
    { label: 'Լենուղի' },
    { label: 'Լուսաձոր' },
    { label: 'Լուսաձոր, Ասկերան' },
    { label: 'Խնաբադ' },
    { label: 'Խնածախ' },
    { label: 'Ծաղկաձոր' },
    { label: 'Կիչան' },
    { label: 'Հայկավան' },
    { label: 'Հասանաբադ' },
    { label: 'Հովսեփավան' },
    { label: 'Ճարտար' },
    { label: 'Մարտակերտ' },
    { label: 'Մարտունի' },
    { label: 'Մեծամոր' },
    { label: 'Նորագյուղ' },
    { label: 'ՌԴ' },
    { label: 'Սոս' },
    { label: 'Ստեփանակերտ' },
    { label: 'Վանք' },
  ],

  links: [
    { from: 'Ավետարանոց', to: 'Այգեստան', value: 3 },
    { from: 'Ավետարանոց', to: 'Առինջ', value: 8 },
    { from: 'Ավետարանոց', to: 'Ասկերան', value: 103 },
    { from: 'Ավետարանոց', to: 'Աստղաշեն', value: 11 },
    { from: 'Ավետարանոց', to: 'Արարատ', value: 8 },
    { from: 'Ավետարանոց', to: 'Արմավիր', value: 33 },
    { from: 'Ավետարանոց', to: 'Գավառ', value: 11 },
    { from: 'Ավետարանոց', to: 'Գեղանիստ', value: 4 },
    { from: 'Ավետարանոց', to: 'Գյումրի', value: 7 },
    { from: 'Ավետարանոց', to: 'Դահիրով', value: 4 },
    { from: 'Ավետարանոց', to: 'Դաշուշեն', value: 8 },
    { from: 'Ավետարանոց', to: 'Երևան', value: 113 },
    { from: 'Ավետարանոց', to: 'Էջմիածին', value: 6 },
    { from: 'Ավետարանոց', to: 'Իվանյան', value: 24 },
    { from: 'Ավետարանոց', to: 'Լենուղի', value: 7 },
    { from: 'Ավետարանոց', to: 'Լուսաձոր', value: 6 },
    { from: 'Ավետարանոց', to: 'Լուսաձոր, Ասկերան', value: 1 },
    { from: 'Ավետարանոց', to: 'Խնաբադ', value: 9 },
    { from: 'Ավետարանոց', to: 'Խնածախ', value: 25 },
    { from: 'Ավետարանոց', to: 'Ծաղկաձոր', value: 31 },
    { from: 'Ավետարանոց', to: 'Կիչան', value: 1 },
    { from: 'Ավետարանոց', to: 'Հայկավան', value: 4 },
    { from: 'Ավետարանոց', to: 'Հասանաբադ', value: 10 },
    { from: 'Ավետարանոց', to: 'Հովսեփավան', value: 21 },
    { from: 'Ավետարանոց', to: 'Ճարտար', value: 1 },
    { from: 'Ավետարանոց', to: 'Մարտակերտ', value: 12 },
    { from: 'Ավետարանոց', to: 'Մարտունի', value: 7 },
    { from: 'Ավետարանոց', to: 'Մեծամոր', value: 7 },
    { from: 'Ավետարանոց', to: 'Նորագյուղ', value: 6 },
    { from: 'Ավետարանոց', to: 'ՌԴ', value: 56 },
    { from: 'Ավետարանոց', to: 'Սոս', value: 1 },
    { from: 'Ավետարանոց', to: 'Ստեփանակերտ', value: 600 },
    { from: 'Ավետարանոց', to: 'Վանք', value: 4 },
  ]
};

FusionCharts.ready(function () {
  const myChart = new FusionCharts({
    type: "chord",
    renderAt: "chart-container",
    width: "100%",
    height: "490",
    dataFormat: "json",
    dataSource
  }).render();
});