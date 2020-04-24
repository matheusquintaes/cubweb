import React from "react"
import Logo from '../../../assets/Logo.svg';

import * as S from "./styled"

const Header = () => {
  return (
    <>
    <S.HeaderGhost/>
    <S.HeaderWrapper>
      <S.HeaderContainer className="container">
       <Logo />
       <S.NavWrapper>
        <S.NavLink>Company</S.NavLink>
        <S.NavButton>Contact Us</S.NavButton>
       </S.NavWrapper>
      </S.HeaderContainer>
    </S.HeaderWrapper>
    </>
  )
}


export default Header
