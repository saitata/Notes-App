import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

function CategorysShow(props){
    const {_id, name} = props.category
    return(
        <div>
            {props.category?(<div>
            {/* <h2>{_id}</h2> */}
            <h2>Category Name:{name}</h2>
           <buton className="btn btn-link"><Link to="/category">back</Link></buton> 
           <button className="btn btn-link"><Link to={`/category/edit/${_id}`}>Edit</Link></button> 
                </div>
            ):(
                <div>Loading.....</div>
            )}
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    const id = props.match.params.id
    return {
        category:state.category.find(category=>category._id==id)
    }
}

export default connect(mapStateToProps)(CategorysShow)