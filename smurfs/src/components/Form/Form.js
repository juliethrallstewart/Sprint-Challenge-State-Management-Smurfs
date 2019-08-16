import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form as FormikForm, Field, withFormik } from 'formik';
import Users from './Users';
import * as Yup from 'yup';

// const Form = ({ errors, touched, values, handleSubmit, status }) => {

const Form = (props) => {

    console.log(props)
    const { errors, touched, values, handleSubmit, status } = props;
    
	const [
		users,
		setUser
	] = useState([]);

	useEffect(
		() => {
			status &&
				setUser([
					...users,
					status
				]);
		},
		[
			status
		]
	);

	console.log('this is the status', status);
    console.log('this is the users list', users);

	return (
        <>
        <div className="panel">
		<div className="user-form">
			<h1>User Onboarding</h1>
			<FormikForm>
				<Field type="text" name="name" placeholder="Name" />
				{touched.name && errors.name && <p className="error">{errors.name}</p>}

				<Field type="text" name="age" placeholder="age" />
				{touched.email && errors.email && <p className="error">{errors.email}</p>}

				<Field type="text" name="height" placeholder="height" />
				{touched.email && errors.email && <p className="error">{errors.email}</p>}

				<button type="submit">Submit!</button>
			</FormikForm>
		</div>
        </div>
        <div className="panel">
            <h1>User List</h1>
        <Users users={users} />
        </div>
        </>
	);
};



const FormikUserForm = withFormik({
	mapPropsToValues ({ name, email, id, terms }) {
		return {
			terms    : terms || false,
			email    : email || '',
            name     : name || '',
            id: date.now() || '',
		};
	},

	validationSchema : Yup.object().shape({
		name     : Yup.string().required('You cannot pass!!!'),
		age    : Yup.string().email('Enter a VALID email').required('You want in, you gotta pay to play'),
		height : Yup.string().min(6, 'Password has to be longer than 6 characters').required('Cannot pass'),
			
	}),

	handleSubmit (values, { setStatus }) {
		axios
			.post('https://reqres.in/api/users/', values)
			.then((res) => {
				setStatus(res.data);
			})
			.catch((err) => console.log(err.response));
	}
})(Form);

export default FormikUserForm;
