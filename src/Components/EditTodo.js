import React from 'react'


class EditTdo extends React.Component{


    render(){
        return (<div className="card">
            <div className="card-header bg-danger edit-box">
                <h5 className="card-title icon-edit-title">
                    <span className="fa fa-times-circle icon-edit"></span> 
                        <p >Chỉnh sửa công việc</p>
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
                                <span className="fa fa-plus mr-1"></span> Chỉnh sửa
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

export default EditTdo