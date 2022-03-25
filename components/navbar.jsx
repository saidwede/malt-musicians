import Link from 'next/link';

export default function MasterLayout({ children }) {
  return (
    <div className="tool-bar">
      <Link href="/">
        <a className="logo">Malt Musicians</a>
      </Link>
      <div>
        <Link href="/musicians">
          <a className='link'>Find Musicians</a>
        </Link>
        <Link href="/signup">
          <a className='link'>SignUp</a>
        </Link>
        <Link href="/login">
          <a className='link primary-button'>Login</a>
        </Link>
      </div>
    </div>
  )
}