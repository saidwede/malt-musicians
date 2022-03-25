import Link from 'next/link';
import styles from "./footer.module.css";
import {AiOutlineTwitter, AiFillYoutube, AiFillInstagram} from "react-icons/ai";

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.logo}>Malt Musicians</div>
        <div className={styles.center}>
            <div className={styles.links}>
                <Link href="/all-musicians">
                    <a className={styles.link}>Find Musicians</a>
                </Link>
                <Link href="/signup">
                    <a className={styles.link}>SignUp</a>
                </Link>
                <Link href="/login">
                    <a className={styles.link}>Login</a>
                </Link>
            </div>
            <div>
                2022 Malt Musicians. All right reserved.
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.socials}>
                <AiOutlineTwitter className={styles.icon} />
                <AiFillYoutube className={styles.icon} />
                <AiFillInstagram className={styles.icon} />
            </div>
            <div>
                support:malt-musicians@gmail.com
            </div>
        </div>
        <div></div>
    </div>
  )
}