import { useState } from "react"
import { SearchCard } from "./SearchCard"
import { SearchForm } from "./SearchForm"


export const Search = () => {


    const [search, setsearch] = useState('')

  return (

    <>
    
    <SearchForm setsearch= {setsearch}/>
    <SearchCard search={search}/>
    
    </>
  )
}
