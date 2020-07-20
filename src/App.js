import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            txtName: '',
            txtPassword: ''
        }
    }
    onHandleChange = (event) => {
        // this.setState({username:event.target.value})
        var target = event.target
        var name = target.name
        var value = target.value
        this.setState({ [name]: value })
        console.log(name)
        console.log(value)
    }
    onSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    onGender(event) {

    }
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản lý công việc</h1>
                </div>
                <div className="row">
                    <div className="card card-warning">
                        <div className="card-heading">
                            <div className="card-title">Thêm công việc</div>
                        </div>
                        <div className="card-body">

                        </div>
                    </div>   
                </div>
            </div>
        )
    }
}

export default App;
