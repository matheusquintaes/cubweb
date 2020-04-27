import styled from "styled-components"

export const FooterWrapper = styled.header`
  padding: 64px 0;
  background-color: white;
  display:flex;
  justify-content: space-between;

  p{
    margin-top: 18px;
    font-size: 16px;
  }

  ul {

    max-width: 300px;

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
