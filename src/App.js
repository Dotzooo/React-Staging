import React, {Component} from "react"

import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'

import './App.css'

export default class App extends Component {
    state = {
        todos: [
            {id: 1, name: '吃飯', done: true},
            {id: 2, name: '睡覺', done: false},
            {id: 3, name: '打東東', done: true}
        ]
    }

    // 新增todo
    addTodo = (todoObj) => {
        const {todos} = this.state

        const newTodo = [todoObj, ...todos]
        this.setState({todos: newTodo})
    }

    // 更新todo
    updateTodo = (id, done) => {
        const {todos} = this.state

        const newTodos = todos.map((todoObj) => {
            if(todoObj.id === id) return {...todoObj, done}
            else return todoObj
        })

        this.setState({todos: newTodos})
    }

    // 刪除todo
    handleDelete = (id) => {
        const {todos} = this.state

        // 將不相同id的資料返回
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })

        this.setState({todos: newTodos})
    }

    // 全選
    checkAllTodo = (done) => {
        const {todos} = this.state

        const newTodos = todos.map((todoObj) => {
            return {...todoObj, done}
        })

        this.setState({todos: newTodos})
    }

    // 刪除已完成任務
    clearAllDone = () => {
        const {todos} = this.state

        // 過濾資料
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })

        this.setState({todos: newTodos})
    }


    render () {     
        const {todos} = this.state   
        return (
            <div className="todo-container"> 
                <h1>TODO LIST</h1>     
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} handleDelete={this.handleDelete}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>  
                </div>   
            </div>
        )
    }
}