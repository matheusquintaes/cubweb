import React from "react"

import SectionTopContent from '../../../components/Common/SectionTopContent'
import Button from '../../../components/Common/Button'


import * as S from './styled'

const HireUs = () => (

  <S.HireUs className="section">
    <div className="container">
      <SectionTopContent 
        title="Hire us to help you build a great application"
        description="We'd love to hear more about your product. Let's talk and turn your great idea into something even greater!"
      />
      <S.ButtonsWrapper>
        <li><Button text="Get in touch" link="/" type="primary"></Button></li>
        <li> <a href="/contact ">How we work -></a></li>
      </S.ButtonsWrapper>
    </div>
  </S.HireUs>

)

export default HireUs 