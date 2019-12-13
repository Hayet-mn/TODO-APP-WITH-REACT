import React, { Component } from 'react'



class TodoList extends Component {

    
constructor(props) {
    super(props)
    this.state = {
      clicked:false,
      items: [],
      itemText: '',
    }
  }
  


  handleInput = e => {
    e.preventDefault()
    const itemText = e.target.value
    
    this.setState({
        itemText,
    })
  }

  onChange = event =>{
    this.setState({itemText : event.target.value})
   }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.itemText
   
    
    
    if (newItem !== '') {
      
      const items = [ {todo:newItem,complete:false,}, ...this.state.items]
      this.setState({
        items: items,
        itemText: '',
      })
     }
   
    else{
        alert("please enter new task ");

    }
   
    
  }
  deleteItem = key => {
 
    this.setState({
      items: this.state.items.filter((item,i) => i !== key),
    })

  }
 
  
  
   render() {
    return (
      <div >
        <div className="todo-add">
           <h1 >TO-DO App!</h1>
           <h3>Add new To-Do</h3>
            <input placeholder="Enter a new Task..."  value={this.state.itemText} onChange={this.onChange}/>
            <button onClick={this.addItem} className="btn"> Add </button>
       
        </div>
        <div>
        <div className="title" ><h1>Let's get some work done!</h1></div>
            <div className="listeItem">   

            {this.state.items.map((item,index)=>
            <div key={index}> <button className="btn-complete" onClick={()=>this.setState({items:this.state.items.map((el,i)=>i===index?{...el,complete:!el.complete}:el)})}>{item.complete ? 'Undo'  : 'Complete'}</button> 
            <button className="btn-delete" onClick={()=>this.deleteItem(index)} >delete</button>
            <span className="item" style={{textDecoration:item.complete?"line-through":''}}>{item.todo}</span></div>)}

            </div>

        </div>
        
        <div className="pied-page">
      <span>Proudly powered by cosmic JS</span>
    </div>
       
      </div>
    )
  }
}
export default TodoList