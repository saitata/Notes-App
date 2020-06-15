import React from 'react'
import CategoryForm from './form'
import {connect} from 'react-redux'
import {startAddCategory} from '../../Actions/categoriesAction'

function AddCategory(props){
    const handleSubmit=(formData)=>{
      const redirect=()=>props.history.push('/category')
      props.dispatch(startAddCategory(formData,redirect))
    }

    return(
        <div>
            <br/>
            <br/>
           <center><h3>Add Category</h3></center> 
            <CategoryForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect()(AddCategory)