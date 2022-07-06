import { Component  } from 'react'

class SearchBox extends Component{
  render(){
    const {onSearchChange} = this.props
    return(
        <input className="search-box" type="search" onChange={onSearchChange} />
      )
  }
}

export default SearchBox