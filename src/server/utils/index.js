// const React = require('react');
const ReactDOM = require('react-dom/server');
const fs = require('fs');
const path = require('path');

// 读取模板内容
const template = fs.readFileSync(path.join(process.cwd(), 'public/index.html'), 'utf-8');
function transformComponentToString(component) {
    const componentString = ReactDOM.renderToString(component);
    return template.replace('<!-- app -->', componentString);
}

module.exports = {
    transformComponentToString,
};
