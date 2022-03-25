import Link from 'next/link';

export default function Barner() {
    return (
      <>
        <div className="barner">
            <div className='left'>
                <div>
                    <div className="title">Find out Talented</div>
                    <div className="musician">Musician</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <div className='actions'>
                        <Link href="/all-musicians">
                            <a className='secondary-button'>Find Musicians</a>
                        </Link>
                        <Link href="/all-musicians">
                            <a className='primary-button'>Earn Money</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='right'>
                <img src="/img/barner-musician.jpg" alt="" />
            </div>
        </div>
      </>
    )
}
  