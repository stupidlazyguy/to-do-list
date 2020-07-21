import React from 'react'

class TodoMenu extends React.Component{
    render(){
        return(<tr>
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
        </tr>)
    }
}
export default TodoMenu