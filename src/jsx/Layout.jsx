import React from 'react';
import VendorPackageSearchForm from './VendorPackageSearchForm.jsx';

class Layout extends React.Component {
    render() {
        return <div className="container">
            <VendorPackageSearchForm/>
            <div id="vendorPackagesContainer"/>
        </div>
    }
}

export default Layout;