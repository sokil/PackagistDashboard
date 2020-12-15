import { connect } from 'react-redux';
import { fetchVendorPackageNames } from '../app/packagistApi';
import VendorPackageSearchForm from '../components/VendorPackageSearchForm.jsx';

const mapStateToProps = undefined;

const mapDispatchToProps = dispatch => {
    return {
        showVendorPackages: (vendor) => {
            dispatch(fetchVendorPackageNames(vendor))
                .then(() => {
                    dispatch({
                        type: 'changeVendor',
                        vendor: vendor
                    });
                });
        }
    }
};

const VendorPackageSearchFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VendorPackageSearchForm);

export default VendorPackageSearchFormContainer;