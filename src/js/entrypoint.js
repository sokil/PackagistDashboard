import React from 'react';
import ReactDOM from "react-dom";
import Layout from '../jsx/Layout.jsx';
import VendorPackagesList from '../jsx/VendorPackagesList.jsx';
import { createStore } from 'redux';
import { connect } from 'react-redux'

// render layout
ReactDOM.render(<Layout/>, document.getElementById('app'));

// initial store
const initialState = {
    vendorPackageNames: {},
    vendorPackageDownloadStats: {},
};

// store
let store = createStore(function(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case 'addVendorPackages':
            return {
                ...state,
                vendorPackages: {
                    ...state.vendorPackageNames,
                    [action.vendor]: action.packageNames
                }
            };
        case 'addVendorPackageDownloadStat':
            return {
                ...state,
                vendorPackageDownloadStats: {
                    ...state.vendorPackageDownloadStats,
                    [action.vendorPackageName]: {
                        'daily': 10,
                        'monthly': 20,
                        'total': 30,
                    }
                }
            };
    }

    return state;
});

// fetch vendor packages
let vendor = 'sokil';

fetch("https://packagist.org/packages/list.json?vendor=" + vendor)
    .then(response => response.json())
    .then(response => {
        store.dispatch({
            type: 'addVendorPackages',
            vendor: vendor,
            packageNames: response.packageNames
        });
    });

// binding
const mapStateToProps = state => {
    return {
        vendorPackageNames: state.vendorPackageNames[vendor]
    }
};

const VendorPackagesListContainer = connect(mapStateToProps)(VendorPackagesList);

ReactDOM.render(
    <VendorPackagesListContainer/>,
    document.getElementById('vendorPackagesContainer')
);


