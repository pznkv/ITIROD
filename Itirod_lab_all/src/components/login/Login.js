import {useState} from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';

import './login.scss';

const Logins = () => {
    const [name, setName] = useState('qwe');
    const [password, setPassword] = useState('123')
    
    console.log(name);
    console.log(password);
    return(
        <>
            <Formik
                initialValues = {{
                    userName: '',
                    userPassword: ''
                }}
                validationSchema = {Yup.object({
                    userName: Yup.string().required('This field is required'),
                    userPassword: Yup.string().required('This field is required')

                })}
                onSubmit = { ({userName, userPassword}) => {
                    setName(userName);
                    localStorage.setItem('userName', {userName});
                    localStorage.setItem('password', {password})

                    setPassword(userPassword);


                }}
            >
                <Form>
                    
                    <div className="login">
                        <Field 
                            className="login__form"
                            id="userName" 
                            name='userName' 
                            type='text' 
                            placeholder="Enter your name"/>
                        <Field 
                            id="password" 
                            name='password' 
                            type='password' 
                            placeholder="password"
                            className="login__form"
                        />
                        <button 
                            type='submit' 
                            className="button button__main"
                        >
                        <div className="inner">Sign up</div>
                        </button>
                    </div>
                    
                </Form>
            </Formik>
        </>
    )
}

export default Logins;