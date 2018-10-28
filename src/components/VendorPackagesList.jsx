import React from 'react';

class VendorPackagesList extends React.Component {
    render() {
        const packageElements = this.props.vendorPackageNames.map(vendorPackageName => {
            return <tr key={vendorPackageName}>
                <td><a href={"https://repo.packagist.org/packages/" + vendorPackageName}>{vendorPackageName}</a></td>
                <td>{this.props.vendorPackageInfo[vendorPackageName] ? this.props.vendorPackageInfo[vendorPackageName].downloads.daily : 0}</td>
                <td>{this.props.vendorPackageInfo[vendorPackageName] ? this.props.vendorPackageInfo[vendorPackageName].downloads.monthly : 0}</td>
                <td>{this.props.vendorPackageInfo[vendorPackageName] ? this.props.vendorPackageInfo[vendorPackageName].downloads.total : 0}</td>
                <td>{this.props.vendorPackageInfo[vendorPackageName] ? this.props.vendorPackageInfo[vendorPackageName].stars : 0}</td>
            </tr>;
        });

        return <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>Package</th>
                    <th>Daily Downloads</th>
                    <th>Monthly Downloads</th>
                    <th>Total Downloads</th>
                    <th>Stars</th>
                </tr>
            </thead>
            <tbody>
                {packageElements}
            </tbody>
        </table>
    }
}

export default VendorPackagesList;