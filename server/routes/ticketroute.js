const express = require('express')

const TicketCtrl = require('../controllers/ticketcontroller')

const router = express.Router()

router.post('/ticket', TicketCtrl.createTicket)
router.put('/ticket/:id', TicketCtrl.updateTicket)
router.delete('/ticket/:id', TicketCtrl.deleteTicket)
router.get('/ticket/:id', TicketCtrl.getTicketById)
router.get('/tickets', TicketCtrl.getTickets)

module.exports = router
