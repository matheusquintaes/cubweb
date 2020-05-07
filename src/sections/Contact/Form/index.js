import React from "react"

import * as S from './styled'

import Button from '../../../components/Common/Button'

const Form = () => (

  <S.FormContainer>
        <S.Row6wrapper>
          <S.InputGroup>
            <S.InputLabel>Name</S.InputLabel>
            <input type="text"/>
          </S.InputGroup>
          <S.InputGroup>
            <S.InputLabel>Last Name</S.InputLabel>
            <input type="text"/>
          </S.InputGroup>
        </S.Row6wrapper>

        <S.Row>
          <S.InputGroup>
            <S.InputLabel>Company</S.InputLabel>
            <input type="text"/>
          </S.InputGroup>
          <S.InputGroup>
            <S.InputLabel>Email</S.InputLabel>
            <input type="text"/>
          </S.InputGroup>
          <S.InputGroup>
            <S.InputLabel>Phone</S.InputLabel>
            <input type="text"/>
          </S.InputGroup>
          <S.InputGroup>
            <S.InputLabel>Messa</S.InputLabel>
            <input type="text"/>
          </S.InputGroup>

          <Button text="Let's talk" link="/" type="primary"></Button>
        </S.Row>

  </S.FormContainer>



)

export default Form 