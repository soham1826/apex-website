import styles from '../styles/Footer.module.scss';
import logo from '../media/Apex-logo.png';
// import echoOfArunachal from '../media/logo/echo_arunachal.png'
// import hotelObsidianBlue from '../media/logo/hotel-obsidian-blue.png'
// import bye from '../media/bye.png';
import radio from "../media/radio.jpeg"
import rubcon from "../media/rubcon.jpeg"
import sabedor from "../media/sabedor.jpeg"
import shivendu from "../media/shivendu.png"
import bluribbon from "../media/blueribbon.png"
import Avani from "../media/avani.jpeg"

import cx from 'classnames'
import { ReactComponent as MailIcon } from '../media/icons/mail.svg';
import { ReactComponent as WAIcon } from '../media/icons/wa.svg';
import { useState } from 'react';

const Footer = () => {
  const [devTeam, setDevTeam] = useState(false);

  return (
    <footer className='container'>
      <div className={styles.MainFooterContent}>
        <div className={cx(styles.footerItems)} id="footerContent">
          {/* <div className={styles.QuotesContainer}>
            <div className={styles.quotes}>Our cultural fest is a mosaic of traditions, where stories unfold, and memories are made</div>
          </div> */}

          <div>
            <div className={styles.LogoContainer}>
              <img src={logo} alt=""></img>
              {/* <div className={styles.title}>APEX 3.0</div> */}
            </div>
            <p style={{ textAlign: "center", fontSize: '2rem' }}>Our Sponsors</p>
            <div className={styles.sponsorContainer}>
              <div className={styles.sponsorLogoContainer}>
              <img className={styles.sponsorLogo} src={rubcon} alt=""></img>
              <img className={styles.sponsorLogo} src={radio} alt=""></img>
              </div>
              <div className={styles.sponsorLogoContainer}>
              <img className={styles.sponsorLogo} src={shivendu} alt=""></img>
              <img className={styles.sponsorLogo} src={sabedor} alt=""></img>
              </div>
              <div className={styles.sponsorLogoContainer}>
              <img className={styles.sponsorLogo} src={bluribbon} alt=""></img>
              <img className={styles.sponsorLogo} src={Avani} alt=""></img>
              </div>
            </div>
          </div>
          {/* <div className={styles['sponsor-wrapper']}>
            <div className={styles.sponsor}>
              <p style={{ textAlign: "center", fontSize: '1.2rem' }}>Our Sponsors</p>
              <div className={styles.sponsorImgs}>
                <img className={styles.sponsors} src={echoOfArunachal} alt=""></img>
                <img className={styles.sponsors} src={hotelObsidianBlue} alt=""></img>
              </div>
            </div>
          </div> */}
        </div>
        <div className={styles.footerItems}>
          

          <div className={styles.thanks}>
            <span>Thank you</span>
            <br />
            <span>for your support</span>
          </div>
          <div>
            {/* <img src={bye} style={{ height: "160px", width: "auto" }} alt=""></img> */}
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.team}>
          <span>
            Handcrafted with 🖤 by 
            <a href='https://github.com/soham1826'> Soham </a>
            &
            <a href='https://github.com/Everest1508'> Ritesh</a>
            {/* <button className={cx(styles.devteamBtn, {
              [styles.on]: devTeam
            })} onClick={(e) => { e.preventDefault(); setDevTeam(!devTeam) }}>
            </button> */}
          </span>
          <span className={styles.sep}>~</span>
          <span>&copy; 2024 APEX Showdown SITRC</span>
          {/* {devTeam && (
            <ul className={styles.devteam}>
              <li><a className={cx('link', styles.ln)} target='_blank' rel='noreferrer' href="https://github.com/tripathics">@tripathics</a></li>
              <li><a className={cx('link', styles.ln)} target='_blank' rel='noreferrer' href="https://github.com/pursottam6003">@pursottam6003</a></li>
            </ul>
          )} */}
        </div>
      </div>
    </footer>
  )
}

export default Footer