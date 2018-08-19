import React from 'react';
import $ from '../../../node_modules/jquery';

import Props from '../menu-component/props';
import Flux from '../menu-component/flux';
import State from '../menu-component/state';

import './development.css';

class Development extends React.Component {

    state = {
        name: 'ksh',
        age: '26'
    };

    propsClicked(event) {
        $('.state').removeClass('active');
        $('.flux').removeClass('active');
        $('.props').addClass('active');
        $('.flux-panel').addClass('inactive-tab');
        $('.state-panel').addClass('inactive-tab');
        $('.props-panel').removeClass('inactive-tab');
    }

    fluxClicked(event) {
        $('.props').removeClass('active');
        $('.state').removeClass('active');
        $('.flux').addClass('active');
        $('.props-panel').addClass('inactive-tab');
        $('.state-panel').addClass('inactive-tab');
        $('.flux-panel').removeClass('inactive-tab');
    }
    
    stateClicked(event) {
        console.log(this.state.name);
        // this.changeState('name', 'Utkarsh');
        $('.props').removeClass('active');
        $('.flux').removeClass('active');
        $('.state').addClass('active');
        $('.props-panel').addClass('inactive-tab');
        $('.flux-panel').addClass('inactive-tab');
        $('.state-panel').removeClass('inactive-tab');
    }

    render() {
        return (
            <div className="development-component">
                <div className="left-panel">
                    <h3 className="menu-heading">Table Of Contents</h3>
                    <div className="menu-item">
                        <div className="vertical-menu">
                        <ul>
                            <li className="props active" onClick={this.propsClicked}>Props</li>
                            <li className="state" onClick={this.stateClicked}>State</li>
                            <li className="flux" onClick={this.fluxClicked}>Flux</li>
                            <li>ABC</li>
                            <li>XYZ</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="right-panel">
                    <div className="props-panel">
                        <Props></Props>
                    </div>
                    <div className="inactive-tab flux-panel">
                        <Flux></Flux>
                    </div>
                    <div className="inactive-tab state-panel">
                        <State></State>
                    </div>
                </div>
            </div>
        );
    }
}
export default Development;
