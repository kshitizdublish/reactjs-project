import React from 'react';

class Flux extends React.Component {
    render() {
        return (
            <div className="flux-component">
                <h3>Flux</h3>
                <p>
                    Flux is a programming concept, where the data is uni-directional.<br/>
                    This data enters the app and flows through it in one direction until it is rendered on the screen.
                </p>
            </div>
        );
    }
}
export default Flux;
