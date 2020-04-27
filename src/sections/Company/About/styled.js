import styled from "styled-components"

export const AboutWrapper = styled.div`
  display:flex;
  flex-wrap: wrap;  
  justify-content: space-around;
`

export const AboutItem = styled.div`
  text-align: left;
  flex-basis: 400px;
  margin-bottom: 48px;
  
  svg {
    color: var(--main-color);
    width:24px;
    margin-bottom:16px;
  }

  h3{
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 24px;
    line-height: 29px;
    min-height: 116px;
    font-size: 16px;
  }
` 

export const BrandsWrapper = styled.div`
  display: flex;
  justify-content: center;
`