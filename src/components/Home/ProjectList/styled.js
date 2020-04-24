import styled from "styled-components"

export const ProjectListWrapper = styled.div`
  display:flex;
  justify-content: space-between;
`

export const ProjectItem = styled.div`
  flex-basis: 320px;
  position: relative;
  margin-bottom: 100px;
`

export const ProjectContent = styled.div`
  border-radius: 10px;
  background: white;
  width: 280px;
  padding: 18px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.18);
  position: absolute;
  top: 120px;
  left: 30px;
  text-align: left;

  h3 {
    margin-bottom: 12px;
  }

  p{ 
    font-size: 16px;
    line-height: 29px;
    margin-bottom: 24px;
    min-height: 116px;
  }

  a {
    color: var(--main-color);
    font-weight: 600;
  }

`
