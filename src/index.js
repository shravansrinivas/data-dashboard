import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/Main';
import 'jquery';
import 'popper.js';
//import Sunburst from 'react-sunburst-d3-v4';
import 'bootstrap';
// import { AgGridReact } from 'ag-grid-react';

// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';



// render(<App />, document.getElementById('root'));

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
