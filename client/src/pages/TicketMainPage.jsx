import React, { Component } from 'react'
import { NavBar } from '../components'
import styled from 'styled-components'

const box = styled.div.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
width: 50%;
height: 50%;
display: inline-block;
-webkit-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
-moz-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
`

const boxContainer = styled.div`
text-align: center;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

class TicketMainPage extends Component {
    render() {
        return (
          <boxContainer>
            <box>
              <Button onclick="location.href = '/tickets/create';">Ticket Anlegen</Button>
              <Button onclick="location.href = '/tickets/list';">Tickets</Button>
            </box>
          </boxContainer>
        )
    }
}

export default TicketMainPage
