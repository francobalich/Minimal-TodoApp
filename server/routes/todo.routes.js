import {Router} from 'express'
import { deleteTodo, getTodo, postTodo, updateTodo } from '../controller/todo.controllers.js'

const todoRouter = Router()

todoRouter.get('/',getTodo)

todoRouter.post('/',postTodo)

todoRouter.put('/',updateTodo)

todoRouter.delete('/',deleteTodo)