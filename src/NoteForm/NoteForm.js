import React, { Component } from 'react'
import './NoteForm.css';

class NoteForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newNoteContent: ''
		};

		this.handleUserInput = this.handleUserInput.bind(this)
	}

	handleUserInput(e) {
		this.setState({
			newNoteContent: e.target.value, // the value of the text input
		})
	}


	render () {
		return (
			<div className="formWrapper">
				<input className="noteInput"
					placeholder="Write a new note..." 
					value={this.state.newNoteContent} 
					onChange={this.handleUserInput}/>
				<button className="noteButton">Add Note</button>
			</div>
		)
	}
}

export default NoteForm;