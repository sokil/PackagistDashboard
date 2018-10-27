import React from 'react';
import ReactDOM from "react-dom";
import Layout from '../components/Layout.jsx';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

// initial store
const initialState = {
    currentVendor: null,
    vendorPackageNames: {},
    vendorPackageDownloadStats: {},
};

// store
let store = createStore(function(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case 'changeVendor':
            return {
                ...state,
                currentVendor: action.vendor
            };
        case 'addVendorPackages':
            return {
                ...state,
                vendorPackageNames: {
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

// render layout
ReactDOM.render(
    <Provider store={store}>
        <Layout/>
    </Provider>,
    document.getElementById('app')
);

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

store.dispatch({
    type: 'changeVendor',
    vendor: vendor,
});






