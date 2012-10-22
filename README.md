Luminis Todo Node
=================

This project provides a [node.js][1] server that can be used in the
Luminis JavaScript todo example.

REST API
--------

The service responds to the following API.

    Method | URL                  | Action
    -------+----------------------+--------
    GET    | /                    | Retrieve all todo lists
    POST   | /                    | Create a new todo list
    GET    | /:todolistid         | retrieve all todos on :todolistid
    POST   | /:todolistid         | Create a new todo on :todolistid
    DELETE | /:todolistid         | Remove :todolistid
    GET    | /:todolistid/:todoid | Retrieve all todo :todoid on :todolistid
    DPUT   | /:todolistid/:todoid | Update :todoid on :todolistid
    DELETE | /:todolistid/:todoid | Remove :todoid on :todolistid

[1]: http://nodejs.org/ "Node.js homepage"