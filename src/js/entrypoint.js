import React from 'react';
import ReactDOM from "react-dom";
import Layout from '../jsx/Layout.jsx';
import VendorPackagesList from '../jsx/VendorPackagesList.jsx';

ReactDOM.render(<Layout/>, document.getElementById('app'));
ReactDOM.render(<VendorPackagesList/>, document.getElementById('vendorPackagesContainer'));

