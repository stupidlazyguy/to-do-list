import React from 'react'



class AddTodoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'default',
            status:true
        }
    }
    onHandleChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value
        this.setState({ [name]: value })
    }
    onSubmitFrom = (event) => {
        event.preventDefault()
        this.props.getTodo(this.state)
    }
    render(){
        return( <div className="card">
        <div className="card-header bg-warning header-box">
            <h5 className="card-title">
                Thêm công việc
                    <span
                    className="fa fa-times-circle float-right mr-3 hiddenAdd"
                ></span>
            </h5>
        </div>
        <div className="card-body">
            <form onSubmit={this.onSubmitFrom}>
                <div className="form-group">
                    <label>Tên: </label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={this.onHandleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Trạng thái: </label>
                    <br />
                    <select className="form-control" name="status" onChange={this.onHandleChange}>
                        <option value="true">Kích hoạt</option>
                        <option value="false">Ẩn</option>
                    </select>
                    <br />
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                            <span className="fa fa-plus mr-1"></span> Lưu lại
                            </button>&nbsp;
                            <button type="reset" className="btn btn-outline-primary">
                            <span className="fa fa-close"></span> Hủy bỏ
                            </button>&nbsp;
                        </div>
                </div>
            </form>
        </div>
    </div>)
    }
}
export default AddTodoList

