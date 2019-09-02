const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ticket = new Schema(
    {
        benutzer: { type: String, required: true },
        beschreibung: { type: String, required: true },
        prioritaet: { type: String ,enum:['Normal', 'Hoch'] ,required: true },
        fertigstellungsdatum: { type: Date },
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', Ticket)
