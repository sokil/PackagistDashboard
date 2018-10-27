import React from 'react';
import VendorPackageSearchForm from './VendorPackageSearchForm.jsx';
import VendorPackagesListContainer from '../containers/VendorPackagesListContainer.js'

class Layout extends React.Component {
    render() {
        return <div className="container">
            <VendorPackageSearchForm/>
            <VendorPackagesListContainer/>
        </div>
    }
}

export default Layout;