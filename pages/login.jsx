import Head from 'next/head'
import Barner from '../components/barner';
import ProfileCard from '../components/profil-card';
import {SiGmail} from "react-icons/si";

export default function Login() {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <h1 className="page-title">Login</h1>
        <div className='col-12 col-xl-4 col-lg-5 col-md-6 login-form my-4'>
            <div className='blue-button my-4'>
                <SiGmail /> Login with Gmail
            </div>
            <div className='text-center my-2'>Login with email</div>
            <input type="text" className="rounded-input" placeholder='E-mail' />
            <input type="password" className="rounded-input" placeholder='Password' />
            <button className='primary-button my-2'>
                Login
            </button>
        </div>
      </div>
    </div>
  )
}
