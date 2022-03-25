import MasterLayout from '../components/MasterLayout';
//import 'antd/dist/antd.css';
import "../public/css/global.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <MasterLayout>
      <Component {...pageProps} />
    </MasterLayout>
  )
}