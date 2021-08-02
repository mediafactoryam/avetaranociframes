const data_initial = [
    { "from": [39.705873, 46.830790], "to": [39.999929, 44.558301], "labels": ["Ավետարանոց", "Այգեստան"], "color": "#f1bf3c", "value": 3 },
    { "from": [39.705873, 46.830791], "to": [40.233687, 44.582067], "labels": [null, "Առինջ"], "color": "#f1bf3c", "value": 8 },
    { "from": [39.705873, 46.830792], "to": [39.940564, 46.831738], "labels": [null, "Ասկերան"], "color": "#f1bf3c", "value": 103 },
    { "from": [39.705873, 46.830793], "to": [39.927764, 46.709314], "labels": [null, "Աստղաշեն"], "color": "#f1bf3c", "value": 11 },
    { "from": [39.705873, 46.830794], "to": [39.855121, 44.694273], "labels": [null, "Արարատ"], "color": "#f1bf3c", "value": 8 },
    { "from": [39.705873, 46.830795], "to": [40.155553, 44.038848], "labels": [null, "Արմավիր"], "color": "#f1bf3c", "value": 33 },
    { "from": [39.705873, 46.830796], "to": [40.351325, 45.127267], "labels": [null, "Գավառ"], "color": "#f1bf3c", "value": 11 },
    { "from": [39.705873, 46.830797], "to": [40.147913, 44.431678], "labels": [null, "Գեղանիստ"], "color": "#f1bf3c", "value": 4 },
    { "from": [39.705873, 46.830798], "to": [40.792903, 43.846497], "labels": [null, "Գյումրի"], "color": "#f1bf3c", "value": 7 },
    { "from": [39.705873, 46.830799], "to": [39.896664, 46.700331], "labels": [null, "Դահիրով"], "color": "#f1bf3c", "value": 4 },
    { "from": [39.705873, 46.830800], "to": [39.799959, 46.782397], "labels": [null, "Դաշուշեն"], "color": "#f1bf3c", "value": 8 },
    { "from": [39.705873, 46.830801], "to": [40.187202, 44.515209], "labels": [null, "Երևան"], "color": "#f1bf3c", "value": 113 },
    { "from": [39.705873, 46.830802], "to": [40.163263, 44.293593], "labels": [null, "Էջմիածին"], "color": "#f1bf3c", "value": 6 },
    { "from": [39.705873, 46.830803], "to": [39.913255, 46.794305], "labels": [null, "Իվանյան"], "color": "#f1bf3c", "value": 24 },
    { "from": [39.705873, 46.830804], "to": [40.125566, 43.965573], "labels": [null, "Լենուղի"], "color": "#f1bf3c", "value": 7 },
    { "from": [39.705873, 46.830805], "to": [40.937059, 45.15129], "labels": [null, "Լուսաձոր"], "color": "#f1bf3c", "value": 6 },
    { "from": [39.705873, 46.830806], "to": [39.89298661936179, 46.73111096551696], "labels": [null, "Լուսաձոր, Ասկերան"], "color": "#f1bf3c", "value": 1 },
    { "from": [39.705873, 46.830807], "to": [39.970271, 46.817401], "labels": [null, "Խնաբադ"], "color": "#f1bf3c", "value": 9 },
    { "from": [39.705873, 46.830808], "to": [39.605523, 46.393028], "labels": [null, "Խնածախ"], "color": "#f1bf3c", "value": 25 },
    { "from": [39.705873, 46.830809], "to": [40.531743, 44.715976], "labels": [null, "Ծաղկաձոր"], "color": "#f1bf3c", "value": 31 },
    { "from": [39.705873, 46.830810], "to": [40.061575, 46.672903], "labels": [null, "Կիչան"], "color": "#f1bf3c", "value": 1 },
    { "from": [39.705873, 46.830811], "to": [40.804857, 43.756309], "labels": [null, "Հայկավան"], "color": "#f1bf3c", "value": 4 },
    { "from": [39.705873, 46.830812], "to": [35.76962, 51.432271], "labels": [null, "Հասանաբադ"], "color": "#f1bf3c", "value": 10 },
    { "from": [39.705873, 46.830813], "to": [39.916479, 46.762027], "labels": [null, "Հովսեփավան"], "color": "#f1bf3c", "value": 21 },
    { "from": [39.705873, 46.830814], "to": [39.747488, 47.030325], "labels": [null, "Ճարտար"], "color": "#f1bf3c", "value": 1 },
    { "from": [39.705873, 46.830815], "to": [40.211601, 46.823706], "labels": [null, "Մարտակերտ"], "color": "#f1bf3c", "value": 12 },
    { "from": [39.705873, 46.830816], "to": [40.120476, 45.286299], "labels": [null, "Մարտունի"], "color": "#f1bf3c", "value": 7 },
    { "from": [39.705873, 46.830817], "to": [40.14275, 44.124167], "labels": [null, "Մեծամոր"], "color": "#f1bf3c", "value": 7 },
    { "from": [39.705873, 46.830818], "to": [40.168869, 44.494004], "labels": [null, "Նորագյուղ"], "color": "#f1bf3c", "value": 6 },
    { "from": [39.705873, 46.830819], "to": [55.755826, 37.6173], "labels": [null, "ՌԴ"], "color": "#f1bf3c", "value": 56 },
    { "from": [39.705873, 46.830820], "to": [39.713716, 47.008121], "labels": [null, "Սոս"], "color": "#f1bf3c", "value": 1 },
    { "from": [39.705873, 46.830821], "to": [39.826528, 46.765575], "labels": [null, "Ստեփանակերտ"], "color": "#f1bf3c", "value": 600 },
    { "from": [39.705873, 46.830822], "to": [40.05372, 46.545158], "labels": [null, "Վանք"], "color": "#f1bf3c", "value": 4 }
]

//const mapCenter = [39.752119, 46.344273] //
const mapCenter = [39.705873, 46.830790] //Avetaranoc

const tileServerURI =  'https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
//const tileServerURI = "http://tiles.openseamap.org/seamark/${z}/${x}/${y}.png"

const lrmap = L.map('map').setView(mapCenter, 10);

L.tileLayer(tileServerURI).addTo(lrmap);
const data = transformData(data_initial)
let migrationLayer = initMigrationLayer(data)


lrmap.on('zoomend', function() {
    migrationLayer.destroy()
    migrationLayer = initMigrationLayer(data)
});

lrmap.on('dragend', function() {
    migrationLayer.destroy()
    migrationLayer = initMigrationLayer(data)
});


function transformData(data) {
    return data.map(item => { return { ...item, from: switchCorrdinates(item.from), to: switchCorrdinates(item.to), labels: titleToValue(item) } });
}

function initMigrationLayer(data) {
    const migrationLayer = new L.migrationLayer({
        map: lrmap,
        data: data,
        pulseRadius: 1,
        pulseBorderWidth: 1,
        arcWidth: 1,
        arcLabel: true,
        arcLabelFont: '15px sans-serif',
        maxWidth: 0
    }
    );

    migrationLayer.addTo(lrmap);
    return migrationLayer
}


function switchCorrdinates(cordinate) {
    const c1 = cordinate[0]
    const c2 = cordinate[1]
    return [c2, c1]
}

function titleToValue(item) {
    return item.labels = [null, item.value]
}
