import Head from 'next/head';
import styles from "./style.module.css";
import {AiFillInstagram, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';
import Kalend, { CalendarView } from 'kalend'; // import component
import 'kalend/dist/styles/index.css';
const events = [
    {
        id: 1,
        startAt: '2022-03-24T18:00:00.000Z',
        endAt: '2022-03-30T19:00:00.000Z',
        timezoneStartAt: 'Europe/Berlin', // optional
        summary: 'Concert',
        color: 'blue',
        calendarID: 'work'
    },
    {
        id: 2,
        startAt: '2022-04-04T18:00:00.000Z',
        endAt: '2022-04-09T19:00:00.000Z',
        timezoneStartAt: 'Europe/Berlin', // optional
        summary: 'Concert II',
        color: 'blue',
    }
]
export default function Musician() {
  return (
    <div className='container'>
      <div className='row'>
        <div className={styles.card}>
            <div className=''>
                <img className={styles.barner_img} src="/img/music-barner.jpg" alt="" />
            </div>
            <div className='row'>
                <div className='col-12 col-xl-3 left-profile'>
                    <img className={styles.profile_pic} src="/img/profile2.jpg" alt="" />
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
                    <Kalend
                        events={events}
                        initialDate={new Date().toISOString()}
                        hourHeight={60}
                        initialView={CalendarView.WEEK}
                        disabledViews={[CalendarView.DAY]}
                        timeFormat={'24'}
                        weekDayStart={'Monday'}
                        calendarIDsHidden={['work']}
                        language={'en'}
                    />
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}
