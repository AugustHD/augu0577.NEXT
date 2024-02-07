const fs = require('fs');
const csv = require('csv-parser');
const yaml = require('js-yaml');
const xml2js = require('xml2js');

function parseTxt(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    // Your parsing logic for TXT file goes here
    console.log(content);
}

function parseCsv(filePath) {
    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
            // Your parsing logic for CSV file goes here
            console.log(row);
        });
}

function parseYaml(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const data = yaml.load(content);  // Change from safeLoad to load
    // Your parsing logic for YAML file goes here
    console.log(data);
}

function parseXml(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    xml2js.parseString(content, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        // Your parsing logic for XML file goes here
        console.log(result);
    });
}

function parseJson(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);
    // Your parsing logic for JSON file goes here
    console.log(data);
}

// Usage
parseTxt('C:\\Users\\augu0577.NEXT\\Desktop\\bonaza\\scripts\\TeeExTee.txt');
parseCsv('C:\\Users\\augu0577.NEXT\\Desktop\\bonaza\\scripts\\SeeEsVee.csv');
parseYaml('C:\\Users\\augu0577.NEXT\\Desktop\\bonaza\\scripts\\YamEl.yaml');
parseXml('C:\\Users\\augu0577.NEXT\\Desktop\\bonaza\\scripts\\ExEmEl.xml');
parseJson('C:\\Users\\augu0577.NEXT\\Desktop\\bonaza\\scripts\\JaySon.json');
