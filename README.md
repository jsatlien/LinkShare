[Heroku Server](https://desolate-basin-40554.herokuapp.com/)

Routes Directory:


<< User Routes >>

------------------------------------
POST /register

creates a new user in the database.

* username - string
* email - string
* password - string

------------------------------------
POST /login

logs in a user and gives them an access token.

* username - string
* password - string

------------------------------------
GET /auth_test

Tests the authorization of a user by checking their access token.

------------------------------------


<< Post Routes >>

------------------------------------
POST /users/:id/posts

creates a new post for a specific user.

* user_id - integer
* title - string
* url - string

------------------------------------
GET /users/:id/posts

Get data for all posts by a single user.

* user_id -string

------------------------------------
DELETE /users/:id/posts/:post_id

Remove a specific post by a user.

* user_id - integer
* post_id - integer

------------------------------------
POST /users/:id/posts/:post_id

Adds an 'upvote' for a specific post.

* user_id - integer
* post_id - integer

------------------------------------


<< Comments Routes >>

------------------------------------
POST /users/:id/posts/:post_id/comments

Creates a comment for a specific post.

* user_id - integer
* post_id - integer
* content - string

------------------------------------
GET /users/:id/posts/:post_id/comments

Get all comments and comment data for a specific post.

* user_id - integer
* post_id - integer

------------------------------------
DELETE /users/:id/posts/:post_id/comments/:comment_id

Deletes a specific comment for a specific post.

* user_id - integer
* post_id - integer
* comment_id - integer

------------------------------------
