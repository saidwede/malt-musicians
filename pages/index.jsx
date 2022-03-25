import Head from 'next/head'
import Barner from '../components/barner';
import ProfileCard from '../components/profil-card';

export default function Home() {
  return (
    <>
      <Barner></Barner>
      <section>
        <h2>Recommanded</h2>
        <div className='content'>
          <ProfileCard
            name = "First Name Last Name"
            instrument = "Piano"
            photo = "/img/profile2.png"
            rate = {5} 
            link = "musicians/profile-name" 
          ></ProfileCard>
          <ProfileCard
            name = "First Name Last Name"
            instrument = "Guitar"
            photo = "/img/profile3.png"
            rate = {4} 
            link = "musicians/profile-name" 
          ></ProfileCard>
          <ProfileCard
            name = "First Name Last Name"
            instrument = "Piano"
            photo = "/img/profile1.png"
            rate = {4.5} 
            link = "musicians/profile-name" 
          ></ProfileCard>
          <ProfileCard
            name = "First Name Last Name"
            instrument = "Guitar"
            photo = "/img/profile4.png"
            rate = {5}  
            link = "musicians/profile-name" 
          ></ProfileCard>
          <ProfileCard
            name = "First Name Last Name"
            instrument = "Piano"
            photo = "/img/profile5.png"
            rate = {4}  
            link = "musicians/profile-name" 
          ></ProfileCard>
        </div>
      </section>
    </>
  )
}
