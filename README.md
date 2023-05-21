# crud-basico

## Nodejs Sequelize RESTAPI PostgreSQL

Se trata de una API REST sencilla que utiliza tecnologías Javascript y PostgreSQL.

- nodejs
- express
- postgreSQL
- sequelize

## Modelado

Esta es la relación básica que utilizamos en este ejemplo,

![](./server/public/diagram.png)

## Estructura del proyecto

```bash
server
├── package.json
├── requests
│   ├── projects.http
│   └── tasks.http
├── sql
│   └── db.sql
└── src
    ├── app.js
    ├── controllers
    │   ├── project.controller.js
    │   └── task.controller.js
    ├── database
    │   └── database.js
    ├── index.js
    ├── models
    │   ├── Project.js
    │   └── Task.js
    └── routes
        ├── projects.routes.js
        └── tasks.routes.js

7 directories, 15 files
```
