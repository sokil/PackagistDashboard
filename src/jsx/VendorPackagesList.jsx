import React from 'react';

class VendorPackagesList extends React.Component {
    render() {
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
                <tr>
                    <td>sokil/php-mongo</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
    }
}

export default VendorPackagesList;