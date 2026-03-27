const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');

const ticketRepository = new TicketRepository();


const sendBasicEmail =  (mailFrom,mailTo,mailSubject,mailBody) => {
      sender.sendMail({
        from:mailFrom,
        to:mailTo,
        subject:mailSubject,
        text:mailBody
      });
}

const fetchPendingEmails = async() =>{
     try {
           const response = await ticketRepository.get({status:'PENDING'})
           return response;
     } catch (error) {
        throw error;
     }
}

const createNotification  = async (data) =>{
  try {
        const response = await ticketRepository.create(data);
        return response;
  } catch (error) {
    console.log('Error in service Layer',error);
    throw error;
  }
}

 const updateTicket = async(ticketId,data) =>{
  try {
        const response = await ticketRepository.update(ticketId,data);
        return response;
  } catch (error) {
    console.log("Error in service layer",error);
     throw error;
    
  }
 }

module.exports = {
    sendBasicEmail,fetchPendingEmails,createNotification,updateTicket
}