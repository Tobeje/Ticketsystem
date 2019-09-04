import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../ticket_img.png'

const Box = styled.div`
background-color: #1a4e5c;
width: 25%;
height: 300px;
margin: 10% auto;
justify-content: center;
align-items: center;
display: grid;
-webkit-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
-moz-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
`

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})`
text-align: center;
margin: 15px 15px 15px 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const Link = styled.link`
color: #FFF;
`

class TicketMainPage extends Component {
    render() {
        return (
            <Box>
              <Wrapper href="http://81.169.181.191:8000/">
                  <img src={logo} width="150" height="150" alt="http://81.169.181.191:8000/" />
              </Wrapper>
              <p></p>
              <Button>
                <Link to="/tickets/list" className="nav-link">
                    Tickets
                </Link>
              </Button>
              <p></p>
              <Button>
                <Link to="/tickets/create" className="nav-link">
                    Ticket Erstellen
                </Link>
              </Button>
            </Box>
        )
    }
}

export default TicketMainPage
