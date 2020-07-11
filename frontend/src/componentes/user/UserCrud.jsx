import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Usuaários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const inicialState = {
    user: {nome: '', email:''},
    list: []
}

export default class UserCrud extends Component {

    state = { ...inicialState }

    clear() {
        this.setState({ user: inicialState.user })
    }

    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: inicialState.user, list })
            })

    }

    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuárioo
            </Main>
        )
    }
}