import React from 'react';
import ReactDOM from "react-dom";
import Layout from '../jsx/Layout.jsx';
import VendorPackagesList from '../jsx/VendorPackagesList.jsx';

ReactDOM.render(<Layout/>, document.getElementById('app'));

const packages = [
    {
        name: 'sokil/php-mongo',
        downloadStat: {
            'daily': 10,
            'monthly': 20,
            'total': 30,
        }
    }
];

ReactDOM.render(
    <VendorPackagesList packages={packages}/>,
    document.getElementById('vendorPackagesContainer')
);

