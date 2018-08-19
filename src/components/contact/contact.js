import React from 'react';

class ContactUS extends React.Component {

    locSm1 = 'https://www.google.co.in/maps/place/Happiest+Minds+Technologies+Pvt+Ltd./@12.8499128,77.6550676,'
                + '17z/data=!3m1!4b1!4m5!3m4!1s0x3bae6c9c46f329eb:0x542348a38b44a4!8m2!3d12.8499076!4d77.6572563';

    locSm4 = 'https://www.google.co.in/maps/dir//Happiest+Minds+Technologies+Pvt+Ltd+SMILES+4,+%2353%2F1,2,3,4/'
               + '@12.9189013,77.6204977,17z/data=!4m8!4m7!1m0!1m5!1m1!'
               + '1s0x3bae14f7a75784cd:0x4e3736e11c8a4533!2m2!1d77.6211972!2d12.92049';

    render() {
        var panel1Style = {
                paddingRight: 0,
                height: 220 + 'px',
            },
            panel2Style = {
                paddingRight: 0,
                paddingLeft: 0,
                height: 220 + 'px'
            };

        return (
            <div className="row">
                <div className="panel panel-default contact-us-component col-md-6" style={panel1Style}>
                    <div className="panel-heading">
                        <strong>Smiles-1</strong>
                    </div>
                    <div className="panel-body">
                        Happiest Minds Technologies Private Limited<br/>
                        SMILES 1,<br/>
                        Registered office : 3rd & 4th Floor,<br/>
                        SJR Equinox, Sy.No.47/8,<br/>
                        Doddathogur Village, Begur Hobli,<br/>
                        Electronics City Phase 1,<br/>
                        Hosur Road, Bangalore – 560100<br/>
                        <a href={this.locSm1} target="_blank">Location</a>
                    </div>
                </div>

                <div className="panel panel-default contact-us-component col-md-6" style={panel2Style}>
                    <div className="panel-heading">
                        <strong>Smiles-4</strong>
                    </div>
                    <div className="panel-body">
                        Happiest Minds Technologies Private Limited<br/>
                        SMILES 4, Madiwala<br/>
                        Hosur Main Road,<br/>
                        Bangalore - 560068<br/>
                        Phone:+91 80 79423333<br/>
                        <a href={this.locSm4} target="_blank">Location</a>
                    </div>
                </div>

            </div>
        );
    }
}
export default ContactUS;
