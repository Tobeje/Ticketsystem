import React, { Component } from 'react'
import api from '../api'

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

class TicketsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            benutzer: '',
            beschreibung: '',
            prioritaet: '',
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
        this.setState({ new Date(fertigstellungsdatum) })
    }

    handleIncludeTicket = async () => {
        const { benutzer, beschreibung, prioritaet, fertigstellungsdatum } = this.state
        const payload = { benutzer, beschreibung, prioritaet, fertigstellungsdatum }

        await api.insertTicket(payload).then(res => {
            window.alert(`Ticket inserted successfully`)
            this.setState({
              benutzer: '',
              beschreibung: '',
              prioritaet: '',
              fertigstellungsdatum: '',
              status: 'Offen',
            })
        })
    }

    render() {
        const { benutzer, beschreibung, prioritaet, fertigstellungsdatum } = this.state
        return (
            <Wrapper>
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

                <select class="selectpicker" id="lang" onChange={this.handleChangeInputPrio} value={prioritaet}>
                    <option value="Hoch">Hoch</option>
                    <option value="Normal">Normal</option>
                </select>

                <Label>Fertigstellungsdatum: </Label>
                <InputText
                    type="date"
                    value={fertigstellungsdatum}
                    onChange={this.handleChangeInputTime}
                />

              <Button onClick={this.handleIncludeTicket}>Add Ticket</Button>
                <CancelButton href={'/tickets/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default TicketsInsert
