# Static HTML Generator

>Generate static HTML for projects using JSON/CSVs as a data source.

## Getting Started

This project requires [node.js](https://nodejs.org/)

Run `npm install` after cloning, and then run `node index.js` followed by `grunt watch`.

## CSVs and JSON

Run `grunt csv2json:_filename_` where `_filename_` is the name of a CSV file located in the root `/csv` folder. A JSON file will be generated and placed in the `/json` folder in the root.

## Templating

This project uses [Express](http://expressjs.com/) to power a [Nunjucks](https://mozilla.github.io/nunjucks/) templating engine. See Nunjucks [documentation](https://mozilla.github.io/nunjucks/templating.html) to see how to work with Nunjucks.

The `/index.js` file in the root houses Express configuration such as routes to views which are housed in the `/views` folder. This is also where you specify the JSON file that will be passed to the view.

Fin.