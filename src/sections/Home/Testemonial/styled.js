import styled from "styled-components"

import Map from '../../../assets/map.svg'
import Quote from '../../../assets/quote.svg'

export const Testimonial = styled.section`
  display: flex;
  position: relative;

  &.section {
    padding: 150px 0 150px 0;
  }
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
