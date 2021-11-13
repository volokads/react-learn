import { Component } from "react";

class Form extends Component {
    state = {
        name: '',
        surname: '',
        patronymic: '',
        description: '',
    }
    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }
    handleSurnameChange = (e) => {
        this.setState({surname: e.target.value})
    }
    handlePatronymicChange = (e) => {
        this.setState({patronymic: e.target.value})
    }
    handleDescriptionChange = (e) => {
        this.setState({description: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("state", this.state);
    }
    render() {

        const { name, surname, patronymic, description } = this.state
        
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                <input
                    type="text"
                    value={name}
                    onChange={this.handleNameChange} />
                </label>
                <label>
                    Surname
                <input
                    type="text"
                    value={surname}
                        onChange={this.handleSurnameChange} />
                </label>
                <label>
                    patronymic
                <input 
                    type="text" 
                    value={ patronymic } 
                    onChange={this.handlePatronymicChange} />
                </label>
                <label>
                    Description
                <textarea 
                value={description} 
                onChange={this.handleDescriptionChange} />
                </label>
                <button type="submit" onClick={ this.handleSubmit}>Add teacher</button>
            </form>
        )
    }
}

export { Form }