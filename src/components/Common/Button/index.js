import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Button = ({
  text,
  link,
  type
}) => (
  <S.ButtonWrapper className={type} href={link}>
    {text}
  </S.ButtonWrapper>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Button 