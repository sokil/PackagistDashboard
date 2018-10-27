import React from 'react';

class VendorPackageSearchForm extends React.Component {
    submit(e) {
        e.preventDefault();
        this.props.showVendorPackages('sokil');
    }

    render() {
        return <form className="my-2" onSubmit={this.submit.bind(this)}>
                <div className="input-group input-group-lg">
                    <input type="text" className="form-control" placeholder="Vendor" />
                </div>
            </form>
    }
}

export default VendorPackageSearchForm;