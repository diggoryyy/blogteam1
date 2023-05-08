import React, { useState } from 'react'
// import {BiSearchAlt2} from 'react-icons/bi'
import {  useNavigate } from "react-router-dom";
const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate =useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault() ; 
        if(searchTerm){
            navigate(`/?search=${searchTerm}`)
        }

        setSearchTerm("")
    }

  
    return (
     
        <form
            className="search-form"
            onSubmit={handleSubmit}
            
        >
            <input
                type="text"
                name="search"
                placeholder="Tìm kiếm..."
                className=" m-4"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                style={{backgroundColor:'#CACACA',color:'black'}}
            />

            <button  style={{backgroundColor:'#CACACA'}}  type="submit" className={searchTerm.trim() ? 'searchBtn' : 'disBtn'}  > <i style={{backgroundColor:'#CACACA',padding:'8px 15px',color:'black'}} className="iconsearch fa-solid fa-magnifying-glass"></i> </button>
        </form>
    )
}

export default SearchForm