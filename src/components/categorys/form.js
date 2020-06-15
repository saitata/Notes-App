import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class CategoryForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:this.props.category?this.props.category.name:""
        }
    }
    handleChange=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div className="container">
                <br/><br/><br/><br/>
                <center>
                <form >
                    <label><u>Category:</u></label>&nbsp;&nbsp;
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                    <br/>
                    <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                </form>
                </center>
               
            </div>
        )
    }
}

const mapStateToProps=(state,props)=>{
    const id= props.match.params.id
    return{
        category:state.category.find(category=>category._id==id)
    }
}

export default withRouter(connect(mapStateToProps)(CategoryForm))