import React from 'react';
import ReactDOM from "react-dom";
import Layout from '../components/Layout.jsx';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchVendorPackageNames } from './packagistApi';

// initial store
const initialState = {
    currentVendor: null,
    vendorPackageNames: {},
    vendorPackageInfo: {},
    totalDownloadStat: {
        'daily': 0,
        'monthly': 0,
        'total': 0,
    },
    totalStars: 0
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
            const newState = {
                ...state,
                vendorPackageInfo: {
                    ...state.vendorPackageInfo,
                    [action.vendorPackageName]: {
                        'downloads': {
                            'daily': action.downloads.daily,
                            'monthly': action.downloads.monthly,
                            'total': action.downloads.total,
                        },
                        'lastRelease': {
                            'version': action.lastRelease.version
                        },
                        'stars': action.stars
                    }
                },
                totalDownloadStat: {
                    'daily': state.totalDownloadStat.daily + action.downloads.daily,
                    'monthly': state.totalDownloadStat.monthly + action.downloads.monthly,
                    'total': state.totalDownloadStat.total + action.downloads.total,
                },
                totalStars: state.totalStars + action.stars
            };

            return newState;
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

// load initial vendor from hash
if (location.hash) {
    (function() {
        const vendor = location.hash.substr(1);
        store.dispatch(fetchVendorPackageNames(vendor))
            .then(() => {
                store.dispatch({
                    type: 'changeVendor',
                    vendor: vendor
                });
            });
    })();
}






