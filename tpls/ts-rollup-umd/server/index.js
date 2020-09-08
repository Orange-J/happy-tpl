const Koa = require('koa');
const static = require('koa-static');
const path = require('path');

const app = new Koa();

app.use(static(
  path.join(__dirname, './static')
));

app.use(static(
  path.join(__dirname, '../dist')
));

app.listen(8848, () => {
  console.log('Server is listening on port 8848');
});