import React from "react"

import Button from '../../../components/Common/Button'

import * as S from './styled'

const CallToAction = () => (
      
  <S.CallToAction>
    <div class="container">
      <S.CallToActionWrapper>
        <h3>Have a project in mind?</h3>
        <Button text="Let’s get to work" link="/" type="outline"></Button>
      </S.CallToActionWrapper>
    </div>
  </S.CallToAction>
)

export default CallToAction 