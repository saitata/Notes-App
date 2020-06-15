import React from 'react'
import CategoryForm from './form'
import {connect} from 'react-redux'
import {startUpdateNotes} from '../../Actions/categoriesAction'

function EditCategory(props){
    const handleSubmit=(formData)=>{
        const id=props.match.params.id
       const redirect=()=>props.history.push('/category')
         props.dispatch(startUpdateNotes(formData,id,redirect))
    }
    return(
        <div>
            <center><h1>Edit category</h1></center>
            <CategoryForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect()(EditCategory)