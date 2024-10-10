//importing the necessary dependancies
const express = require('express')
const mysql = require('mysql2')
const dotenv =require('dotenv')


const app = express()
dotenv.config()

//we are now supposed to configure the database connectin and test the connection
//create a connection object 
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME 

})


//test the connection
db.connect((err) => {
    //connection not successful
    if(err){
        return console.log("Error connecting to MySQL", err)
    }

    //connection successful
    console.log("MySQL  cnnection successful")
 


})

//ejs templating configuration 
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/Views');


// app.get('/data' , (req,res)=>{
//     //retrieve data from the database
//     db.query('SELECT * FROM patients', (err, results)=>{
//         if (err){
//             console.error(err);
//             res.status(500).send('Error retrieving data');
//         }
//         else {
//             //display the recordsto browser
//             res.render('data', { results:results });
//         }
//     });

// });



// get patients
app.get('/get-patients', (req,res) => {
    const getPatients= "SELECT * FROM  patients"

    db.query(getPatients,(err, data) => {
        //have an error
        if (err){
            return res.status(500).send("Failed to fetch the patients" )
        }
        // get back data/results
        res.status(200).send(data)
    })
})

/*
insert - post()
update - put()
delete- delete ()
retrieve- get ()
*/

// THIS IS FOR TESTING PURPOSES ONLY


// app.get('/', (req, res) => {
//     res.send('Hello world I am excited to see what will happen Hurray!!')
// })

//THE TEST ENDS HERE 





//declare the port and listen to the server 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)

})

//ABOVE IS THE BASIC STRUCTURE OF MY SERVER FILE 