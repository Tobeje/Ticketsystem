import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const box = styled.div`
background-color: #1a4e5c;
width: 200px;
height: 200px;
display: inline-block;
-webkit-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
-moz-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
`

const button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

class TicketMainPage extends Component {
    render() {
        return (
            <box>
              <button>
                <Link to="/tickets/list" className="nav-link">
                    Tickets
                </Link>
              </button>
            </box>
        )
    }
}

export default TicketMainPage
