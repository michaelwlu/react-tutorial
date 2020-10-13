import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
	state = {
		todos: [
			{ id: 1, content: 'buy some milk' },
			{ id: 2, content: 'play mario kart' }
		]
	};

	deleteTodo = id => {
		this.setState({
			todos: this.state.todos.filter(todo => {
				return todo.id !== id;
			})
		});
	};

	addTodo = todo => {
		todo.id = Math.floor(Math.random() * 100000);
		this.setState({
			todos: [...this.state.todos, todo]
		});
	};
	render() {
		return (
			<div className="todo-app container">
				<h1 className="center blue-text">Todo's</h1>
				<Todos
					todos={this.state.todos}
					deleteTodo={this.deleteTodo}
				/>
				<AddTodo addTodo={this.addTodo}/>
			</div>
		);
	}
}

export default App;
