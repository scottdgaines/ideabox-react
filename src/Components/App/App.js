import React, { Component } from 'react';
import Ideas from '../Ideas/Ideas';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
                ideas: []
        }
    }

    addIdea = (newIdea) => {
        this.setState({ ideas: [...this.state.ideas, newIdea] });
    }

    deleteIdea = (id) => {
        console.log(id);
        const filteredIdeas = this.state.ideas.filter(idea => {
            return idea.id !=id
        })
        this.setState({ ideas: filteredIdeas });
    }

    render() {
        return (
            <main className='App'>
                <h1>IdeaBox</h1>
                <Form addIdea={this.addIdea} />
                <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
                { !this.state.ideas.length && <h2>No ideas yet -- add some!</h2> }
            </main>
        )
    }
}

export default App;