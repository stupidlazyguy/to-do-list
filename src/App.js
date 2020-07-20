import React from 'react';

class App extends React.Component {
   
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
                                    <form>
                                        <div className="form-group">
                                            <label>Tên: </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Trạng thái: </label>
                                            <br/>
                                            <select className="form-control" name="status">
                                                <option value="true">Kích hoạt</option>
                                                <option value="false">Ẩn</option>
                                            </select>
                                            <br/>
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
                        <div className="row">
                            {/* Search */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div class="input-group">
                                    <input
                                        name="keyword"
                                        className="form-control mt-3"
                                        type="text"
                                        placeholder="Nhập công việc cần tìm ..."
                                    />
                                    <span className="input-group-btn mt-3 ml-1">
                                        <button className="btn btn-primary btn-md" type="button">
                                            <span className="fa fa-search mr-3"></span> Tìm
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            

            </div>
        )
    }
}

export default App;
