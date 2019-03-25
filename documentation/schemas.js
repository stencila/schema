/* eslint global-require: 0 */

import { fromJS } from 'immutable';

export default fromJS([
  // The "getting started" schema provides table-of-contents links
  // for the sections in src/client/introduction.js.  You are free
  // to customize or remove both the schema and the introduction component.
  require('./getting-started.json'),
  require('../dist/CreativeWork.schema.json'),
  require('../dist/Datatable.schema.json'),
  require('../dist/DatatableColumn.schema.json'),
  require('../dist/Document.schema.json'),
  require('../dist/Environment.schema.json'),
  require('../dist/file.schema.json'),
  require('../dist/Include.schema.json'),
  require('../dist/index.schema.json'),
  // require('../dist/json-schema-draft-07.schema.json'),
  require('../dist/name.schema.json'),
  require('../dist/Organization.schema.json'),
  require('../dist/Package.schema.json'),
  require('../dist/Person.schema.json'),
  require('../dist/Session.schema.json'),
  require('../dist/Sheet.schema.json'),
  require('../dist/Source.schema.json'),
  require('../dist/Table.schema.json'),
  require('../dist/TableCell.schema.json'),
  require('../dist/Text.schema.json'),
  require('../dist/Thing.schema.json'),
  require('../dist/url.schema.json')
]);
