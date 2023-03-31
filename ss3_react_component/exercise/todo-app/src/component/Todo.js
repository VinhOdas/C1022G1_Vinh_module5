import React, { Component } from 'react'

 class Todo extends Component {
    constructor() {
        super();
        this.state = {
            list: ['Vinh', 'Vinh1', 'Vinh2'],
            item: ''
        }
    }

   

    handleAddItem() {
        let todoList = [...this.state.list, this.state.item]
        this.setState({
            item: '',
            list: todoList
        })
    }
    handleChange(value) {
        this.setState({
            item: value
        })
    }
    render() {
        return (
            <>
                <input value={this.state.item} onChange={(event) => this.handleChange(event.target.value)}/>
                <button onClick={() => this.handleAddItem()}>Them</button>
                <ul>
                    {
                        this.state.list.map((todo, index) => (
                            <li key={index.toString}>
                                 {todo}
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }
}
export default Todo