import React, { Component } from 'react'
import './App.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'

class App extends Component {

  state = {
    // Objet vide qui récupère tout nos messages
    messages : {},
    // Créer par reactRouter
    // voir son chemon grâce à l'onglet react de la console
    pseudo : this.props.match.params.pseudo
  }

  // Méthode qui permet d'ajouter un message au state
  addMessage = message => {
    const { messages } = this.state

    // Ajout d'un message en lui donnant une clé unique
    // écriture de la clé unique entre [``]
    // Date.now() retourne une valeur tjrs unique
    messages[`message-${Date.now()}`] = message

    this.setState({ messages : messages })
  }

  render () {

    const { pseudo, messages } = this.state

    // Récupère les clés uniques des chacuns des messages
    // puis les stock dans un objet (tableau associatif)
    // puis boucle sur le résultat en récupérant le pseudo et le message de chacunes des clés
    const message = Object
      .keys(messages)
      .map(key => (
        <Message
          // Quand on boucle, il faut que chaque enfant est une clé unique
          // on met donc key pour ne pas avoir de message d'eereur en mode Dev
          key = { key }
          pseudo = { messages[key].pseudo }
          message = { messages[key].message } />
      ))

    return (
      <div className='box'>
        <div>

          <div className = 'messages'>
            { message }
          </div>

        </div>
        <Formulaire 
          length = { 200 }
          pseudo = { pseudo }
          addMessage = { this.addMessage }/>
      
      </div>
    )
  }
}

export default App
