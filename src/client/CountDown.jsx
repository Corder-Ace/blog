import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CountDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countTime: props.time,
        };
    }

    componentDidMount() {
        this.intervalHandle = setInterval(() => {
            const { countTime } = this.state;
            if (countTime > 0) {
                const newCount = countTime - 1;
                this.setState({ countTime: newCount });
            } else {
                clearInterval(this.intervalHandle);
            }
        }, 100);
    }

    render() {
        const { children, change, count } = this.props;
        const { countTime } = this.state;
        console.log(count);
        return (
            <div>
                {children(countTime)}
                <button type="button" onClick={() => change(10)}>测试</button>
            </div>);
    }
}

CountDown.propTypes = {
    children: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    change: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
    count: state.count,
});
const mapDispatchToProps = (dispatch) => ({
    change(count) {
        dispatch({ type: 'CHANGE', count });
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(CountDown);
