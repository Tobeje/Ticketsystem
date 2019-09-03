import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../ticket_img.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="http://81.169.181.191:8000/">
                <img src={logo} width="50" height="50" alt="http://81.169.181.191:8000/" />
            </Wrapper>
        )
    }
}

export default Logo
