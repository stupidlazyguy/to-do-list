import React from 'react'
import Todo from './Todo'

class TodoLists extends React.Component{
    constructor(props){
        super(props)
        this.state = {todo:['Tin Học Căn Bản','Lập trình Web']}
    }
    renderTodo=()=>{
        return <Todo />
    }
    render(){
        return(
            <Todo/>
        )
    }
}
export default TodoLists