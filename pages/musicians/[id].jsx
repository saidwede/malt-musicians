import Head from 'next/head';
import styles from "./style.module.css";
import {AiFillInstagram, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';

export default function Musician() {
  return (
    <div className='container'>
      <div className='row'>
        <div className={styles.card}>
            <div className=''>
                <img className={styles.barner_img} src="/img/music-barner.png" alt="" />
            </div>
            <div className='row'>
                <div className='col-12 col-xl-3 left-profile'>
                    <img className={styles.profile_pic} src="/img/profile2.png" alt="" />
                    <div className={styles.instrument}>Pianist</div>
                    <div className={styles.name}>FirstName LastName</div>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <div className={styles.socials}>
                        <div className={styles.social}>
                            <AiFillInstagram />
                            
                        </div>
                        <div className={styles.social}>
                            <AiOutlineTwitter />
                        </div>
                        <div className={styles.social}>
                            <AiFillLinkedin />
                        </div>
                    </div>
                </div>
                <div className='col-12 col-xl-9 right-profile'>
                    
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}
