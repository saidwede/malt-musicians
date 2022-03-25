import styles from "./profil-card.module.css";
import { Rate } from 'antd';
import Link from "next/link";

export default function ProfileCard(props) {
    return (
      <>
        <Link href={props.link} >
            <a className="profile-card">
                <img src={props.photo} alt="" />
                <div className={styles.name}>{props.name}</div>
                <div className={styles.instrument}>{props.instrument}</div>
                <Rate disabled allowHalf value={props.rate} />
            </a>
        </Link>
      </>
    )
}