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

const Label = styled.label`
    margin: 5px;
`

const Container = styled.div`
background-color:#FFF;
width: 80%;
margin: 0 auto;
padding-top: 15px;
-webkit-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
-moz-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
padding-inline: 20px;
`

const InputText = styled.input.attrs({
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

class TicketsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            benutzer: '',
            beschreibung: '',
            prioritaet: '',
            fertigstellungsdatum: '',
            status: '',
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

    handleChangeInputStatus = async event => {
      const status = event.target.value
      this.setState({status})
    }

    handleChangeInputTime = async event => {
        const fertigstellungsdatum = event.target.value
        this.setState({fertigstellungsdatum })
    }

    handleUpdateTicket = async () => {
        const { id, benutzer, beschreibung, prioritaet, fertigstellungsdatum, status } = this.state
        const payload = { benutzer, beschreibung, prioritaet, fertigstellungsdatum, status }

        await api.updateTicketById(id, payload).then(res => {
            window.alert(`Ticket updated successfully`)
            this.setState({
              benutzer: '',
              beschreibung: '',
              prioritaet: '',
              fertigstellungsdatum: '',
              status: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const ticket = await api.getTicketById(id)

        this.setState({
            benutzer: ticket.data.data.benutzer,
            beschreibung: ticket.data.data.beschreibung,
            prioritaet: ticket.data.data.prioritaet,
            fertigstellungsdatum: new data(ticket.data.data.fertigstellungsdatum),
        })
    }

    render() {
        const { benutzer, beschreibung, prioritaet, fertigstellungsdatum, status } = this.state
        return (
            <Wrapper>
              <NavBar/>
              <Container>
                <Title>Update Ticket</Title>

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

                <Label>Prioritaet: </Label>
                  <select class="form-control" id="lang" onChange={this.handleChangeInputPrio} value={prioritaet}>
                      <option value="Normal">Normal</option>
                      <option value="Hoch">Hoch</option>
                  </select>

                  <Label>Status: </Label>
                    <select class="form-control" id="lang" onChange={this.handleChangeInputStatus} value={status}>
                        <option value="Offen">Offen</option>
                        <option value="In Arbeit">In Arbeit</option>
                          <option value="Abgeschlossen">Abgeschlossen</option>
                    </select>


                  <Label>Fertigstellungsdatum: </Label>
                  <InputText
                      type="date"
                      value={fertigstellungsdatum}
                      onChange={this.handleChangeInputTime}
                  />
              <Button onClick={this.handleUpdateTicket}>Update Ticket</Button>
                <CancelButton href={'/tickets/list'}>Cancel</CancelButton>
                </Container>
            </Wrapper>
        )
    }
}

export default TicketsUpdate
