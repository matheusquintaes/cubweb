import React from "react"

import SectionTopContent from '../../../components/Common/SectionTopContent'

import HowWeWorkList from './HowWeWorkList'

import * as S from './styled'

const HowWeWork = () => (

      <S.HowWeWorkWrapper>
        <div className="container">
            <SectionTopContent 
              title="How we work"
              description="We help you elevate your business by taking your product to the next level through consult and the craft of design. We love walking the thin line between stunning and usable products."
            />
            <HowWeWorkList/>
        </div>
      </S.HowWeWorkWrapper>
    
)

export default HowWeWork 