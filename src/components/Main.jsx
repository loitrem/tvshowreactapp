import React from 'react'
import {useState, useEffect} from "react";
import axios from 'axios';


function Main () {

    
      // loaded function for when data is fetched
    const loaded = () => {
        let summary=data.summary
        return (
            <div className='mainWrapper'>
                <div className='main'>
                    <div className='left'>
                        <div className='mainImage'><img src={data.image.medium} alt="" /></div>
                    </div>
                    <div className='right'>
                        <div className='name'><h1>{data.name}</h1></div>
                        <div className='premiered'><h3>Premiered: {data.premiered}</h3></div>
                        <div className='ratingRuntime'>Rating: {data.rating.average + " " + "Runtime: " + data.runtime}</div>
                        <div className='statusType'>Status: {data.status + " " + "Type: " + data.type}</div>
                        <div className='summary'>
                            Summary: <div dangerouslySetInnerHTML={ { __html: summary} }></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
        // Function for when data doesn't exist
    const loading = () => {
        return <h1>Loading...</h1>;
    };
    
    // if coin has data, run the loaded function, otherwise, run loading
    return data && data.name ? loaded() : loading();
};

export default Main