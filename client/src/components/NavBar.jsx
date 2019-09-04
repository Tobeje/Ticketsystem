import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;

    -webkit-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
    -moz-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
    box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar
