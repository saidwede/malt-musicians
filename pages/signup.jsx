import Head from 'next/head'
import Barner from '../components/barner';
import ProfileCard from '../components/profil-card';
import {SiGmail} from "react-icons/si";

export default function Signup() {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <h1 className="page-title">SignUp</h1>
        <div className='col-12 col-xl-4 col-lg-5 col-md-6 login-form my-4'>
            <div className='blue-button my-4'>
                <SiGmail /> Signup with Gmail
            </div>
            <div className='text-center my-2'>Signup with email</div>
            <input type="text" className="rounded-input" placeholder='E-mail' />
            <input type="password" className="rounded-input" placeholder='Password' />
            <input type="password" className="rounded-input" placeholder='Confirm Password' />
            <button className='primary-button my-2'>
                Signup
            </button>
        </div>
      </div>
    </div>
  )
}
