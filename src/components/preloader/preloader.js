import React, { Component } from 'react';

import '../preloader/preloader.css';

class Preloader extends Component {
    render() {
        return (
            <div className="lds-css ng-scope">
                <div className="lds-double-ring">
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}
export default Preloader;