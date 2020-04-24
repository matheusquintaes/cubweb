import React from "react"
import {Edit, Redo, ShowChart, Assignment} from '@styled-icons/material'

import * as S from "./styled"

const HowWeWorkList = () => (

  <S.HowWeWorkWrapper>
    <S.HowWeWorkItem>
      <Edit/>
     <h3>Start from scratch</h3>
     <p>You have been thinking about this great idea and perhaps even gathered a team. Now it’s time to get it out into the world. Let’s do things right from the very start and give you a head start on competition.</p>
      <a href="/">Tell us about your project -></a>
    </S.HowWeWorkItem>
    <S.HowWeWorkItem>
    <Redo/>
     <h3>Ready for the next step</h3>
     <p>Your product has proven its worth and now it’s time for the next step. Together we review your product and uncover new potential to get (new) users to love your product even more.</p>
     <a href="/">Join us-></a>
    </S.HowWeWorkItem>
    <S.HowWeWorkItem>
      <ShowChart/>
     <h3>Subtle improvements</h3>
     <p>Your established product is ready for some visual changes or new features. You’re looking to add subtle improvements yet one at a time rather than a complete overhaul.</p>
     <a href="/">Let's redesign your project -></a>
    </S.HowWeWorkItem>
    <S.HowWeWorkItem>
      <Assignment/>
     <h3>We take a complex approach to creation</h3>
     <p>Our team brings together designers, software developers, QA engineers, and illustrators. Applying our multifaceted team's skillset.</p>
     <a href="/">See ou work -></a>
    </S.HowWeWorkItem>
  </S.HowWeWorkWrapper>
)

export default HowWeWorkList 