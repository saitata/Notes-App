import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { startSetCategorys } from '../../Actions/categoriesAction'


class NotesForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
          title:this.props.notes?this.props.notes.title:'',
          body:this.props.notes?this.props.notes.body:'',
          category:''
        }
        this.props.dispatch(startSetCategorys())
    }
    
   
   handleChange=(e)=>{
       //this.props.dispatch(startSetCategorys())
       this.setState({
           [e.target.name]:e.target.value
       })
   }

    handleDrop=(e)=>{
       // this.props.dispatch(startSetCategorys())
        this.setState({
            category:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            title:this.state.title,
            body:this.state.body,
            category:this.state.category
        }
        console.log(formData)
        this.props.handleSubmit(formData)
    }
    render(){
        console.log(this.props.category.length)
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label><u>Title:</u></label>&nbsp;
                    <br/>
                    <input type="text" value={this.state.title} name="title" onChange={this.handleChange} />
                    <br/>
                    <label><u>Body:</u></label>&nbsp;
                    <br/>
                    <input type="text" value={this.state.body} name="body" onChange={this.handleChange} />
                    <br/>
                    <label><u>Category:</u></label>&nbsp;
                    <br/>
                    <select value={this.state.category} onChange={this.handleDrop}>
                        <option>--select--</option>
                        {this.props.category.map(category=>{
                            return(
                            <option value={category._id}>{category.name}</option>
                            )
                        })}
                    </select>
                    <br/>
                    <br/>
                    <input className="btn btn-primary" type="submit" value="Submit"  />
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state,props)=>{
   const id = props.match.params.id
   //console.log(id)
    return {
        notes:state.notes.find(note=>note._id==id),
        category:state.category
    }
}

export default withRouter(connect(mapStateToProps)(NotesForm))