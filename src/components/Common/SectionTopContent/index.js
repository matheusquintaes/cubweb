import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const SectionTopContent = ({
  title,
  description,
}) => (
  <S.SectionTopContent>
    <h1>{title}</h1>
    <p>{description}</p>
  </S.SectionTopContent>
)

SectionTopContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default SectionTopContent 