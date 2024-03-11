import {data} from "./data";
import FooterList from "../FooterList/FooterList";
import './Footer.css'

function Footer () {
    return (
        <footer className='footer'>
            <div className='footer__left'>
                <div className='footer__left-logo'><a href='#'><img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'/></a></div>
                <button type='button' className='footer__left-btn'><a href='#'>Join the Community</a></button>
            </div>
            <div className='footer__right'>
                {
                    data && data.map (elem => {
                        return <FooterList props={elem} />
                    })
                }
            </div>
        </footer>
    )
}

export default Footer