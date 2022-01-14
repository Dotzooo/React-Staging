import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

export default class Item extends Component {

    // 對接收的props 型別檢查
    static propTypes = {
        updateTodo: PropTypes.func.isRequired,        
        handleDelete: PropTypes.func.isRequired
    }


    state = {
        mouseEnable: false
    }

    // 控制滑鼠事件
    handleMouse = (flag) => {
        return () => {
            this.setState({mouseEnable: flag})
        }   
    }

    // 更改todo勾選狀態
    handleChecked = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    // 刪除todo
    handleDelete = (id) => {
        if (window.confirm('確定刪除嗎??')) {
            this.props.handleDelete(id)
        }
    }

    render() {
        const {id, name, done } = this.props
        const {mouseEnable} = this.state

        return (
            <div>
                <li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} style={{backgroundColor: mouseEnable ? '#ddd' : '#fff'}}>
                    <label>
                        <input type="checkbox"  onChange={this.handleChecked(id)} checked={done ? true : false} />
                        <span>{ name }</span>
                    </label>
                    <button onClick={() => {this.handleDelete(id)}} className="btn btn-danger" style={{ display: mouseEnable ? 'block' : 'none' }}>删除</button>
                </li>
            </div>
        )
    }
}
