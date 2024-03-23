import styles from '../styles/Gallery.module.scss';
import cx from 'classnames';
import 'react-html5video/dist/styles.css'
import { motion } from 'framer-motion';

const Gallery = ({ user }) => {

  const Video = ({ embedId }) => {

    return (
      <div style={{
        overflow: "hidden",
        paddingBottom: "56.25%",
        position: 'relative',
        height: "50vh"
      }}>
        <iframe
          style={{
            left: "6%",
            top: "18%",
            height: "65%",
            width: "90%",
            position: "absolute"

          }}
          width="653"
          height="280"
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope; pictures-in-picture"
          allowFullScreen
          title='Embeded Youtube'
        />
      </div>
    )

  }




  return (
    <motion.div className={cx(styles.events, 'page-transition', 'container')}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <header className={cx('page-header', styles['page-header'])}>
        <h1 className='heading'>
          <span>Gallery</span>
        </h1>
        <div className={cx('subtitle', styles['header-subtitle'])}>
          <h2>April 13-14 2023</h2>
          <div>APEX 2023 in reels</div>
        </div>
      </header>
      <main className={cx(styles['main-content'])}>


        <div className={cx(styles['gallery'])}>
          <div className={cx(styles['h1'])}>
            <h1> APEX 2023 TEASER
            </h1>
            {/* <p>4<sup>th</sup> May</p> */}
          </div>
          <div className='Video'>
            <Video embedId={"CsH8txZE8Nw"} />
          </div>
        </div>
        <br />
        <hr />
        <div className={cx(styles['gallery'])}>
          <div className={cx(styles['h1'])}>
            <h1> APEX 2023 AFTERMOVIE
            </h1>
            {/* <p>4<sup>th</sup> May</p> */}
          </div>
          <div className='Video'>
            <Video embedId={"c7I2DDerO08"} />
        </div>
        </div>
        <br />
        <hr />

      </main>
    </motion.div>
  )
}

export default Gallery;