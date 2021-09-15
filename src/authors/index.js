import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname,join } from 'path';
import uniqid from 'uniqid'

const authorRouter = express.Router()
// 1.Getting the authors
authorRouter.get('/', (req,res) =>{

})

// 2.Getting the authors with Id
authorRouter.get('/:id', (req,res) =>{

})

// 3.Posting the authors
authorRouter.post('/:id', (req,res) =>{

})

// 4.Updating the authors 
authorRouter.put('/', (req,res) =>{

})

// 3.deleting the authors
authorRouter.delete('/:id', (req,res) =>{

})