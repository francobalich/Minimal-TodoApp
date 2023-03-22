import {response} from 'express'

export const getTodo = (req,res=response)=>{
  return res.status(200).json({
    msg:"ok"
  })
}
export const postTodo = (req,res=response)=>{
  return res.status(200).json({
    msg:"ok"
  })
}
export const updateTodo = (req,res=response)=>{
  return res.status(200).json({
    msg:"ok"
  })
}
export const deleteTodo = (req,res=response)=>{
  return res.status(200).json({
    msg:"ok"
  })
}