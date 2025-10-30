import express from 'express';
import mysql from 'mysql2/promise';

const dbconfig = {
    host : 'localhost',
    user : 'root',
    password: 'Rahul@97',
    database: 'weather_api_user'
}

const app = express();
app.use(express.json())

let pool;

async function connectDb(){
    try{
        pool = mysql.createPool(dbconfig);
        console.log("Database connected");
    }catch(errro){
        console.error("Could not connect to database")
    }
    
}


app.get('https://www.androidauthority.com/android-16-qpr2-beta-3-2-3611547/', async(req, res)=>{
    try{
        
    }
})