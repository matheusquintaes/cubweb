import React from "react"
import * as S from "./styled"

const Header = () => {
  return (
    <>
    <S.HeaderGhost/>
    <S.HeaderWrapper>
      <S.HeaderContainer className="container">
        <a href="/"><S.LogoWrapper /><S.LogoMobileWrapper/></a>
       <S.NavWrapper>
        <S.NavLink href="/company">Company</S.NavLink>
        <S.NavButton href="/contact">Contact Us</S.NavButton>
       </S.NavWrapper>
      </S.HeaderContainer>
    </S.HeaderWrapper>
    </>
  )
}


export default Header
