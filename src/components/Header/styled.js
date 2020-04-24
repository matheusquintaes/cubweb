import styled from "styled-components"

export const HeaderGhost = styled.header`
  height: 72px;
  width: 100%;
  opacity: 0;
  pointer-events: none;
`
export const HeaderWrapper = styled.header`
  position: fixed;
  background-color: white;
  text-align: center;
  top: 0px;
  left: 0px;
  right: 0px;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 24px;
`

export const NavWrapper = styled.nav`
  font-size: 14px;
`

export const NavLink = styled.a`
  margin-right: 16px;
`
export const NavButton = styled.a`
  padding: 8px 16px;
  border-radius: 5px;
  background-color: var(--main-color);
  color: white;
`

