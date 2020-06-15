import React from 'react'
import Form from './form'
import {connect} from 'react-redux'
import {startCreateNotes} from '../../Actions/notesAction'

function NotesNew(props){
    const handleSubmit=(formData)=>{
       // let id= props.match.params.id
        const redirect=()=>props.history.push('/notes')
        props.dispatch(startCreateNotes(formData,redirect))
    }
    return(
        <div>
            <br/><br/>
            <center>
            <h2>Add Note</h2>
            <br/>
            <Form handleSubmit={handleSubmit}/>
            </center>
        </div>
    )
}
export default connect()(NotesNew)



