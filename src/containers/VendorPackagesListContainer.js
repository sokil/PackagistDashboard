import { connect } from 'react-redux';
import VendorPackagesList from '../components/VendorPackagesList.jsx';
import pick from 'lodash-es/pick';

// binding
const mapStateToProps = state => {
    if (!state.currentVendor && !(state.currentVendor in state.vendorPackageNames)) {
        return {
            vendorPackageNames: [],
            vendorPackageInfo: {}
        };
    }

    const vendorPackageNames = state.vendorPackageNames[state.currentVendor];

    const vendorPackageInfo = pick(
        state.vendorPackageInfo,
        state.vendorPackageNames[state.currentVendor]
    );

    const totalDownloadStat = state.totalDownloadStat;

    const totalStars = state.totalStars;

    // @todo: order "vendorPackageNames" by some direction using data from "vendorPackageInfo"

    return {
        vendorPackageNames,
        vendorPackageInfo,
        totalDownloadStat,
        totalStars
    }
};

const VendorPackagesListContainer = connect(mapStateToProps)(VendorPackagesList);

export default VendorPackagesListContainer;