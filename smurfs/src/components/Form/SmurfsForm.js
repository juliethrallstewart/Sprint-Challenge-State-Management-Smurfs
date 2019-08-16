import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form as FormikForm, Field, withFormik } from 'formik';
import Smurfs from '../Smurfs/Smurfs';
import * as Yup from 'yup';
import SmurfContext from '../../contexts/SmurfContext'


const SmurfsForm = (props) => {

    const { errors, touched, values, handleSubmit, status } = props;
    
    const [ smurfs, setSmurfs ] = useState('');

	useEffect(() => {
		axios
			.get('http://localhost:3333/smurfs')
			.then(res => {
				setSmurfs(res.data);
			})
			.catch(e => {
				console.log('server error', e);
			});
    }, [status]);
    
	useEffect(
		() => {
			status &&
				setSmurfs({
					...smurfs,
					status
                });
		},
		[
			status
		]
	);

	console.log('this is the status', status);
    console.log('this is the smurfs list', smurfs);

	return (
        <SmurfContext.Provider value={{smurfs}}>

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
        <Smurfs />
        </div>
        </>
        </SmurfContext.Provider>
	);
};



const FormikUserForm = withFormik({
	mapPropsToValues ({ name, age, height }) {
		return {
            name     : name || '',
            age: age || '',
            height: height || '',
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