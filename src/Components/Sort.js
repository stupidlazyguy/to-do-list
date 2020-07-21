import React from 'react'



class Sort extends React.Component{

    render(){
        return(<div className="dropdown mt-3">
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
        </div>)
    }
}
export default Sort