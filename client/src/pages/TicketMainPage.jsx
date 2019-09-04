import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../ticket_img.png'

const Box = styled.div`
background-color: #1a4e5c;
width: 40%;
height: 200px;
margin: 0 auto;
-webkit-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
-moz-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
`

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

const button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

class TicketMainPage extends Component {
    render() {
        return (
            <Box>
              <Wrapper href="http://81.169.181.191:8000/">
                  <img src={logo} width="50" height="50" alt="http://81.169.181.191:8000/" />
              </Wrapper>
              <button>
                <Link to="/tickets/list" className="nav-link">
                    Tickets
                </Link>
              </button>
            </Box>
        )
    }
}

export default TicketMainPage
