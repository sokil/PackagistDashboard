import { connect } from 'react-redux';
import VendorPackagesList from '../components/VendorPackagesList.jsx';

// binding
const mapStateToProps = state => {
    return {
        vendorPackageNames: state.currentVendor && (state.currentVendor in state.vendorPackageNames)
            ? state.vendorPackageNames[state.currentVendor]
            : []
    }
};

const VendorPackagesListContainer = connect(mapStateToProps)(VendorPackagesList);

export default VendorPackagesListContainer;