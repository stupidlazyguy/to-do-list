import React from 'react'
import Todo from './Todo'

class TodoLists extends React.Component{
    renderTodo=()=>{
        var Todos = this.props.setTodo
        return Todos.map(function(value,index){
            return <Todo todo={value} key={index}/>
        })
    }
    render(){
        return(
            this.renderTodo()    
        )
    }
}
export default TodoLists