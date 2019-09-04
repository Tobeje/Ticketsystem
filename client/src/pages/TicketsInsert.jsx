import React, { Component } from 'react'
import api from '../api'
import { NavBar } from '../components'
import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`
const Container = styled.div`
background-color:#FFF;
width: 80%;
margin: 0 auto;
padding-top: 15px;
-webkit-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
-moz-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const DropDown = styled.div.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class TicketsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            benutzer: '',
            beschreibung: '',
            prioritaet: 'Normal',
            fertigstellungsdatum: '',
            status: 'Offen',
        }
    }

    handleChangeInputUser = async event => {
        const benutzer = event.target.value
        this.setState({ benutzer })
    }

    handleChangeInputDescription = async event => {
        const beschreibung = event.target.value
        this.setState({ beschreibung })
    }

    handleChangeInputPrio = async event => {
      const prioritaet = event.target.value
      this.setState({prioritaet})
    }

    handleChangeInputTime = async event => {
        const fertigstellungsdatum = event.target.value
        this.setState({fertigstellungsdatum })
    }

    handleIncludeTicket = async () => {
        const { benutzer, beschreibung, prioritaet, fertigstellungsdatum, status } = this.state
        const payload = { benutzer, beschreibung, prioritaet, fertigstellungsdatum, status }

        payload.fertigstellungsdatum = new Date(payload.fertigstellungsdatum).toISOString()
        await api.insertTicket(payload).then(res => {
            window.alert(`Ticket inserted successfully`)
            this.setState({
              benutzer: '',
              beschreibung: '',
              prioritaet: 'Normal',
              fertigstellungsdatum: '',
              status: 'Offen',
            })
        })
        .catch(res => {
          window.alert(res.response.data.error.message)
        })
    }

    render() {
        const { benutzer, beschreibung, prioritaet, fertigstellungsdatum } = this.state
        return (
            <Wrapper>
                <NavBar/>
                <Container>
                <Title>Create Ticket</Title>

                <Label>Benutzer: </Label>
                <InputText
                    type="text"
                    value={benutzer}
                    onChange={this.handleChangeInputUser}
                />

                <Label>Beschreibung: </Label>
                <InputText
                    type="text"
                    value={beschreibung}
                    onChange={this.handleChangeInputDescription}
                />

              <Label>Status: </Label>
              <DropDown>
                <select class="selectpicker" id="lang" onChange={this.handleChangeInputPrio} value={prioritaet}>
                    <option value="Normal">Normal</option>
                    <option value="Hoch">Hoch</option>
                </select>
              </DropDown>


                <Label>Fertigstellungsdatum: </Label>
                <InputText
                    type="date"
                    value={fertigstellungsdatum}
                    onChange={this.handleChangeInputTime}
                />

              <Button onClick={this.handleIncludeTicket}>Add Ticket</Button>
                <CancelButton href={'/tickets/list'}>Cancel</CancelButton>
                </Container>
            </Wrapper>
        )
    }
}

export default TicketsInsert
