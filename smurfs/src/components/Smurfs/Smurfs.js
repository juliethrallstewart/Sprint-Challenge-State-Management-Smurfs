import React, { useContext } from 'react';
import SmurfContext from '../../contexts/SmurfContext';
import './smurfs.css'

	const Smurfs = (props) => {
        const { smurfs } = useContext(SmurfContext)
        
	    return (
	        <>
	        <div className="smurf-list">
	        {smurfs.map((item) => {
	                return (
                    <div key={item.id} className="smurf-container">
                    <p><span>Name:</span> {item.name}</p>
                    <p><span>Age:</span> {item.age}</p>
                    <p><span>Height:</span> {item.height}</p>
                    </div>
            )})}
	        </div>
	        </>
	    )
	}

export default Smurfs;
