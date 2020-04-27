import React from "react"

import SectionTopContent from '../../../components/Common/SectionTopContent'
import * as S from "./styled"

const TopContent = () => (

  <div className="container">
    <S.TopContentWrapper>
      <SectionTopContent 
        title="Quality over quantity"
        description="We help you elevate your business by taking your product to the next level through consult and the craft of design. We love walking the thin line between stunning and usable products."
      />
      <a href="/contact ">Get in touch -></a>
    </S.TopContentWrapper>
  </div>

)

export default TopContent 