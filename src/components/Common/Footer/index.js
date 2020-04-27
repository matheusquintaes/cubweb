import React from "react"
import Logo from '../../../assets/Logo.svg';

import * as S from "./styled"

const Footer = () => {
  return (
    <>
    <S.FooterWrapper className="container">

      <div>
        <Logo />
        <p>Strategy, Design. <br/>Content, Technology. </p>
      </div>
      <div>
        <ul>
          <li className="list-title">Contac Us</li>
          <li>info@cub.web</li>
        </ul>
        <ul>
          <li className="list-title">Office</li>
          <li>106 Great South Road, Epsom Auckland, New Zealand</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="list-title">Company</li>
          <li>About Us</li>
          <li>How We Work</li>
          <li>Carrers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="list-title">Follow us</li>
          <li>Linkedin</li>
          <li>Dribble</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagran</li>
        </ul>
      </div>

    </S.FooterWrapper>
    </>
  )
}


export default Footer
