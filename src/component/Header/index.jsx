import React, { Component } from 'react'
// UUID: 產生獨立ID
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'

import './index.css'

export default class Header extends Component {

    // 對接收的props 型別檢查
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    
    handleKeyup = (event) => {
        const {target, keyCode} = event

        // 若不是enter鍵
        if (keyCode !== 13) return 
        if (target.value.trim() === '') {
            alert('輸入框不得為空')
            return
        }
        const todoObj = {id:nanoid() ,name:target.value ,done:false}
        this.props.addTodo(todoObj)

        target.value = ''
    }



    render() {
        return (
            <div>
                <div className="todo-header">
                    <input onKeyUp={this.handleKeyup} type="text" placeholder="請輸入代辦清單"/>
                </div>
            </div>
        )
    }
}
