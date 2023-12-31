import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import '../styles/BlockSection.css'

const BlockSection = ({
  lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) => {
  return (
    <>
      <div className={lightBg ? 'home__block-section' : 'home__block-section darkBg'}>
        <div className='container'>
          <div className="row home__block-row" 
          style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
            <div className="col">
              <div className='home__block-text-wraper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                <p className={lightTextDesc ? 'home__block-subtitle' : 'home__block-subtitle dark'}>{description}</p>
                <Link to='/sign-up'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__block-img-wrapper">
                <img src={img} alt={alt} className="home__block-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlockSection;