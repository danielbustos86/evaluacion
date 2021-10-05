'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PersonaSchema = Schema(
    {
      
      id:{
        type:String,
        required: true
      },
      brand:{
        type:String,
        required: true
      },
      description:{
        type:String,
        required: true
      },
      image:{
        type:String,
        required: true
      },
      price:{type:Number, min: 5},
      
    })

module.exports = mongoose.model('producto',PersonaSchema)    

