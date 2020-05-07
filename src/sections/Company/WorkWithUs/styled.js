import styled from "styled-components"
import media from "styled-media-query"

export const WorkWithUsWrapper = styled.section`
  padding: 64px 0;
`

export const VacanciesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 980px; */
  margin: auto;
  flex-wrap: wrap;  
`

export const VacancyItem = styled.div`
  border-radius: 10px;
  background: white;  
  width: 280px;
  padding: 18px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.18);

  h3{
    margin-bottom: 12px;
  }

  
  ${media.lessThan('large')`
    flex-basis: 46%;
    margin-bottom: 48px;
  `}

  ${media.lessThan('medium')`
    flex-basis: 100%;
  `}

`

export const PerksWrapper = styled.div`
    width: 720px;
    margin: 64px auto;
    display: flex;
    flex-wrap: wrap;

    ${media.lessThan('medium')`
      width: 100%;
      justify-content: center;
    `}

`


export const PerkItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  flex-basis: 360px;

  ${media.lessThan('medium')`
    width: 100%;
  `}

  svg {
    color: var(--main-color);
    width:24px;
    margin-right: 12px;
  }

`
export const ApplyNow = styled.div`
  text-align: center;
`