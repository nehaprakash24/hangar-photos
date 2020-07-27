import React from 'react'

function SearchInput(props) {
  return (
    <form className = "row mx-0 px-2" onSubmit = {props.getSearchItems}>
      <label htmlFor = "search">
        <h4 className = "letter-spacing font-weight-bold"> Search </h4>
      </label>
      <div className = "input-group mb-3">
        <input 
          type = "text" 
          autoComplete="off" 
          value = {props.searchValue} 
          onChange = {e => props.setSearchVal(e.target.value)} 
          placeholder = "Photos ..." 
          className = "form-control d-flex border border-dark rounded-0 rounded-lg py-4" 
          autoFocus id = "search"
        />
      </div>
    </form>
  )
}

export default SearchInput
