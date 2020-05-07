import styled from "styled-components"
import media from "styled-media-query"

export const FooterWrapper = styled.footer`
  padding: 64px 0;
  background-color: white;
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
  ${media.lessThan('large')`
    justify-content: left;
  `}

  p{
    margin-top: 18px;
    font-size: 16px;
  }

  ul {

    max-width: 300px;

    ${media.lessThan('large')`
      padding: 0;
    `}

    li {

      &.list-title {
        color: var(--text-color);
        margin-bottom: 12px;
      }
      color: var(--text-light);
      list-style: none;
      margin-bottom: 8px;
    }
  }
`

export const CompanyWrapper = styled.div`

  ${media.lessThan('large')`
    margin-right: 48px;
  `}

`

export const FollowUsWrapper = styled.div`

`