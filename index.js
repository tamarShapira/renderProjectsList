import express  from 'express';
import cors from 'cors'
//  const express =require('express');
//  const cors =require( 'cors');
const app=express();
app.use(cors());
const port=3000;
app.listen(port,()=>{
 console.log(`example app listening on https://localhost:${port}`);
})

import axios from 'axios';
// const axios = require('axios');

const options = {
 method: 'GET',
 url: 'https://api.render.com/v1/services?limit=20',
 headers: {
   accept: 'application/json',
   authorization: 'Bearer rnd_qrKDhzWln7p8TvItJKTvSWtKBWGS'
 }
};


app.get('/', (req,res)=>{
axios
 .request(options)
 .then(function (response) {
   res.send(response.data);
 })
 .catch(function (error) {
   res.send(error);
 });
})