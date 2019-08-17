import React, { useEffect, useState, Component } from 'react';
import './App.css';
import SmurfContext from '../contexts/SmurfContext';
import SmurfsForm from '../components/Form/SmurfsForm';
import axios from 'axios';
import Smurfs from '../components/Smurfs/Smurfs';

//project using formik:

// function App () {
// 	return (
// 		<div className="App">
// 			<SmurfsForm />
// 		</div>
// 	);
// }

// export default App;

//project without formik

function App () {
	const [ smurfs, setSmurfs ] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:3333/smurfs')
			.then(res => {
				setSmurfs(res.data);
			})
			.catch(e => {
				console.log('server error', e);
			});
	}, []);

	const addSmurf = smurf => {
		axios
			.post('http://localhost:3333/smurfs', smurf)
			.then(res => {
				setSmurfs(res.data);
			})
			.catch(err => console.log(err.response));
	};

	console.log('Smurfs List', smurfs);

	return (
		<SmurfContext.Provider value={{ smurfs }}>
			<div className="App">
				<SmurfsForm addSmurf={addSmurf} />
				{console.log('getting mah smurfs', smurfs)}
				<div>
					<Smurfs />
				</div>
			</div>
		</SmurfContext.Provider>
	);
}

export default App;
