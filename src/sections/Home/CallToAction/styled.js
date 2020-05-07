import styled from "styled-components"
import media from "styled-media-query"

export const CallToAction = styled.div`
  background: var(--bg-light-blue);
  padding: 36px;

  ${media.lessThan('large')`
    padding: 18px 0;
  `}

`
export const CallToActionWrapper = styled.div`
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan('large')`
    padding: 0;
  `}
  
  h3 {
    color: var(--main-color);
    font-size: 24px;
    font-weight: 600;

    ${media.lessThan('large')`
      font-size: 18px;
    `}
  }
`
