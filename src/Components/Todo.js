import React from 'react'


class Todo extends React.Component{
    render(){
        return(<tr>
            <td className="text-center"><div className="mt-2">1</div></td>
            <td>
                <div className="mt-2">Lập trình Web</div>
            </td>
            <td className="text-center ">
                <span className="badge badge-success mt-2">Kích Hoạt</span>
            </td>
            <td className="text-center">
                <button className="btn btn-info mr-2">
                    <span className="fa fa-pencil "></span>Sửa
                </button>
                <button className="btn btn-info mr-2">
                    <span className="fa fa-trash "></span>Xóa
                </button>
            </td>
        </tr>)
    }
}
export default Todo