export function fetchVendorPackageNames(vendor) {
    return function(dispatch) {
        return fetch("https://packagist.org/packages/list.json?vendor=" + vendor)
            .then(response => response.json())
            .then(response => {
                dispatch({
                    type: 'addVendorPackages',
                    vendor: vendor,
                    packageNames: response.packageNames
                });
            });
    }
}
