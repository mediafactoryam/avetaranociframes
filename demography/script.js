am4core.useTheme(am4themes_animated);
let mainContainer = am4core.create("chartdiv", am4core.Container);
mainContainer.width = am4core.percent(100);
mainContainer.height = am4core.percent(100);
mainContainer.layout = "horizontal";

let usData = [
  { 'age': '0-ից 10', 'male': 84, 'female': 100 },
  { 'age': '10-ից 20', 'male': 78, 'female': 84 },
  { 'age': '20-ից 30', 'male': 87, 'female': 100 },
  { 'age': '30-ից 40', 'male': 86, 'female': 79 },
  { 'age': '40-ից 50', 'male': 77, 'female': 57 },
  { 'age': '50-ից 60', 'male': 78, 'female': 74 },
  { 'age': '60-ից 70', 'male': 40, 'female': 44 },
  { 'age': '70-ից 80', 'male': 27, 'female': 31 },
  { 'age': '80-ից 90', 'male': 9, 'female': 8 },
  { 'age': '90-ից 100', 'male': 1, 'female': 8 },
];

let maleChart = mainContainer.createChild(am4charts.XYChart);
maleChart.paddingRight = 0;
maleChart.data = JSON.parse(JSON.stringify(usData));

let maleCategoryAxis = maleChart.yAxes.push(new am4charts.CategoryAxis());
maleCategoryAxis.dataFields.category = "age";
maleCategoryAxis.renderer.grid.template.location = 0;
maleCategoryAxis.renderer.minGridDistance = 15;

let maleValueAxis = maleChart.xAxes.push(new am4charts.ValueAxis());
maleValueAxis.renderer.inversed = true;
maleValueAxis.min = 0;
maleValueAxis.max = 20;
maleValueAxis.strictMinMax = true;

maleValueAxis.numberFormatter = new am4core.NumberFormatter();
maleValueAxis.numberFormatter.numberFormat = "#.#'%'";

let maleSeries = maleChart.series.push(new am4charts.ColumnSeries());
maleSeries.dataFields.valueX = "male";
maleSeries.dataFields.valueXShow = "percent";
maleSeries.calculatePercent = true;
maleSeries.dataFields.categoryY = "age";
maleSeries.interpolationDuration = 100;
maleSeries.columns.template.tooltipText = "  {valueX} տղամարդ ({valueX.percent.formatNumber('#.0')}%)";
maleSeries.sequencedInterpolation = true;


let femaleChart = mainContainer.createChild(am4charts.XYChart);
femaleChart.paddingLeft = 0;
femaleChart.data = JSON.parse(JSON.stringify(usData));

// Create axes
let femaleCategoryAxis = femaleChart.yAxes.push(new am4charts.CategoryAxis());
femaleCategoryAxis.renderer.opposite = true;
femaleCategoryAxis.dataFields.category = "age";
femaleCategoryAxis.renderer.grid.template.location = 0;
femaleCategoryAxis.renderer.minGridDistance = 100;

let femaleValueAxis = femaleChart.xAxes.push(new am4charts.ValueAxis());
femaleValueAxis.min = 0;
femaleValueAxis.max = 20;
femaleValueAxis.strictMinMax = true;
femaleValueAxis.numberFormatter = new am4core.NumberFormatter();
femaleValueAxis.numberFormatter.numberFormat = "#.#'%'";
femaleValueAxis.renderer.minLabelPosition = 0.01;

// Create series
let femaleSeries = femaleChart.series.push(new am4charts.ColumnSeries());
femaleSeries.dataFields.valueX = "female";
femaleSeries.dataFields.valueXShow = "percent";
femaleSeries.calculatePercent = true;
femaleSeries.fill = femaleChart.colors.getIndex(4);
femaleSeries.stroke = femaleSeries.fill;
femaleSeries.columns.template.tooltipText = " {valueX} կին ({valueX.percent.formatNumber('#.0')}%)";
femaleSeries.dataFields.categoryY = "age";
femaleSeries.interpolationDuration = 10;