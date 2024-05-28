fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
   // write the function body
}

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1); // =>
}

function run_visualization(data) {
    sortByCountryPopulation(data);
    const top30Countries = data.slice(0, 30); // 30 premiers pays

    // Créez des tableaux pour stocker les noms des pays et leur population
    const countries = [];
    const populations = [];

    // Parcourez les données pour extraire les noms des pays et leur population
    top30Countries.forEach((item) => {
        countries.push(item.country);
        populations.push(item.population);
    });

    // Créez l'histogramme
    const dataTrace = {
        x: countries,
        y: populations,
        type: 'bar'
    };

    const layout = {
        title: 'Top 30 pays par population',
        xaxis: {
            title: 'Pays'
        },
        yaxis: {
            title: 'Population'
        }
    };

    Plotly.newPlot('data-viz', [dataTrace], layout);
}

