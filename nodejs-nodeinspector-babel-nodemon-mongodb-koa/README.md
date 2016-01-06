# docker-compose for [Node.js](https://nodejs.org/), [Node Inspector](https://github.com/node-inspector/node-inspector),  [Babel](https://babeljs.io/),  [Nodemon](http://nodemon.io/), [MongoDB](https://www.mongodb.org/), [Koa](http://koajs.com/)
[This project](https://github.com/chrvadala/docker-compose-examples)
intend to collect a collection of common docker-compose use case.
Each example can be used as boilerplate.

## Getting started

1. Install dependencies ` $ docker-compose run web npm install `
2. Start docker compose ` $ docker-compose up `
3. Open `http://<docker-machine>:3000`
4. (optional) Open node inspector `http://<docker-machine>:3001`
5. (optional) Use a software like [Robomongo](http://robomongo.org/)
    and restore DB. Connect to mongodb through: `<docker-machine>:27017`

## Contributing
Your contributions (issues and pull request) are appreciated!

### License
MIT
