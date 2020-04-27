import React from "react"

import Button from '../../../components/Common/Button'
import SectionTopContent from '../../../components/Common/SectionTopContent'

import CardList from './CardList'

import * as S from "./styled"

const TopContent = () => (

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
)

export default TopContent 