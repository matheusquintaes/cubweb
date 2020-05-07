import styled from "styled-components"
import media from "styled-media-query"

export const TopContentWrapper = styled.section`
  padding-bottom: 64px;
  max-width: 760px;
  margin: 64px auto 0 auto;
  text-align: center;

  ${media.lessThan('medium')`
    text-align: left;
  `}


  a {
    color: var(--main-color);
    font-weight: 600;
  }
`