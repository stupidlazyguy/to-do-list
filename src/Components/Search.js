import React from 'react'



class Search extends React.Component{

    render(){
        return(<div className="input-group">
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
        </div>)
    }
}

export default Search