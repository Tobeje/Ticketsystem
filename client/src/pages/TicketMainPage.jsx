import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Box = styled.div`
background-color: #1a4e5c;
width: 50%;
height: 50%;
display: inline-block;
-webkit-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
-moz-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
`
const BoxAlign = styled.div`
text-align: center;
`

const button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

class TicketMainPage extends Component {
    render() {
        return (
          <BoxAlign>
            <Box>
              <button>
                <Link to="/tickets/list" className="nav-link">
                    Tickets
                </Link>
              </button>
            </Box>
            </BoxAlign>
        )
    }
}

export default TicketMainPage
