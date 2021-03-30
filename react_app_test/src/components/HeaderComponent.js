import React from 'react';

class HeaderCompenent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="navbar-brand">Student App</div>
                    </nav>
                </header>
                
            </div>
        );
    }
}



export default HeaderCompenent;
