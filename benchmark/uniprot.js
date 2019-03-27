const BenchmarkDatasource = require('./datasource');

const operation = 'search';
const datasource = 'uniprot';

let list = [
  { operation, geneName: 'tp53' },
  { operation, geneName: 'mdm2' }
];

BenchmarkDatasource( datasource, list );
