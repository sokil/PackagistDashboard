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
                <td>{this.props.vendorPackageInfo[vendorPackageName] ? this.props.vendorPackageInfo[vendorPackageName].lastRelease.version : ''}</td>
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
                    <th>Last release</th>
                </tr>
            </thead>
            <tbody>
                {packageElements}
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td>{this.props.totalDownloadStat ? this.props.totalDownloadStat.daily : 0}</td>
                    <td>{this.props.totalDownloadStat ? this.props.totalDownloadStat.monthly : 0}</td>
                    <td>{this.props.totalDownloadStat ? this.props.totalDownloadStat.total : 0}</td>
                    <td>{this.props.totalStars ? this.props.totalStars : 0}</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    }
}

export default VendorPackagesList;