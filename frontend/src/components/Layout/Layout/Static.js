import React, {Component} from 'react';
import {MDBContainer} from 'mdbreact';

import AppHeader from '../../Layout/Header/';
import AppFooter from '../../Layout/Footer/';

class StaticLayout extends Component {

    render() {
        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {})
        });

        return (
            <section className="body-wrapper" style={{
                minHeight: '100vh',
                background: '#fafafa'
            }}>
                <section className="body-main" >
                    <AppHeader/>

                    <MDBContainer className={'reactxagram-container'}>
                        <div className="row">
                            <div className="col-md-8">
                                {children}
                            </div>
                            <div className="col-md-4">
                                <AppFooter/>
                            </div>
                        </div>
                    </MDBContainer>
                </section>
            </section>
        );
    }
}

export default StaticLayout;
