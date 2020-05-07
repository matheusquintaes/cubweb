import styled from "styled-components"
import media from "styled-media-query"

export const Projects = styled.section`
  padding: 48px 0 108px 0;
  text-align: center;
  background: var(--gray2);

  ${media.lessThan('medium')`
    padding: 48px 0 24px 0;
  `}

`