import React from 'react';

class Props extends React.Component {
    render() {
        return (
            <div className="props-component">
                <h3>Props</h3>
                <p>
                    When we need immutable data in our component,
                    we can just add props to reactDOM.render() function<br/>
                    in main.js and use it inside our component.
                </p>
            </div>
        );
    }
}
export default Props;
