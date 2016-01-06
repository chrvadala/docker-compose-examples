const Koa = require('koa');
const pmongo = require('promised-mongo');
const app = new Koa();

const DB_HOST = 'db';
const DB_NAME = process.env.DB_NAME;
const APP_PORT = process.env.APP_PORT;

var conn = pmongo(`mongodb://${DB_HOST}/${DB_NAME}`);

app.use(async (ctx, next) => {
  if(ctx.request.path !== '/') return;

  var item = await conn.collection("data").findAndModify({
    query: { _id: 'n' },
    update: { $inc: { score: 1 } },
    new: true,
    upsert: true
  });

  var score = item.value.score;
  ctx.body = `Hello World! count: ${score}. Try to refresh!`;
  await next;

});

console.log(`listening on port ${APP_PORT}`);
app.listen(APP_PORT);
