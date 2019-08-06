const express=require('express');
const cors=require('cors');

const app=express();
app.use(cors());

app.listen(3000,function(){
    console.log('my Server Listening on http://localhost:3000');
});