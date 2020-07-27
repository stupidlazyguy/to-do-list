import React from 'react'
import Todo from './Todo'

class TodoLists extends React.Component{
    renderTodo=()=>{
        let Todos = this.props.setTodo
        return Todos.map(function(value,index){
            // console.log(<Todo todo={value} key={index} count={index}/>)
            return <Todo todo={value} key={index} count={index}/>
        })
    }
    render(){
        return(
            this.renderTodo()    
        )
    }
}
export default TodoLists