import React, { Component } from 'react'

// component qui nous retourne un formulaire pour l'affichage du chat
class Formulaire extends Component {

    state = {
        message : '',
        // initialisation de length à la valeur mise en props
        length : this.props.length,
    }

    // Méthode qui crée le message avant l'envoi
    createMessage = () => {
        // instanciation des props de la balise Formulaire
        const { addMessage, pseudo, length } = this.props
        //const { message } = this.state

        // constante qui créer un objet message
        const message = {
            pseudo,
            message : this.state.message 
        }

        // Appel de la méthode déclarer dans App.js
        addMessage (message)

        // Après l'envoi du message, textarea se vide
        this.setState({ message : '', length : length })
    }

    // Méthode qui réagis au click sur e bouton GO
    handleSubmit = event => {
        // Annulation de l'evenement par défaut géré par le navigateur
        event.preventDefault()
        // Appel de la méthode
        this.createMessage()
    }

    // Méthode qui gère le contenu du textarea
    // Elle récupère le texte saisie et en fait la nouvelle valeur de message
    handleChange = event => {
        // Récupération de la valeur saisie dans le textarea
        const message = event.target.value

        // Récupération du nombre de caractère saisie
        const length = this.props.length - message.length

        this.setState({ message : message, length : length })
    }

    // Méthode qui gère l'appuie sur la touche "Entrée" du clavier
    handleKeyUp = event => {
        // Si la valeur de la toucher appuyé est "Enter"
        if (event.key === 'Enter') {
            // Alors ça nous créée un nouveau message
            this.createMessage()
        }
    }

    render () {

        const { message, length } = this.state

        return (

            <form 
                className = 'form'
                onSubmit = { this.handleSubmit }>

                <textarea
                    value = { message }
                    onChange = { this.handleChange }
                    onKeyUp = { this.handleKeyUp }
                    required
                    maxLength = { length } />

                <div className = 'info'>
                    { length }
                </div>

                <button type = 'submit'>
                    Envoyer
                </button>

            </form>
            
        )
    }
}

export default Formulaire