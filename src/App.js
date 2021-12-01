import React, {Component} from "react";
import CardList from "./components/card/CardList";
import Searchbox from "./components/search-box/Searchbox";



class App extends Component{
  constructor(){
    super()

    this.state={
      plants:[],
      searchField:''
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response=>response.json())
  .then(posts=>this.setState({plants:posts}))
}
  render(){
    const{plants,searchField}=this.state;
    const filterName=plants.filter(plant=>plant.title.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div>
      <h1 className='title'>Plant Pedia</h1>
      <Searchbox handleChange={(e)=>this.setState({searchField:e.target.value})} placeholder='Search Plant Name'/>
      <CardList plants={filterName} >
      </CardList>
      </div>
    )
  }
 
}

export default App