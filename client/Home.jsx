import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store, { reducer, defaultState } from './store';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const { changeTest } = this.props;
        changeTest('01111');
        setTimeout(() => {
            store.reset(reducer, defaultState);
        }, 10000);
    }

    render() {
        const { test } = this.props;
        return (
            <div>
                redux:
                {test}
            </div>
        );
    }
}
Home.propTypes = {
    changeTest: PropTypes.func.isRequired,
    test: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
    test: state.test,
});
const mapDispatchToProps = (dispatch) => ({
    changeTest(data) {
        dispatch((patch) => {
            setTimeout(() => {
                patch({
                    type: 'TEST',
                    data,
                });
            }, 3000);
        });
        // dispatch({
        //     type: 'TEST',
        //     data,
        // });
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
