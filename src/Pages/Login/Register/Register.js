import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [token] = useToken(user);
    const navigate = useNavigate();
    

    const navigateLogin = () =>{
        navigate('/login');
    }

    if(loading){
        return <Loading></Loading>
    }

    if(token){
        navigate('/home');
    }

    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
       console.log('Updated profile');
       //navigate('/home');
    }


    return (
        <div className='register-form'>
        <h2 style={{textAlign: 'center'}}>Please Register</h2>
        <form onSubmit={handleRegister}>
            <input type="text" name="name" id="" placeholder='Your Name'/>
            
            <input type="email" name="email" id="" placeholder='Email Address' required/>
            
            <input type="password" name="password" id="" placeholder='Password' required/>
            <input type="submit" value="Register" />
        </form>
        <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        <SocialLogin></SocialLogin>
    </div>
    );
};

export default Register;