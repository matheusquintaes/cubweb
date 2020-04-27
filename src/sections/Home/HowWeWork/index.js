import React from "react"

import SectionTopContent from '../../../components/Common/SectionTopContent'

import HowWeWorkList from './HowWeWorkList'

const HowWeWork = () => (

      <div className="section">
        <div className="container">
            <SectionTopContent 
              title="How we work"
              description="We help you elevate your business by taking your product to the next level through consult and the craft of design. We love walking the thin line between stunning and usable products."
            />
            <HowWeWorkList/>
        </div>
      </div>
    
)

export default HowWeWork 