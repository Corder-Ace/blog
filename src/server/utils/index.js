const React = require('react');
const ReactDOM = require('react-dom');
const fs = require('fs');
const path = require('path');

// 读取模板内容
const template = fs.readFileSync(path.join(process.cwd(), 'public/index.html'), 'utf-8');
function transformComponentToString(req, res, component) {
    const componentString = ReactDOM.renderToString(component);
    template.replace('<!-- app -->', componentString);
    return template;
}
