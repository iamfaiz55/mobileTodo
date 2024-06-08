const router = require("express").Router()
const todoController = require("./../controllers/todo.controller")

router
    .get("/", todoController.getAllTodos)
    .post("/createTodo", todoController.addTodo)
    .put("/updateTodo/:todoUpdateId", todoController.updateTodo)
    .delete("/deleteTodo/:todoDeleteId", todoController.deleteTodo)

module.exports = router