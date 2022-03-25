import Head from 'next/head'
import Barner from '../components/barner';
import ProfileCard from '../components/profil-card';
import {SiGmail} from "react-icons/si";

export default function Signup() {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <h1 className="page-title">Find Musicians</h1>
        <section>
        <div className='content'>
          <ProfileCard
            name = "First Name Last Name"
            instrument = "Piano"
            photo = "/img/profile2.jpg"
            rate = {5}
            link = "musicians/profile-name"  
          ></ProfileCard>
          <ProfileCard
            name = "First Name Last Name"
            instrument = "Guitar"
            photo = "/img/profile3.jpg"
            rate = {4}
            link = "musicians/profile-name"  
          ></ProfileCard>
          <ProfileCard
            name = "First Name Last Name"
            instrument = "Piano"
            photo = "/img/profile1.jpg"
            rate = {4.5}
            link = "musicians/profile-name"  
          ></ProfileCard>
          <ProfileCard
            name = "First Name Last Name"
            instrument = "Guitar"
            photo = "/img/profile4.jpg"
            rate = {5}
            link = "musicians/profile-name"  
          ></ProfileCard>
          <ProfileCard
            name = "First Name Last Name"
            instrument = "Piano"
            photo = "/img/profile5.jpg"
            rate = {4}
            link = "musicians/profile-name"  
          ></ProfileCard>
        </div>
      </section>
      </div>
    </div>
  )
}
