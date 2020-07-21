import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            txtSearch: 'default',
            status: 'true',
            filterName: 'default',
            filterStatus: 0
        }
    }
    onHandleChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value
        this.setState({ [name]: value })
        // console.log(this.state)
    }
    onSubmitFrom = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản lý công việc</h1>
                </div>
                <div className="row">

                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="card">
                            <div className="card-header bg-warning header-box">
                                <h5 className="card-title">
                                    Thêm công việc
                                        <span
                                        className="fa fa-times-circle float-right mr-3"
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
                                                <button type="button" className="btn btn-outline-primary">
                                                <span className="fa fa-close"></span> Hủy bỏ
                                                </button>&nbsp;
                                            </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <button tpye="button" className="btn btn-success mt-3">
                            <span className="fa fa-plus mr-3"></span> Thêm công việc
                        </button>
                        <div className="row ">
                            {/* Search */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="input-group">
                                    <input
                                        name="txtSearch"
                                        className="form-control mt-3"
                                        type="text"
                                        placeholder="Nhập công việc cần tìm ..."
                                        onChange={this.onHandleChange}
                                    />
                                    <span className="input-group-btn mt-3 ml-3">
                                        <button className="btn btn-primary btn-md" type="button">
                                            <span className="fa fa-search mr-3"></span> Tìm
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="dropdown mt-3">
                                    <button
                                        className="btn btn-secondary "
                                        type="button"
                                        id="dropdownMenu1"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                    >
                                        Sắp Xếp <span className="fa fa-caret-square-o-down "></span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li>
                                            {/* <a href={"/"} role="button" className="sort_selected" hr> */}
                                            <span className="fa fa-sort-alpha-asc pr-1 dropdown-item">
                                                Tên A-Z
                                                </span>
                                            {/* </a> */}
                                        </li>
                                        <li>
                                            {/* <a href={"/"} role="button" className="sort_selected"> */}
                                            <span className="fa fa-sort-alpha-desc pr-5 dropdown-item">
                                                Tên Z-A
                                                </span>
                                            {/* </a> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên</th>
                                            <th>Trạng thái </th>
                                            <th>Hành Động</th>
                                            <th>Ghi Chú</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="filterName"
                                                    onChange={this.onHandleChange}
                                                />
                                            </td>
                                            <td>
                                                <select
                                                    type="text"
                                                    className="form-control"
                                                    name="filterStatus"
                                                    onChange={this.onHandleChange}
                                                >
                                                    <option value={-1}>Tất cả</option>
                                                    <option value={0}>Kích Hoạt</option>
                                                    <option value={1}>Ẩn</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td>
                                                <div className="mt-2">Lập trình Web</div>
                                            </td>
                                            <td className="text-center ">
                                                <span className="badge badge-danger mt-2">Kích Hoạt</span>
                                            </td>
                                            <td className="text-center">
                                                <button className="btn btn-info mr-2">
                                                    <span className="fa fa-pencil "></span>Sửa
                                                </button>
                                                <button className="btn btn-info mr-2">
                                                    <span className="fa fa-trash "></span>Xóa
                                                </button>
                                            </td>
                                        </tr>
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
