import React, { Component } from 'react';

import AppHeader from '../../Layout/Header';
import AppFooter from '../../Layout/Footer';

class MainLayout extends Component {
  render() {

    const children = React.Children.map( child => {
      return React.cloneElement(child);
    });

    return (
      <section className="body-wrapper">
        <section className="body-main">
          <AppHeader/>

          <div className="container reactxagram-container ">
            <div className="row">
              <div className="col-md-8">
                {children}
              </div>
              <div className="col-md-4">
                <AppFooter />
              </div>
            </div>
          </div>
        </section>
      </section>

    );
  }
}


export default MainLayout;
