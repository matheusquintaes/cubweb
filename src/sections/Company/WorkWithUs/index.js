import React from "react"

import {LocalFlorist, Schedule, Feedback, AttachMoney, LocalCafe} from '@styled-icons/material'

import SectionTopContent from '../../../components/Common/SectionTopContent'

import * as S from './styled'

const WorkWithUs = () => (

  <S.WorkWithUsWrapper className="section">
    <div className="container">
      <SectionTopContent 
        title="We are looking for our next colleague"
        description="We're always looking for like-minded people to join us. View our open positions below or pitch us why you think you'd be a great fit."
      />
 

    <S.VacanciesWrapper>
      <S.VacancyItem>
        <h3>Front-end Developer</h3>
        <a href="/">Read More -></a>
      </S.VacancyItem>
      <S.VacancyItem>
        <h3>UX/UI Designer</h3>
        <a href="/">Read More -></a>
      </S.VacancyItem>
      <S.VacancyItem>
        <h3>Project Manager</h3>
        <a href="/">Read More -></a>
      </S.VacancyItem>
    </S.VacanciesWrapper>

    <S.PerksWrapper>
      <S.PerkItem><LocalFlorist/>Remote friendly environment</S.PerkItem>
      <S.PerkItem><Schedule/>Flexible working hours and vacation</S.PerkItem>
      <S.PerkItem><Feedback/>Feedback-driven company</S.PerkItem>
      <S.PerkItem><AttachMoney/>Competitive compensation and benefits</S.PerkItem>
      <S.PerkItem><LocalCafe/>Freshly cooked food and free drinks</S.PerkItem>
    </S.PerksWrapper>
    </div>
    <S.ApplyNow>
      <a href="/">Apply now -></a>
    </S.ApplyNow>
  </S.WorkWithUsWrapper>

)

export default WorkWithUs 