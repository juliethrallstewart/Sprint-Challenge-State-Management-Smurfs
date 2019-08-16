import React from 'react';


const Smurfs = (props) => {
    return (
        <>
        <div className="user-list">
        {props.smurfs.map((item) => {
                // return <p>{item.name}</p>;
                return <p>{item.name}</p>
			})}
        </div>
        </>
    )
}

export default Smurfs;