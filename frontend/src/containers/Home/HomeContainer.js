import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from '../../components/Home';

export class HomeContainer extends Component {
    render() {
        return (
            <Home
                {...this.props}
            />
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign({}),
            dispatch
        ),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeContainer);
