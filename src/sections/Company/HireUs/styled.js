import styled from "styled-components"
import media from "styled-media-query"


export const HireUs = styled.section`
  padding: 64px 0;
  text-align: center;
  background: var(--gray2);
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
    margin-right: 48px;
  }

  
  a {
    color: var(--main-color);
    font-weight: 600;
  }
`