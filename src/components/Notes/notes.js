import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import {startSetNotes,startDeleteNotes} from '../../Actions/notesAction'
//import {startSetCategorys} from '../../Actions/categoriesAction'


function NotesList(props){
    if(props.notes.length==0){
        console.log('1')
        props.dispatch(startSetNotes())
        //props.dispatch(startSetCategorys())
    }
   const handleShow=(id)=>{
        props.history.push(`/notes/show/${id}`)
   }
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
            props.dispatch(startDeleteNotes(id))
        }
    })
      
   }
    return (
        <div className="container">
            <h1>Notes -{props.notes.length}</h1>
                                {props.notes.map(note=>{
                                     return (
                                        <div className="alert alert-success" role="alert">
                                             <ul className="list-group">
                                        <li className="list-group-item"><u>Title:</u>&nbsp;{note.title}</li>
                                        <li className="list-group-item"><u>Body:</u>&nbsp;{note.body}</li>
                                     <li className="list-group-item"><u>Category:</u>&nbsp;{note.category.name}</li>
                                       
                                    </ul>
                                    <button className="btn btn-primary" onClick={()=>{handleShow(note._id)}}>SHOW</button>
                                         &nbsp;&nbsp;
                                        <button className="btn btn-danger" onClick={()=>{handleRemove(note._id)}}>REMOVE</button>
                                        </div>
                                   )
                                })}
            
               
            <button className="btn btn-link"><Link to="/notes/new" >Add Notes</Link></button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        notes:state.notes,
        //category:state.category
    }
}

export default connect(mapStateToProps)(NotesList)