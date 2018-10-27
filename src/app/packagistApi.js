export function fetchVendorPackageNames(vendor) {
    return function(dispatch, getState) {

        // check if stat already loaded
        const state = getState();
        if (state.vendorPackageNames[vendor]) {
            return Promise.resolve();
        }

        // load stat
        return fetch("https://packagist.org/packages/list.json?vendor=" + vendor)
            .then(response => response.json())
            .then(response => {
                // change state of vendor package names
                dispatch({
                    type: 'addVendorPackages',
                    vendor: vendor,
                    packageNames: response.packageNames
                });

                // change state of package stats
                response.packageNames.map(packageName => {
                    fetch("https://packagist.org/packages/" + packageName + ".json")
                        .then(response => response.json())
                        .then(response => {
                            dispatch({
                                type: 'addVendorPackageDownloadStat',
                                vendorPackageName: packageName,
                                downloads: {
                                    daily: response.package.downloads.daily,
                                    monthly: response.package.downloads.monthly,
                                    total: response.package.downloads.total,
                                }
                            })
                        });
                });
            });
    }
}
