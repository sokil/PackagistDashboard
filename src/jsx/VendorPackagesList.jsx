import React from 'react';

class VendorPackagesList extends React.Component {
    render() {
        var packageElements = this.props.packages.map(vendorPackage => {
            return <tr key={vendorPackage.name}>
                <td>{vendorPackage.name}</td>
                <td>{vendorPackage.downloadStat.daily}</td>
                <td>{vendorPackage.downloadStat.monthly}</td>
                <td>{vendorPackage.downloadStat.total}</td>
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