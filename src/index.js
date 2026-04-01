const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const jobs = require('./utils/job')
const ticketController = require('./controllers/ticket-controller')
const {subscribeMessage,createChannel} = require('./utils/messageQueue')
const {REMINDER_BINDING_KEY} =require('./config/serverConfig')
const ticketService = require('./services/email-service')




const setUpAndStartServer = async () =>{

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    // const channel = await createChannel();

    app.post('/api/v1/tickets',ticketController.create)
    const channel = await createChannel();

    subscribeMessage(channel,ticketService.subscribeEvents,REMINDER_BINDING_KEY);


    app.listen(PORT,()=>{
         console.log(`Server started at port : ${PORT}`);
         jobs();
         
    })

    
}

setUpAndStartServer();


