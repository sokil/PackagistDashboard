import React from 'react';
import ReactDOM from "react-dom";
import VendorPackageSearchForm from './VendorPackageSearchForm.jsx';
import VendorPackagesList from './VendorPackagesList.jsx';

class Layout extends React.Component {
    render() {
        return <div className="container">
            <VendorPackageSearchForm/>
            <div id="vendorPackagesContainer"></div>
        </div>
    }
}

ReactDOM.render(<Layout/>, document.getElementById('app'));
ReactDOM.render(<VendorPackagesList/>, document.getElementById('vendorPackagesContainer'));