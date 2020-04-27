import React from "react"

import SectionTopContent from '../../../components/Common/SectionTopContent'

import ProjectList from './ProjectList'

import * as S from './styled'

const Projects = () => (

  <S.Projects className="section">
    <div class="container">
      <SectionTopContent 
        title="We build more than just experiences"
        description="Benefit from over 8 years of experience designing and building successful products. From a founder with an idea to product owners at large enterprises and everything in between, the thread that ties them all together is solving meaningful problems with a design-led approach. "
      />
      <ProjectList/>
    </div>
  </S.Projects>
    
)

export default Projects 