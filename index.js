import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import du component connexion
import Connexion from './components/Connexion'
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker'
// import des composants nécessaires à nos url pour notre app
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// constante qui gère toutes nos routes
const Root = () => (
    // Toute l'app doit être entre BrowserRouter pour indiquer à l'app que l'on veut utiliser
    // l'import BrowserRouter
    <BrowserRouter>
        {/* switch a pour enfants toutes nos routes */}
        <Switch>
            {/* 
            route pour notre page d'acceuil 
            Lorsque le path est celui indiquer alors afficher le component Connexion 
            */}
            <Route exact path = '/' component = {Connexion}/>

            {/*
            route lorsque l'user met son pseudo
            il s'agit d'un chemin absolu
            :pseudo est le nom de la variable */}
            <Route path = '/pseudo/:pseudo' component = {App}/>

            {/*
            Si la route ne correspond à aucunes des précédentes
            nous permet de filtrer les mauvais url
            */}
            <Route component = {NotFound}/>

        </Switch>
    
    </BrowserRouter>
)


ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
