import React from 'react';

const AppLayout = props => {

    return (
        <section className="body-wrapper" style={{
            minHeight: '100vh',
            background: '#fafafa'
        }}>
            <section className="body-main">
                {props.children}
            </section>
        </section>
    );
};

export default AppLayout;
