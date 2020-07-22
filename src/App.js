import React from 'react';
import Heading from './Components/Heading'
import AddTodoList from './Components/AddTodoList'
import AddButton from './Components/AddButton'
import Search from './Components/Search'
import Sort from './Components/Sort'
import TodoLists from './Components/TodoLists'
import TodoHeading from './Components/TodoHeading'
import TodoMenu from './Components/TodoMenu'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {todo:['Tin Học Căn Bản','Lập trình Web','Cơ sỡ dữ liệu','Lý thuyết đồ thị']}
    }
    componentDidMount(){
        // console.log(this.state)
    }
    renderTodo = (todo) => {
        let addtodo = this.state
        addtodo.todo.push(todo.name)
        this.setState(addtodo)
        console.log(addtodo)
    }
    render() {
        return (
            <div className="container">
                <Heading />
                <div className="row ">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 mt-3 AddTodoList">
                        <AddTodoList  getTodo={this.renderTodo}/>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <AddButton />
                        <div className="row ">
                            {/* Search */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <Search />
                            </div>
                            {/* Sort */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <Sort />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        {/* Heading Table */}
                                        <TodoHeading />
                                    </thead>
                                    <tbody>
                                        {/* Menu of heading */}
                                        <TodoMenu />
                                        {/* List do do */}
                                        {/* List of menu to do list  */}
                                        <TodoLists setTodo={this.state.todo}/>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
