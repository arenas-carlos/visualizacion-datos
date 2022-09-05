// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(casosConfirmados);
google.charts.setOnLoadCallback(atencionMedica);
google.charts.setOnLoadCallback(casosPositivos);
google.charts.setOnLoadCallback(mayoresCasos);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function casosConfirmados() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Hombres', 43],
        ['Mujeres', 57]
    ]);

    // Set chart options
    var options = {
        'title': 'CASOS CONFIRMADOS',
        'width': 341,
        'height': 300
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('confirmed_cases'));
    chart.draw(data, options);
}

function atencionMedica() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Ambulatorio', 89],
        ['Hospitalario', 11]
    ]);

    // Set chart options
    var options = {
        'title': 'Atencion Medica',
        'width': 341,
        'height': 300
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('medical_atention'));
    chart.draw(data, options);
}

function casosPositivos() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Class');
    data.addColumn('number', 'Percentage');
    data.addRows([
        ['Estables', 63],
        ['Grave', 30],
        ['Intubados', 7]
    ]);

    // Set chart options
    var options = {
        'title': 'Estado Actual de los casos positivos',
        'width': 341,
        'height': 300
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('positive_cases'));
    chart.draw(data, options);
}

function mayoresCasos() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Class');
    data.addColumn('number', 'hombres');
    data.addColumn('number', 'mujeres');
    data.addRows([
        ['CDMX', 69, 41],
        ['Jalisco', 44, 33],
        ['EDOMex', 34, 36],
        ['Nuevo Leon', 46, 18],
        ['Puebla', 28, 23]
    ]);

    // Set chart options
    var options = {
        'title': 'Estados con mayor numero de casos positivos por genero',
        'width': 1024,
        'height': 400
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('top_cases'));
    chart.draw(data, options);
}