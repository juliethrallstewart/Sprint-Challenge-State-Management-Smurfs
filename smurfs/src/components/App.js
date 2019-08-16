import React, { useEffect, useState, Component } from 'react';
import './App.css';
import SmurfContext from '../contexts/SmurfContext';
import SmurfsForm from '../components/Form/SmurfsForm';
import axios from 'axios';

function App () {
	// const [ smurfs, setSmurfs ] = useState(null);

	// const [ status, setStatus ] = useState(null);

	// useEffect(() => {
	// 	axios
	// 		.get('http://localhost:3333/smurfs')
	// 		.then(res => {
	// 			setSmurfs(res.data);
	// 		})
	// 		.catch(e => {
	// 			console.log('server error', e);
	// 		});
	// }, []);

	// const addSmurf = smurf => {
	// 	setSmurfs([ ...smurfs, { ...smurf, id: Date.now() } ]);
	// };

	// useEffect(
	// 	() => {
	// 		status && setSmurfs([ ...smurfs, { ...status, id: Date.now() } ]);
	// 	},
	// 	[ status ]
	// );

	// const addSmurf = smurf => {
	// 	axios
	// 		.post('http://localhost:3333/smurfs', { ...smurf })
	// 		.then(res => {
	// 			setStatus(res.data);
	// 		})
	// 		.catch(err => console.log(err.response));
	// };

	// console.log('Smurfs List', smurfs);
	// console.log('Logged status', status);

	return (
		// <SmurfContext.Provider value={smurfs}>
		<div className="App">
			<SmurfsForm />
		</div>
		// </SmurfContext.Provider>
	);
}

export default App;
