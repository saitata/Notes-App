import React from 'react'
import {BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import {NavItem, NavLink, Nav, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import NotesList from './components/Notes/notes'    
import NotesShow from './components/Notes/show'
import NotesNew from './components/Notes/Add'
import NotesEdit from './components/Notes/Edit'
import CategorysList from './components/categorys/List'
import CategorysShow from './components/categorys/Show'
import EditCategory from './components/categorys/edit'
import AddCategory from './components/categorys/new'
import Home from './components/home'

function App(){
    return (
        <BrowserRouter>
          <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Breadcrumb>
              <BreadcrumbItem>
                  <h2>Notes App</h2>
              </BreadcrumbItem>
            </Breadcrumb>
            <Nav tabs>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
              <NavItem>
                    <NavLink href="/notes">Notes</NavLink>
              </NavItem>
              <NavItem>
                    <NavLink href="/category">Category</NavLink>
              </NavItem>
            </Nav>
           

           
            
            </nav>

            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/notes" component={NotesList} exact={true}/>
                <Route path="/notes/show/:id"  component={NotesShow}/>
                <Route path="/notes/new" component={NotesNew} />
                <Route path="/notes/edit/:id" component={NotesEdit}/>

                <Route path="/category"  component={CategorysList} exact={true}/>
                <Route path="/category/show/:id" component={CategorysShow} />
                <Route path="/category/edit/:id" component={EditCategory}/>
                <Route path="/category/:id" component={AddCategory}/>
            </Switch>
          </div>
        </BrowserRouter>
      
    )
}

export default App