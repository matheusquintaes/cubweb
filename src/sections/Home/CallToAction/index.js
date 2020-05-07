import React from "react"

import Button from '../../../components/Common/Button'

import * as S from './styled'

const CallToAction = () => (
      
  <S.CallToAction>
    <div className="container">
      <S.CallToActionWrapper>
        <h3>Hire us to help you build a great application</h3>
        <Button text="Let’s make something great together" link="/" type="primary"></Button>
      </S.CallToActionWrapper>
    </div>
  </S.CallToAction>
)

export default CallToAction 