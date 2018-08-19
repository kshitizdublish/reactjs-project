import React from 'react';

class State extends React.Component {
    render() {
        return (
            <div className="state-component">
                <h3>State</h3>
                <p>
                    State is the place where the data comes from.
                    We should always try to make our state as simple as<br/>
                    possible and minimize the number of stateful components
                </p>
            </div>
        );
    }
}
export default State;
