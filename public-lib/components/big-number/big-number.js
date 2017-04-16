import classes from 'app-utils/classes';

import React, { Component } from 'react';

export default class Table extends Component {
	render() {
		return (
			
            <div className="content">
                <span className="counter" data-count="24">24</span>
                <p>December 2017</p>
                <div id="clockdiv">
                    <div className="clock-item">
                        <span className="days">5</span>
                        <p className="smalltext">Days</p>
                    </div>
                    <div className="clock-item">
                        <span className="hours">4</span>
                        <p className="smalltext">Hour</p>
                    </div>
                    <div className="clock-item">
                        <span className="minutes">3</span>
                        <p className="smalltext">Minu</p>
                    </div>
                    <div className="clock-item">
                        <span className="seconds">2</span>
                        <p className="smalltext">Seco</p>
                    </div>
                </div>
            </div>

            
		);
	}
}
