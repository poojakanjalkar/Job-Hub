import React from 'react'
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Link } from 'react-router-dom';
import FormRow from '../components/FormRow';

export default function Register() {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" />
        <FormRow type="text" name="lastName" labelText="last name" />
        <FormRow type="text" name="location" />
        <FormRow type="email" name="email" />
        <FormRow type='password' name='password' />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}
