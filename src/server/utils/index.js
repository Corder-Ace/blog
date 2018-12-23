const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter, Route } = require('react-router-dom');
const fs = require('fs');
const path = require('path');

// 读取模板内容
const template = fs.readFileSync(path.join(process.cwd(), 'public/index.html'), 'utf-8');
function transformComponentToString(req, component) {
    const content = (
        <StaticRouter location={req.url} context={{}}>
            <Route exact path="/" component={component} />
        </StaticRouter>
    );
    const componentString = renderToString(content);
    return template.replace('<!-- app -->', componentString);
}

module.exports = {
    transformComponentToString,
};
