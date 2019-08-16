import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form as FormikForm, Field, withFormik } from 'formik';
import Smurfs from '../Smurfs/Smurfs';
import * as Yup from 'yup';

// const SmurfsForm = props => {
// 	console.log(props);
// 	const { addSmurf } = props;
// 	const [ smurf, setSmurf ] = useState(null || { name: '', age: '', height: '' });

// 	const handleChange = event => {
// 		setSmurf({ ...smurf, [event.target.name]: event.target.value });
// 		// console.log('handleChange', event.target.name, event.target.value, smurf);
// 	};
// 	const handleSubmit = event => {
// 		event.preventDefault();
// 		addSmurf(smurf);
// 		setSmurf({ name: '', age: '', height: '' });
// 	};
// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<input placeholder="name" value={smurf.name} name="name" onChange={handleChange} />
// 			<input placeholder="age" value={smurf.age} name="age" onChange={handleChange} />
// 			<input placeholder="height" value={smurf.height} name="height" onChange={handleChange} />
// 			<button type="submit">Add Smurf</button>
// 		</form>
// 	);
// };

// export default SmurfsForm;



const SmurfsForm = (props) => {

    console.log(props)
    const { errors, touched, values, handleSubmit, status } = props;
    
    const [ smurfs, setSmurfs ] = useState(null);

	// const [ status, setStatus ] = useState(null);

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
	// const [
	// 	users,
	// 	setUser
	// ] = useState([]);

	useEffect(
		() => {
			status &&
				setSmurfs(
					...smurfs,
					status
				);
		},
		[
			status
		]
	);

	console.log('this is the status', status);
    console.log('this is the users list', smurfs);

	return (
        <>
        <div className="panel">
		<div className="user-form">
			<h1>Get on the smurf list!!</h1>
			<FormikForm>
				<Field type="text" name="name" placeholder="Name" />
				{touched.name && errors.name && <p className="error">{errors.name}</p>}

				<Field type="text" name="age" placeholder="age" />
				{touched.age && errors.age && <p className="error">{errors.age}</p>}

				<Field type="text" name="height" placeholder="height" />
				{touched.height && errors.height && <p className="error">{errors.height}</p>}

				<button type="submit">Submit!</button>
			</FormikForm>
		</div>
        </div>
        <div className="panel">
            <h1>Smurf Roster</h1>
        <Smurfs smurfs={smurfs} />
        </div>
        </>
	);
};



const FormikUserForm = withFormik({
	mapPropsToValues ({ name, email, terms }) {
		return {
			terms    : terms || false,
			email    : email || '',
            name     : name || '',
		};
	},

	validationSchema : Yup.object().shape({
		name     : Yup.string().required('You cannot pass!!!'),
		age    : Yup.string().required('You want on the Smurf Roster, you gotta give up your age'),
		height : Yup.string().required('Admit your height')
			
	}),

	handleSubmit (values, { setStatus }) {
		axios
			.post('http://localhost:3333/smurfs', values)
			.then((res) => {
				setStatus(res.data);
			})
			.catch((err) => console.log(err.response));
	}
})(SmurfsForm);

export default FormikUserForm;