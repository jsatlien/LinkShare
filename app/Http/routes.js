'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')


Route.post('/register', 'UserController.register')
Route.post('/login', 'UserController.login')

Route.get('/auth_test', 'UserController.auth_test').middleware('auth')

Route.post('/users/:id/posts', 'PostController.create').middleware('auth')
Route.get('/users/:id/posts', 'PostController.show')
Route.delete('/users/:id/posts/:post_id', 'PostController.delete').middleware('auth')

Route.post('/users/:id/posts/:post_id/comments', 'CommentController.create').middleware('auth')
Route.get('/users/:id/posts/:post_id/comments', 'CommentController.show')
Route.delete('/users/:id/posts/:post_id/comments/:comment_id', 'CommentController.delete').middleware('auth')

Route.post('/users/:id/posts/:post_id', 'VoteController.create').middleware('auth')
