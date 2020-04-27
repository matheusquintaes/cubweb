import React from "react"
import {GroupWork, Sync, Dashboard, MonetizationOn} from '@styled-icons/material'

import BrandsImage from '../../../images/brands.png'

import * as S from './styled'

const About = () => (

  <div className="section">
    <div className="container">
    <S.AboutWrapper>
      <S.AboutItem>
        <GroupWork/>
      <h3>Combined efforts of the best quality designers and developers</h3>
      <p>As we started from design many years ago, we rank on Dribbble as 1 of the 10 best design studios around the world. We care about the design and frontend appearance of the project. We believe in beautiful software.</p>
      </S.AboutItem>
      <S.AboutItem>
      <Sync/>
      <h3>Integration with an ongoing project or starting a new one</h3>
      <p>We thrive in a situation when we have to start our work ASAP. Applying agile methodologies (Scrum and Kanban), the latest tools, and extensive expertise, we can timely deliver projects of any complexity.</p>
      </S.AboutItem>
      <S.AboutItem>
        <Dashboard/>
      <h3>We take a complex approach to product creation</h3>
      <p>Our team brings together designers, software developers, QA engineers, and illustrators. Applying our multifaceted team's skillset, we will help you overcome the trickiest product development challenges.</p>
      </S.AboutItem>
      <S.AboutItem>
        <MonetizationOn/>
      <h3>Flexibility in fixed costs and human resources to your current situation</h3>
      <p>We understand the challenges that may appear in the product development journey. That is why we can be flexible in terms of fixed costs and adapt the development price to your current situation.</p>
      </S.AboutItem>
    </S.AboutWrapper>
    </div>
    <S.BrandsWrapper>
      <img src={BrandsImage} alt="brands"/>
    </S.BrandsWrapper>
</div>

)

export default About 