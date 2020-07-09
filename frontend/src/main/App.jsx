import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../componentes/template/Logo'
import Nav from '../componentes/template/Nav'
import Main from '../componentes/template/Main'
import Footer from '../componentes/template/Footer'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Inicio"
            subtitle="Segundo Projeto do capitulo de React." />
        <Footer />
    </div>