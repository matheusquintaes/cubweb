import styled from "styled-components"

import Map from '../../assets/map.svg'
import Quote from '../../assets/quote.svg'

export const TopContentWrapper = styled.section`
  max-width: 760px;
  margin: 64px auto;
`

export const ButtonsWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;

  li {
    margin-right: 16px;
  }
`

export const HowWeWorkWrapper = styled.section`
`

export const Projects = styled.section`
  text-align: center;
  background: var(--gray2);
`


export const Testimonial = styled.section`
  display: flex;
  position: relative;
`

export const TestimonialCaseWrapper = styled.div`
  width: 480px;
  position: relative;

  p { 
    font-size: 16px;
  }
`

export const TestimonialText = styled.p`
  padding-left: 48px;
`


export const TestemonialInfos = styled.div`
  display:flex;
  align-items: center;
  padding-top: 12px;

  img {
    margin-right: 24px;
  }
`
export const MapSvg = styled(Map)`
  position: absolute;
  top: 0;
  left: 40%;
`

export const QuoteSvg = styled(Quote)`
  position: absolute;
  margin-left: -50px;
`