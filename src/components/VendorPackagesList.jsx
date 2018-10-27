import React from 'react';

class VendorPackagesList extends React.Component {
    render() {
        var packageElements = this.props.vendorPackageNames.map(vendorPackageName => {
            return <tr key={vendorPackageName}>
                <td>{vendorPackageName}</td>
                <td>{this.props.vendorPackageDownloadStats[vendorPackageName] ? this.props.vendorPackageDownloadStats[vendorPackageName].daily : 0}</td>
                <td>{this.props.vendorPackageDownloadStats[vendorPackageName] ? this.props.vendorPackageDownloadStats[vendorPackageName].monthly : 0}</td>
                <td>{this.props.vendorPackageDownloadStats[vendorPackageName] ? this.props.vendorPackageDownloadStats[vendorPackageName].total : 0}</td>
            </tr>;
        });

        return <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>Package</th>
                    <th>Daily Downloads</th>
                    <th>Monthly Downloads</th>
                    <th>Total Downloads</th>
                </tr>
            </thead>
            <tbody>
                {packageElements}
            </tbody>
        </table>
    }
}

export default VendorPackagesList;