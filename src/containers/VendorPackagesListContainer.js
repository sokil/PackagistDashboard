import { connect } from 'react-redux';
import VendorPackagesList from '../components/VendorPackagesList.jsx';
import pick from 'lodash-es/pick';

// binding
const mapStateToProps = state => {
    if (!state.currentVendor && !(state.currentVendor in state.vendorPackageNames)) {
        return {
            vendorPackageNames: [],
            vendorPackageDownloadStats: {}
        };
    }

    return {
        vendorPackageNames: state.vendorPackageNames[state.currentVendor],
        vendorPackageDownloadStats: pick(
            state.vendorPackageDownloadStats,
            state.vendorPackageNames[state.currentVendor]
        )
    }
};

const VendorPackagesListContainer = connect(mapStateToProps)(VendorPackagesList);

export default VendorPackagesListContainer;