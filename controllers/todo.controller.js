const asyncHandler = require("express-async-handler")
const Todo = require("../models/Todo")

exports.getAllTodos = asyncHandler(async(req, res)=> {
    const result = await Todo.find()
    res.json({message:"All Todos Fetch Success", result})
})

exports.addTodo = asyncHandler(async(req, res)=> {
     await Todo.creaet(req.body)
    res.json({message:"Todo create Success",})
})

exports.updateTodo = asyncHandler(async(req, res)=> {
    const {todoUpdateId}= req.params
    await Todo.findByIdAndUpdate(todoUpdateId, req.body)
    res.json({message:"Todo Update Success"})
})

exports.deleteTodo = asyncHandler(async(req, res)=> {
    const {todoDeleteId} =req.params
    await Todo.findByIdAndDelete(todoDeleteId)
    res.json({message:" Todo Delete Success"})
})