import React from 'react'
import Form from './form'
import {startUpdateNotes} from '../../Actions/notesAction'
import {connect} from 'react-redux'

function NotesEdit(props){
    const handleSubmit=(formData)=>{
        let id= props.match.params.id
        const redirect=()=>props.history.push('/notes')
        props.dispatch(startUpdateNotes(formData,id,redirect))
    }
    return(
        <div>
            <h2>Edit Note</h2>
            <Form handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect()(NotesEdit)



