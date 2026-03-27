const ticketService = require('../services/email-service');
const {StatusCodes} = require('http-status-codes')

const create = async(req,res) => {
    try {
          const response = await ticketService.createNotification(req.body);
          return res.status(StatusCodes.CREATED).json({
            success:true,
            data:response,
            err:{},
            message:"Successfully created the email reminder"
          })
    } catch (error) {
         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            data:{},
            err:error.message,
            message:"Not able to create the email reminder"
          })
    }
}

module.exports = {
    create
}
