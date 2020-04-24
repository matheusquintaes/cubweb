import React from "react"

import Project1 from '../../../images/project1.png'
import Project2 from '../../../images/project2.png'
import Project3 from '../../../images/project3.png'

import * as S from "./styled"

const ProjectList = () => (

  <S.ProjectListWrapper>

    <S.ProjectItem>
      <img src={Project1} alt="project1" />
      <S.ProjectContent>
        <h3>Humanizing candidates experiences</h3>
        <p>A platform that allows brands to create authentic content at scale, sourced from their employees.</p>
        <a href="/">View the project -></a>
      </S.ProjectContent>
    </S.ProjectItem>
 
    <S.ProjectItem>
      <img src={Project3} alt="project1"/>
      <S.ProjectContent>
        <h3>Transforming algorithms into a ready product</h3>
        <p>Real Simple Energy is an early stage startup making consumer energy selection an easy to understand.</p>
        <a href="/">View the project -></a>
      </S.ProjectContent>
    </S.ProjectItem>

    <S.ProjectItem>
      <img src={Project2} alt="project1"/>
      <S.ProjectContent>
        <h3>Bringing people and organizations together</h3>
        <p>We designed and built a business web application that is mainly used for professional networking.</p>
        <a href="/">View the project -></a>
      </S.ProjectContent>
    </S.ProjectItem>
  </S.ProjectListWrapper> 
)

export default ProjectList 