import React, { Component } from 'react'
// component qui nous permet la redirection
import { Redirect } from 'react-router-dom'

// component qui gère la page de connexion au chat
class Connexion extends Component {

    // état local de notre component
    state = {
        pseudo : '',
        goButton : false,
    }

    // Méthode qui gère la valeur du pseudo qui est tapé par l'user
    handleChange = event => {
        // cible la valeur saisie dans l'input
        const pseudo = event.target.value
        // met à jour l'état local
        this.setState({ pseudo:pseudo })
    }

    // Méthode qui gère l'envoi du formulaire au click sur le boutton GO
    handleSubmit = event => {
        // Annulation de l'evenement par défaut géré par le navigateur
        event.preventDefault()

        this.setState ({ goButton : true })
    }


    render() {

        const { pseudo, goButton } = this.state

        // condition qui vérifie le click sur le button GO
        // Si true alors on rentre dans la condition
        if (goButton) {
            // Le component Redirect nous permet de renvoyer la page que l'on souhaite dans l'url
            // il a pour props push to qui renvoie la route que l'on veut prendre
            // ${} nous permet d'y mettre notre état pour pseudo
            return <Redirect push to = {'/pseudo/${pseudo}'}/>
        }

        return (
            <div className='connexionBox'>
                <form className='connexion'
                      onSubmit = { this.handleSubmit }>
                    <input
                       value = { pseudo }
                       onChange = { this.handleChange }
                       placeholder = 'Pseudo'
                       type = 'text'
                       required />
                
                <button type = 'submit'>
                    GO
                </button>

                </form>

            </div>
        )
    }
}

export default Connexion
