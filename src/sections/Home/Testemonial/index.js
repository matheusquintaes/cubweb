import React from "react"

import TestemonialImage from '../../../images/testimonial1.png'

import * as S from './styled'

const Testemonial = () => (
      
  <S.Testimonial className="section">
    <div className="container">
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
      
)

export default Testemonial 