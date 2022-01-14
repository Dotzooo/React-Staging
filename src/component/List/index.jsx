import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Item from '../Item'
import './index.css'

export default class List extends Component {

    // 對接收的props 型別檢查
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        handleDelete: PropTypes.func.isRequired
    }

    render() {
        const { todos, updateTodo, handleDelete } = this.props
        return (
            <div>
                <ul className="todo-main">
                    {
                        todos.map(todo => {
                            return <Item key={todo.id} {...todo} updateTodo={updateTodo} handleDelete={handleDelete} />
                        })
                    }
                </ul>
            </div>
        )
    }
}