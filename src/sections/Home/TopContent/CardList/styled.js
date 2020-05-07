import styled from "styled-components"
import media from "styled-media-query"


export const CardListWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const CardItem = styled.div`
  flex: 0 0 22%;
  padding: 40px 20px;
  min-height: 380px;
  background: #6B5BE2;
  text-align: left;
  border-radius: 12px;
  
  ${media.lessThan('large')`
      flex-basis: 47%;
      min-height: inherit;
      margin-bottom: 24px;
  `
  }
  ${media.lessThan('medium')`
    flex-basis: 100%;
    `
  }


  &:nth-child(2) {
    background: #2ECC71;
  }

  &:nth-child(3) {
    background: #2F8FFF;
  }

  &:nth-child(4) {
    background: #FFBA05;
  }
`    
export const CardContent = styled.div`
  padding-top: 96px;
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  height: 100%;

  ${media.lessThan('large')`
    padding-top: 0;
  `
  }

`

export const CardTitle = styled.h3`
  font-size: 24px;
  line-height: 31px;
  letter-spacing: -0.014em;
  margin-bottom: 8px;
  color: white;
`

export const CardDescription = styled.p`
  color: white;
  line-height: 21px;
  letter-spacing: -0.005em;
  opacity: 0.9;
  margin: 0;
  font-size: 16px;
`