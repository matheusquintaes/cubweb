import styled from "styled-components"
import media from "styled-media-query"

export const ProjectListWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${media.lessThan('medium')`
    justify-content: center;
  `}

`

export const ProjectItem = styled.div`
  flex-basis: 30%;
  position: relative;
  margin-bottom: 10%;
  img {
    width: 100%;
  }

  ${media.lessThan('large')`
    margin-bottom: 15%;
  `}

  ${media.lessThan('medium')`
    flex-basis: 100%;
    margin-bottom: 4%;
  `}
`

export const ProjectContent = styled.div`
  border-radius: 10px;
  background: white;
  padding: 18px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.18);
  position: absolute;
  top: 60%;
  text-align: left;
/* 
  ${media.lessThan('large')`
    position: relative;
      top: 40%;
  `} */

  ${media.lessThan('medium')`
    position: relative;
    top: initial;
    margin-top: -10%;
  `}


  h3 {
    margin-bottom: 12px;
  }

  p{ 
    font-size: 16px;
    line-height: 29px;
    margin-bottom: 24px;
    
    ${media.lessThan('large')`
      font-size: 14px;
      min-height: initial;

    `}
  }

  a {
    color: var(--main-color);
    font-weight: 600;
  }

`
