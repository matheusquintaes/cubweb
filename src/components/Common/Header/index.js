import React from "react"
import Logo from '../../../assets/Logo.svg';

import * as S from "./styled"

const Header = () => {
  return (
    <>
    <S.HeaderGhost/>
    <S.HeaderWrapper>
      <S.HeaderContainer className="container">
        <a href="/"><Logo /></a>
       <S.NavWrapper>
        <S.NavLink href="company">Company</S.NavLink>
        <S.NavButton>Contact Us</S.NavButton>
       </S.NavWrapper>
      </S.HeaderContainer>
    </S.HeaderWrapper>
    </>
  )
}


export default Header
