import styled from "styled-components"
import media from "styled-media-query"

export const HowWeWorkWrapper = styled.div`
  display:flex;
  flex-wrap: wrap;  
  justify-content: space-around;
`

export const HowWeWorkItem = styled.div`

  text-align: left;
  flex-basis: 442px;
  margin-bottom: 48px;
  
  ${media.lessThan('large')`
    flex-basis: 46%;
  `}

  ${media.lessThan('medium')`
    flex-basis: 100%;
  `}


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

  a {
    color: var(--main-color);
    font-weight: 600;
  }
` 