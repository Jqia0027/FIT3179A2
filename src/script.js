const specVis1 = "https://raw.githubusercontent.com/Jqia0027/FIT3179A2/main/src/map_state.json";
const specVis2 = "https://raw.githubusercontent.com/Jqia0027/FIT3179A2/main/src/line_combined.json";
const specVis3 = "https://raw.githubusercontent.com/Jqia0027/FIT3179A2/main/src/bar_rainfall.json";
const specVis4 = "https://raw.githubusercontent.com/Jqia0027/FIT3179A2/main/src/pie_chart.json";

const caption1 =
	"The temperature varies from different state. From north to south, the Northern Territory has highest average temperature, <br>which is higher than 30 Celsius degree over year. The Tsamania has lowest average temperature over year, which reaches<br> 13 Celsius degree in winter. The eastern cost is also warmer than weatern cost in Australia. ";
const caption2 =
	"Line chart is used to show how temperature and humidity changes by month in cities of Australis. We also show these values<br> in rainy days non-rainy days. In the most of cities in Australia, rainy means higher humidity and lower temperature.";
const caption3 =
	"The bar chart shows the the total rainfall in these cities. The chart illustrate that cities in northern Australia such as<br> Cairns and Darwin has the largest total rainfall while cities in central Australia has the lowest.";
const caption4 =
	"It is also interesting that wind direction may have relationship with rainfall, we can observe that in different cities, specific wind direction <br>may menas higher rainfall. For example, sydney usually gets humid air in the south from the Pacific, it can cause rainy.";

const source1 =
	"Data Source: <a href=\"https://www.kaggle.com/datasets/arunavakrchakraborty/australia-weather-data\"> Kaggle: Australia Weather Data</a>";
const source2 =
	"Data Source: <a href=\"https://www.kaggle.com/datasets/arunavakrchakraborty/australia-weather-data\"> Kaggle: Australia Weather Data</a>";
const source3 =
	"Data Source: <a href=\"https://www.kaggle.com/datasets/arunavakrchakraborty/australia-weather-data\"> Kaggle: Australia Weather Data</a>";
const source4 =
	"Data Source: <a href=\"https://www.kaggle.com/datasets/arunavakrchakraborty/australia-weather-data\"> Kaggle: Australia Weather Data</a>";

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

const title = document.getElementById("title");
const graph = document.getElementById("graph");
const content = document.getElementById("content");
const menu = document.getElementById("menu");
const data = document.getElementById("data");
const colGraph = document.getElementById("col-graph");
const caption = document.getElementById("caption");
const source = document.getElementById("source");

option1.addEventListener("click", () => {
	colGraph.classList.add("col-graph");
	graph.classList.add("graph");
	content.classList.add("height-auto");
	menu.classList.add("height-auto");
	caption.classList.add("caption");
	source.classList.add("caption");
	caption.innerHTML = caption1;
	source.innerHTML = source1;
	vegaEmbed("#graph", specVis1, {"actions": false}).then(function(result){
		// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
	  }).catch(console.error);
});

option2.addEventListener("click", () => {
	colGraph.classList.add("col-graph");
	graph.classList.add("graph");
	graph.classList.add("graph1");

	content.classList.add("height-auto");
	menu.classList.add("height-auto");
	caption.classList.add("caption");
	source.classList.add("caption");
	caption.innerHTML = caption2;
	source.innerHTML = source2;

	vegaEmbed("#graph", specVis2, {"actions": false}).then(function(result){
		// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
	  }).catch(console.error);

	vegaEmbed("#graph1", specVis2_1, {"actions": false}).then(function(result){
		// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
	  }).catch(console.error);
});

option3.addEventListener("click", () => {
	colGraph.classList.add("col-graph");
	graph.classList.add("graph");
	content.classList.add("height-auto");
	menu.classList.add("height-auto");
	caption.classList.add("caption");
	source.classList.add("caption");
	caption.innerHTML = caption3;
	source.innerHTML = source3;
	vegaEmbed("#graph", specVis3, {"actions": false}).then(function(result){
		// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
	  }).catch(console.error);
});

option4.addEventListener("click", () => {
	colGraph.classList.add("col-graph");
	graph.classList.add("graph");
	content.classList.add("height-auto");
	menu.classList.add("height-auto");
	caption.classList.add("caption");
	source.classList.add("caption");
	caption.innerHTML = caption4;
	source.innerHTML = source4;
	vegaEmbed("#graph", specVis4, {"actions": false}).then(function(result){
		// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
	  }).catch(console.error);
});