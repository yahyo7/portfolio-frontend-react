import React from 'react'
import {motion } from 'framer-motion'

import {images } from '../../constants'
import "./Header.scss"

const scaleVariant = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
      whileInView={{x: [-100, 0], opacity: [0,1] }}
      transition={{duration: 0.5}}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style ={{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Yakhyokhon</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Self-taught Web developer</p>
            <p className='p-text'>Freelancer</p>
          </div>
        </div>

      </motion.div>
      {/* motion 2 */}
      <motion.div
      whileInView={{opacity: [0,1]}}
      transition={{duration: 0.5, delayChildren: 0.5}}
      className='app__header-img'
      >
        <img src={images.profile} alt='profile-bg'/>
        <motion.img
        whileInView={{scale: [0,1]}}
        transition={{duration: 1, ease: "easeInOut"}}
        src={images.circle}
        alt="profile_circle"
        className='overlay_circle'
        />

      </motion.div>
      {/* motion 3 */}
      <motion.div
      variants={scaleVariant}
      whileInView={scaleVariant.whileInView}
      className='app__header-circles'
      >
        {[images.typescript, images.react, images.sass].map((circle, index) => (
          <div
          className='circle-cmp app__flex' key={`circle-${index}`}
          >
            <img src={circle} alt='circle'/>
          </div>
        ) )}
      </motion.div>
    </div>
  )
}

export default Header
