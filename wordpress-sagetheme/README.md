# docker-compose for [Wordpress](https://wordpress.org/) with [Sage Theme](https://roots.io/sage/)
[This project](https://github.com/chrvadala/docker-compose-examples)
intends to collect common docker-compose use cases.
Each example can be used as a boilerplate.

## Getting started

1. [Download Wordpress](https://wordpress.org/latest.zip) and put Wordpress's files (wp-*) in this directory
2. [Download Sage Theme](https://github.com/roots/sage/releases/latest) and put theme's files into `wp-content/themes/sage/`
3. Setup theme ` $ docker-compose run assets sh setup `
4. Start docker compose ` $ docker-compose up `
5. Open `http://<docker-machine>:8080`
6. Choose Sage Wordpress trough Wordpress Admin Panel
7. (optional) Use a software like [Mysql Workbench](http://dev.mysql.com/downloads/workbench/)
    to restore DB. Connect to mysql through: `<docker-machine>:3306`
8. (optional) Configure the file `/wp-content/themes/sage/assets/manifest.json`. Replace the line `"devUrl": "http://project-name.dev"` with `"devUrl": "http://<docker-machine>:<port>"`

## Contributing
Your contributions (issues and pull request) are appreciated!

### License
MIT
