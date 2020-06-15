import React from 'react'
import {connect} from 'react-redux'
import {startSetCategorys,startDeleteCategory} from '../../Actions/categoriesAction'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
//import EditCategory from './edit'

function CategorysList(props){
    if(props.category.length==0){
        props.dispatch(startSetCategorys())
    }
    const handleShow=(id)=>{
        props.history.push(`/category/show/${id}`)
    }
    // var i= false
    // const handleEdit=(id)=>{
    //    i= true 
    // }
    const handleRemove=(id)=>{
        Swal.fire({
            title:'Are you sure to remove this',
            text:"Youn wont be able to recover this",
            icon:"warning",
            showCancelButton:true,
            confirmButtonText:"Yes, delete it",
            cancelButtonText:"No, keep it"
        }).then((result)=>{
            if(result.value){
                props.dispatch(startDeleteCategory(id))
            }
        })
       
    }
    return(
        <div className="container">
            <h2>Categories {props.category.length}</h2>
            
                {props.category.map(category=>{
                    return(
                        <div className="alert alert-success" role="alert">
                            <ul key={category._id} className="list-group">
                         <li  className="list-group-item"><strong>{category.name} </strong>
                         <br/>
                         <button className="btn btn-primary" onClick={()=>{handleShow(category._id)}}>Show</button>
                         &nbsp;&nbsp;
                        
                         <button className="btn btn-danger" onClick={()=>{handleRemove(category._id)}}>Remove</button></li>
                         </ul>
                        </div>
                    )
                })}
            
            <button className="btn btn-link"><Link to="/category/new" >Add Category</Link></button>
            
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        category:state.category
    }
}

export default connect(mapStateToProps)(CategorysList)
