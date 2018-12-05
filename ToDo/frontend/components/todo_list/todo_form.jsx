import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
  }
  
  uniqueID() {
    return new Date().getTime();
  }
  
  handleSubmit(e) {
    e.preventDefault();
    // What default behavior do we prevent?
    const todo = Object.assign({}, this.state, {id: uniqueID()} );
    this.props.receiveToDo(todo);
    
    
  }
  setTitle(e){
    this.setState({
      title:e.target.value
    });
  }
  setBody(e){
    this.setState({
      body:e.target.value
    });
  }
  
  render() {
    const {title,body}=this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          
        <label> 
          Title:<input type="text" onChange={this.setTitle} value={title}  />
        </label>
          
        <label> 
          Body:<input type="text" onChange={this.setBody}  value={body}/>
        </label>
        
        <button type="button" name="button">Create To Do!</button>
          
        </form>
      </div>
    );
  }
}

export default TodoForm;