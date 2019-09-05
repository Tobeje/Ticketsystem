import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import { NavBar } from '../components'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

const TicketOpen = styled.div`
    color: #a1b0b3;
    cursor: pointer;
`

const TicketFinished = styled.div`
    color: #32a852;
    cursor: pointer;
`

const Ticket = styled.div`
    color: #e0cc31;
    cursor: pointer;
`

const Table = styled.div`
width: 80%;
margin: 0 auto;
-webkit-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
-moz-box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
box-shadow: 10px -3px 81px -10px rgba(0,0,0,0.86);
`

class UpdateTicket extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/tickets/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteTicket extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the ticket ${this.props.id} permanently?`,
            )
        ) {
            api.deleteTicketById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class TicketsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickets: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllTickets().then(tickets => {
            this.setState({
                tickets: tickets.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { tickets, isLoading } = this.state
        console.log('TCL: TicketsList -> render -> tickets', tickets)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
                width: 60,
            },
            {
                Header: 'Benutzer',
                accessor: 'benutzer',
                filterable: true,
                width:160m
            },
            {
                Header: 'Beschreibung',
                accessor: 'beschreibung',
                filterable: true,
                width: 450,
            },
            {
                Header: 'Prioritaet',
                accessor: 'prioritaet',
            },
            {
                Header: 'Status',
                accessor: '',
                Cell: function(props) {
                    if(props.original.status === 'Offen'){
                      return (
                          <span>
                              <TicketOpen>{props.original.status}</TicketOpen>
                          </span>
                      )
                    }else if(props.original.status === 'Abgeschlossen'){
                      return (
                          <span>
                              <TicketFinished>{props.original.status}</TicketFinished>
                          </span>
                      )
                    }else{
                      return (
                          <span>
                              <Ticket>{props.original.status}</Ticket>
                          </span>
                      )
                    }
                  }
            },
            {
                Header: 'Fertigstellungsdatum',
                accessor: 'fertigstellungsdatum',
                Cell: function(props){
                  const dateData = new Date(props.original.fertigstellungsdatum.substring(0, 10))
                  return(
                    <span>{dateData.getDate()}.{dateData.getMonth() + 1}.{dateData.getFullYear()}</span>
                  )
                }
            },

      /*      {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateTicket id={props.original._id} />
                        </span>
                    )
                },
            },*/
        ]

        let showTable = true
        if (!tickets.length) {
            showTable = false
        }

        return (
            <Wrapper>
              <NavBar/>
              <Table>
                {showTable && (
                    <ReactTable
                        data={tickets}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
                </Table>
            </Wrapper>
        )
    }
}

export default TicketsList
