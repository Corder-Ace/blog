const { Route } = require('react-router-dom');
const { renderToString } = require('react-dom/server');
const router = require('koa-router')();
const React = require('react');
const { StaticRouter } = require('react-router-dom');

const App = () => (
    <div>
        <h1>12321312412312</h1>
    </div>
);
router.get('/', async (ctx, req) => {
    const content = renderToString((
        <StaticRouter location={req.url} context={{}}>
            {
                <Route path="/" component={App} />
            }
        </StaticRouter>
    ));
    ctx.body = content;
});

module.exports = router;