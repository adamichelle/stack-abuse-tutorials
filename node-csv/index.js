// (async function(){
//   // Read the content
//   const content = await fs.readFile(__dirname+'/sample-csv.csv')
//   // Parse the CSV content
//   const records = parse(content, {columns: true})
//   // Print records to the console
//   records.map( record => console.log(record) )
//   // Write a file with one JSON per line for each record
//   // json = records.map( JSON.stringify ).join('\n')
//   // fs.writeFile(`${os.tmpdir()}/output.csv`, json)
// })()

var fs = require('fs').promises;
var parse = require('csv-parse/lib/sync');
(async function () {
  const fileContent = await fs.readFile(__dirname+'/chart-of-accounts.csv');
  const records = parse(fileContent, {columns: true});
  console.log(records)
})();

// var fs = require('fs');
// var parse = require('csv-parse');

// var parser = parse({columns: true}, function (err, records) {
//   console.log(records);
// });

// fs.createReadStream(__dirname+'/chart-of-accounts.csv').pipe(parser);

var someData = [
  {
    "Country": "Nigeria",
    "Population": "200m",
    "Continent": "Africa",
    "Official Language(s)": "English"
  },
  {
    "Country": "India",
    "Population": "1b",
    "Continent": "Asia",
    "Official Language(s)": "Hindi, English"
  },
  {
    "Country": "United States of America",
    "Population": "328m",
    "Continent": "North America",
    "Official Language(s)": "English"
  },
  {
    "Country": "United Kingdom",
    "Population": "66m",
    "Continent": "Europe",
    "Official Language(s)": "English"
  },
  {
    "Country": "Brazil",
    "Population": "209m",
    "Continent": "South America",
    "Official Language(s)": "Portugese"
  }
]


const stringify = require('csv-stringify')
stringify(someData, {
  header: true
}, function (err, output) {
  fs.writeFile(__dirname+'/someData.csv', output);
})
