import styled from "styled-components"

export const ButtonWrapper = styled.a`
   font-size: 14px;
   text-decoration: none;
   padding: 14px 16px;   
   border-radius: 5px;
   font-weight: normal;
   text-align: center;
   
 &.primary {
    background-color: var(--main-color);
    color: white;
  }

 &.second {
    color: var(--main-color);
    background-color: var(--bg-light-blue);
 }

 &.outline {
    color: white;
    background-color: transparent;
    border: 2px solid white;
    text-shadow:2px 2px 3px #000000c7;
 }
`