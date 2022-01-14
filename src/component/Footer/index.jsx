import React, { Component } from 'react'

import './index.css'

export default class Footer extends Component {    

    // 全選
    checkAllTodo = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    // 刪除已完成任務
    clearAllDone = () => {
        this.props.clearAllDone()
    }


    render() {
        const {todos} = this.props

        // 已完成數量  current為todos
        const finishCount = todos.reduce((prev, current) =>  prev + (current.done ? 1 : 0), 0)
        
        // 全部數量
        const total = todos.length

        return (
            <div>
                <div className="todo-footer">
                    <label>
                    <input type="checkbox" onChange={this.checkAllTodo} checked={finishCount === total && total !== 0 ? true : false}/>
                    </label>
                    <span>
                    <span>已完成{finishCount} </span> / 全部{total}
                    </span>
                    <button className="btn btn-danger" onClick={this.clearAllDone}>清除已完成任務</button>
                </div>
            </div>
        )
    }
}
