import axios from 'axios'
import Swal from 'sweetalert2'

export const setCategory=(category)=>{
    return{
        type:'SET_CATEGORY', payload:category
    }
}

export const startSetCategorys=()=>{
    return(dispatch)=>{
        axios.get('http://localhost:3090/category')
        .then((response)=>{
            //console.log(response.data)
            const category= response.data
            dispatch(setCategory(category))
        })
    }
}
export const Addcategory=(category)=>{
    return{
        type:"ADD_CATEGORY", payload:category
    }
}

export const startAddCategory=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post(`http://localhost:3090/category`, formData)
        .then((response)=>{
            const category = response.data
            dispatch(Addcategory(category))
            redirect()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const deleteCategory=(category)=>{
    return{
        type:'DELETE_CATEGORY', payload:category
    }
}

export const startDeleteCategory=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:3090/category/${id}`)
        .then((response)=>{
            Swal.fire(
                'Deleted',
                'The file has been deleted',
                'success'
            )
            const category = response.data
            dispatch(deleteCategory(category))
        })
    }
}

export const updateCategory=(category)=>{
    return({
        type:'UPDATE_CATEGORY', payload:category
    })
}

export const startUpdateNotes=(formData,id,redirect)=>{
    return(dispatch)=>{
        axios.put(`http://localhost:3090/category/edit/${id}`, formData)
        .then((response)=>{
            // console.log(response.data)
            const category = response.data
            dispatch(updateCategory(category))
            redirect()
        })
    }
}
