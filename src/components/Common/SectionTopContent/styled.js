import styled from "styled-components"
import media from "styled-media-query"

export const SectionTopContent = styled.div`

  display:flex;
  flex-direction: column;
  text-align: center;
  max-width: 760px;
  margin: auto;

  ${media.lessThan('medium')`
    text-align: left;
    `
  }

   h1 {
     color: var(--title-color);
     font-size: 54px;
     margin: 0 0 32px 0;

    ${media.lessThan('large')`
      font-size: 36px;
      line-height: 47px;
      margin: 0px 0px 12px;
    `
    }

   }
  p{
     margin: 0 auto 32px auto;
    
     ${media.lessThan('large')`
      font-size: 16px;
      line-height: 29px;
      letter-spacing: -0.005em;
    `
    }
  }

`