import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { TicketsList, TicketsInsert, TicketsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            
            <Switch>
                <Route path="/" exact component={TicketMainPage} />
                <Route path="/tickets/list" exact component={TicketsList} />
                <Route path="/tickets/create" exact component={TicketsInsert} />
                <Routepath="/tickets/update/:id" exact component={TicketsUpdate} />
            </Switch>
        </Router>
    )
}

export default App
