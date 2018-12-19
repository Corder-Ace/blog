import React from 'react';
import PropTypes from 'prop-types';

class CuteDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cuteTime: props.time,
        };
    }

    componentDidMount() {
        this.intervalHandle = setInterval(() => {
            const { cuteTime } = this.state;
            if (cuteTime > 0) {
                const newCount = cuteTime - 1;
                this.setState({ cuteTime: newCount });
            } else {
                clearInterval(this.intervalHandle);
            }
        }, 100);
    }

    render() {
        const { children } = this.props;
        const { cuteTime } = this.state;
        return (
            <div>
                {children(cuteTime)}
            </div>);
    }
}

CuteDown.propTypes = {
    children: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired,
};
export default CuteDown;
