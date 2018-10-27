import React from 'react';

class VendorPackageSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vendor: null
        };
    }

    submit(e) {
        e.preventDefault();

        if (this.state.vendor) {
            this.props.showVendorPackages(this.state.vendor);
        }
    }

    changeVendor(e) {
        this.state.vendor = e.target.value;
    }

    render() {
        return <form className="my-2" onSubmit={this.submit.bind(this)}>
                <div className="input-group input-group-lg">
                    <input type="text" className="form-control" placeholder="Vendor" onChange={this.changeVendor.bind(this)}/>
                </div>
            </form>
    }
}

export default VendorPackageSearchForm;