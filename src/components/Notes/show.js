import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function NotesShow(props){
    const {_id,body,title,category} = props.notes ||{}
    return(
        <div>
          {props.notes?(<div>
          {/* <h1>{_id}</h1> */}
         <u nobr><h3>Title:</h3></u><h4>{title}</h4>
          <h3>Body:</h3><h4>{body}</h4>
          <h3>Categry:</h3><h4>{category.name}</h4>
         <button className="btn btn-link"><Link to="/notes">Back</Link></button> 
         {/* <Link to="/notes">Back</Link> */}
         &nbsp;&nbsp;
         <button className="btn btn-link"><Link to={`/notes/edit/${_id}`}>Edit</Link></button> 
          </div>
          ):(
              <div>Loading.....</div>
          )}
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    const id = props.match.params.id
    return{
        notes:state.notes.find(note=>note._id==id)
    }
}
export default connect(mapStateToProps)(NotesShow)
