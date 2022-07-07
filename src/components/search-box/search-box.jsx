import { Component  } from 'react'

import '../../css/searchBox.css'


class SearchBox extends Component{
  render(){
    const {onSearchChange, placeholder,className}=this.props
    //distructure here if you want 
    return(
        <input className={className} type="search" onChange={onSearchChange} placeholder={placeholder}/>
      )
  }
}

export default SearchBox