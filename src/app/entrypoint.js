import React from 'react';
import ReactDOM from "react-dom";
import Layout from '../components/Layout.jsx';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

// initial store
const initialState = {
    currentVendor: null,
    vendorPackageNames: {},
    vendorPackageDownloadStats: {},
};

const reducer = function(state, action) {
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
                        'daily': action.downloads.daily,
                        'monthly': action.downloads.monthly,
                        'total': action.downloads.total,
                    }
                }
            };
    }

    return state;
};

// store
let store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware
        ),
    )
);

// render layout
ReactDOM.render(
    <Provider store={store}>
        <Layout/>
    </Provider>,
    document.getElementById('app')
);






