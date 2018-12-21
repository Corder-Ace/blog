import React from 'react';
import PropTypes from 'prop-types';

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
        const { children } = this.props;
        const { countTime } = this.state;
        return (
            <div>
                {children(countTime)}
            </div>);
    }
}

CountDown.propTypes = {
    children: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired,
};
export default CountDown;
