const ReactDOM = require('react-dom');

function transformComponentToString(component) {
    return ReactDOM.renderToString(component);
};

module.exports = {
    transformComponentToString
};