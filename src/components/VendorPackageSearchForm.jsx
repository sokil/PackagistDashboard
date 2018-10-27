import React from 'react';

class VendorPackageSearchForm extends React.Component {
    render() {
        return <form className="my-2">
                <div className="input-group input-group-lg">
                    <input type="text" className="form-control" placeholder="Vendor" />
                </div>
            </form>
    }
}

export default VendorPackageSearchForm;