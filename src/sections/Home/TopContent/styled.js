import styled from "styled-components"
import media from "styled-media-query"


export const TopContentWrapper = styled.section`
  max-width: 760px;
  margin: 64px auto;
`

export const ButtonsWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  
  ${media.lessThan('medium')`
    justify-content: left;
  `}

  li {
    margin-right: 16px;
  }
`