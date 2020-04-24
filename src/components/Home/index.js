import React from "react"

import SectionTopContent from '../SectionTopContent'
import Button from '../Button'
import CardList from '../CardList'
import HowWeWorkList from '../HowWeWorkList'
import ProjectList from '../ProjectList'

import TestemonialImage from '../../images/testimonial1.png'


import * as S from "./styled"

const Home = () => {
  return (
    <>  
    <div className="container">
      <S.TopContentWrapper>
        <SectionTopContent 
          title="We take digital products from zero to one"
          description="We help you elevate your business by taking your product to the next level through consult and the craft of design."
        />
        <S.ButtonsWrapper>
          <li><Button text="Get in touch" link="/" type="primary"></Button></li>
          <li><Button text="How we work" link="/" type="second"></Button></li>
        </S.ButtonsWrapper>
      </S.TopContentWrapper>
      <CardList/>
    </div>
    
    <S.HowWeWorkWrapper className="section">
      <div className="container">
          <SectionTopContent 
            title="How we work"
            description="We help you elevate your business by taking your product to the next level through consult and the craft of design. We love walking the thin line between stunning and usable products."
          />
          <HowWeWorkList/>
      </div>
    </S.HowWeWorkWrapper>
   
    <S.Projects className="section">
      <div class="container">
        <SectionTopContent 
          title="We build more than just experiences"
          description="Benefit from over 8 years of experience designing and building successful products. From a founder with an idea to product owners at large enterprises and everything in between, the thread that ties them all together is solving meaningful problems with a design-led approach. "
        />
        <ProjectList/>
       </div>
    </S.Projects>
    
    <S.Testimonial className="section">
      <div class="container">
        <S.TestimonialCaseWrapper>
          <S.TestimonialText>
            <S.QuoteSvg/>
            Since the beginning our main goal was to help entrepreneurs build new software solution that matters. 
            Building and shipping products that are helpful for people, making world a better place, for everyone, including ourselves.
          </S.TestimonialText>
          <S.TestemonialInfos>
            <img alt="photo1" src={TestemonialImage}></img>
            <p>Wiktor Schmidt, Executive Chairman</p>
          </S.TestemonialInfos>
        </S.TestimonialCaseWrapper>
        <S.MapSvg/>
      </div>
    </S.Testimonial>

    </>
  )
}

export default Home
