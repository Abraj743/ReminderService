const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const {sendBasicEmail} = require('./services/email-service');




const setUpAndStartServer = () =>{

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
         console.log(`Server started at port : ${PORT}`);
        //  sendBasicEmail('abraj.singh743@gmail.com',
        //                 'abhay.rajsingh.phe20@itbhu.ac.in',
        //                 'This is testing email',
        //                 'Hey,how are you,I hope u like the email'
        //                );
    })
}

setUpAndStartServer();


