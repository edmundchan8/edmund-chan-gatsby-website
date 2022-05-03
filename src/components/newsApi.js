import React, { useEffect, useState } from 'react'

function NewsApi() {
    const [query, setQuery] = useState();
    const [newQuery, setNewQuery] = useState('money');
    const [totalResults, setTotalResults] = useState(0);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState("2022-05-03");
    

    function handleChange(event){
        setQuery(event.target.value);
    }

    function handleDateChange(event){
        setDate(event.target.value);
    }

    function handleSubmit(event){
        setNewQuery(query);
        //event.preventDefault();
    }

    useEffect(() => {
        const axios = require("axios");
        const options = {
            headers: {
                'X-Api-Key': '5831942ed45a4706a7c5d3767b66d544'
            },
            method: 'GET',
            url: 'https://newsapi.org/v2/everything',
            params: {
                q: newQuery,
                searchIn: "content",
                from: date,
                language: "en",
                pageSize: "30"
            }
        };
    
        axios.request(options).then(function (response) {
            setTotalResults(response.data.totalResults);
            console.log(response.data['articles'][0]);
            setTitle(response.data['articles'][0]['title']);
            setDescription(response.data['articles'][0]['description']);
        }).catch(function (error) {
            console.error(error);
        });
    }, [newQuery])
    
    return (
        <div>
            <p>Total Results: {totalResults}</p>
            <h4>{title}</h4>
            <p>{description}</p>

            <h4>Enter a date (YYYY-MM-DD)</h4>
            <label>Date: 
                <input type="text" name="date-input" value={date} onChange={handleDateChange} />
            </label>

            <h4>Enter a query term to search for</h4>
            <label>Query: 
                <input type="text" name="query-input" value={query} onChange={handleChange} />
            </label>
            <button onClick={handleSubmit}>Update</button>
        </div>
    )
}

export default NewsApi