import React from 'react'
import Todo from './Todo'

class TodoLists extends React.Component{
    constructor(props){
        super(props)
        this.state = {todo:['Tin Học Căn Bản','Lập trình Web','Cơ sỡ dữ liệu','Lý thuyết đồ thị']}
    }
    renderTodo(){
        var Todos = this.state.todo

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