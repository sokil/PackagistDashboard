import React from 'react';
import VendorPackageSearchFormContainer from '../containers/VendorPackageSearchFormContainer';
import VendorPackagesListContainer from '../containers/VendorPackagesListContainer.js'

class Layout extends React.Component {
    render() {
        return <div className="container">
            <VendorPackageSearchFormContainer/>
            <VendorPackagesListContainer/>
        </div>
    }
}

export default Layout;