import React, { useEffect, useState } from 'react'
import Card from '../ads/Card'

const Search = () => {
    const [query, setQuery] = useState("");
    const [ads, setAds] = useState([]);
    console.log(ads);
    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8080/post/ads/${query}`);
            const data = await response.json();
            setAds(data)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="main">
                <div className="search">
                    <input type="search" onChange={(e) => setQuery(e.target.value)} value={query} />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="ad-grid">
                    {
                        ads.length != 0 ? ads.map( ( ele ) => (
                            <Card props={ele} />
                        )) : <div>Search for ads</div>
                    }
                </div>
            </div>
        </>
    )
}

export default Search