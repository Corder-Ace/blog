const { renderToString } = require('react-dom/server');
const fs = require('fs');
const path = require('path');

// 读取模板内容
const template = fs.readFileSync(path.join(process.cwd(), 'build/index.html'), 'utf-8');
function transformComponentToString(url, bundle) {
    const content = bundle(url);
    const componentString = renderToString(content);
    return template.replace('<!-- app -->', componentString);
}

module.exports = {
    transformComponentToString,
};
