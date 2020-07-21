import React from 'react'

class TodoHeading extends React.Component{
    render(){
        return(<tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Trạng thái </th>
            <th>Hành Động</th>
            <th>Ghi Chú</th>
        </tr>)
    }
}
export default TodoHeading