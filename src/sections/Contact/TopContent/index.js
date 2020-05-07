import React from "react"

import SectionTopContent from '../../../components/Common/SectionTopContent'
import * as S from "./styled"

const TopContent = () => (

  <div className="container">
    <S.TopContentWrapper>
      <SectionTopContent 
        title="Tell us about your idea, and we'll make it a reality together"
        description="We’re based in New Zealand. Get in touch and we’ll connect you with the business team."
      />
    </S.TopContentWrapper>
  </div>

)

export default TopContent 