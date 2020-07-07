import React from 'react';

const AppLayout = props => {

    return (
        <section className="body-wrapper" >
            <section className="body-main" style={{
                minHeight: '100vh',
                background: '#fafafa'
            }}>
                {props.children}
            </section>
        </section>
    );
};

export default AppLayout;
