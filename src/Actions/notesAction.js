//import axios from '../config/axios'
import axios from 'axios'
import Swal from 'sweetalert2'

export const SetNotes=(notes)=>{
    return {type:'SET_NOTES', payload:notes}
}

export const startSetNotes=()=>{
    return(dispatch)=>{
        axios.get('http://localhost:3090/notes')
        .then((response)=>{
            const notes = response.data
            dispatch(SetNotes(notes))
             //console.log(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const DeleteNotes=(notes)=>{
    return {
        type:'DELETE_NOTES', payload:notes
    }
}

export const startDeleteNotes=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:3090/notes/${id}`)
            .then((response)=>{
            //console.log(response.data)
               Swal.fire(
                    'Deleted',
                    'The file has been deleted',
                    'success'
                )
                const notes = response.data
                dispatch(DeleteNotes(notes))          
        })
        .catch((err)=>{
          console.log(err)
        })
    }
}

export const CreateNotes=(notes)=>{
    return{
        type:"CREATE_NOTES", payload:notes
    }
}

export const startCreateNotes=(formdata,redirect)=>{
    return(dispatch)=>{
        axios.post('http://localhost:3090/notes/new', formdata)
        .then((response)=>{
            console.log(response.data)
            const notes = response.data
            dispatch(CreateNotes(notes))
            Swal.fire({
                icon:'success',
                title:'Added Note',
                text:'Good Job '

            }
        )
            redirect()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const UpdateNotes=(notes)=>{
    return {
        type:"UPDATE_NOTES", payload:notes
    }
}

export const startUpdateNotes=(id,formdata,redirect)=>{
    return(dispatch)=>{
        axios.put(`http://localhost:3090/notes/${id}`, formdata)
        .then((response)=>{
            //console.log(response.data)
            const notes = response.data
            dispatch(UpdateNotes(notes))
            Swal.fire({
                icon:"success",
                title:'Updated Note',
                text:'Well Done'
            })
            redirect()
        })
    }
}