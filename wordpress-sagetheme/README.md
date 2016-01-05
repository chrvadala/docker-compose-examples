# docker-compose for wordpress with [sage theme](https://roots.io/sage/)
[This project](https://github.com/chrvadala/docker-compose-examples)
intend to collect a collection of common docker-compose use case.
Each example can be used as boilerplate.

## Getting started

1. [Download Wordpress](https://wordpress.org/latest.zip) and put Wordpress's files (wp-*) in this directory
2. [Download Sage Theme](https://github.com/roots/sage/releases/latest) and put theme's files into `wp-content/themes/sage/`
3. Setup theme ` $ docker-compose run assets sh setup ` 
4. Start docker compose ` $ docker-compose up `
5. Choose Sage Wordpress trough Wordpress Admin Panel
6. (optional) Use a software like [Mysql Workbench](http://dev.mysql.com/downloads/workbench/)
    to restore DB. Connect to mysql through: `<docker-machine>:3306`
7. (optional) Configure the file `/wp-content/themes/sage/assets/manifest.json`. Replace the line `"devUrl": "http://project-name.dev"` with `"devUrl": "http://<docker-machine>:<port>"`

## Contributing
Your contributions (issues and pull request) are appreciated!

### License
MIT
