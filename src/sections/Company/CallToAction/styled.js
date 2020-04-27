import styled from "styled-components"
import bgCompany from '../../../images/bg-company.png'

export const CallToAction = styled.div`
  background-image: url(${bgCompany}); 
  padding: 36px;
`
export const CallToActionWrapper = styled.div`
  padding: 0 244px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 {
    color: white;
    font-size: 24px;
    font-weight: 600;
    text-shadow: 2px 2px #000000b8;
  }
`