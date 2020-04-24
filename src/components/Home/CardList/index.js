import React from "react"

import * as S from "./styled"

const CardList = () => (

  <S.CardListWrapper>
    <S.CardItem>
      <S.CardContent>
        <S.CardTitle>Web App Interfaces</S.CardTitle>
        <S.CardDescription> The amount of web based apps is vastly growing. Road from wire-frames to pixel perfect web apps. </S.CardDescription>
      </S.CardContent>
    </S.CardItem>
    <S.CardItem>
      <S.CardContent>
        <S.CardTitle>Mobile App Development</S.CardTitle>
        <S.CardDescription> Having created several iOS and Android apps, designing for mobile is right up our alley.  </S.CardDescription>
      </S.CardContent>
    </S.CardItem>
    <S.CardItem>
      <S.CardContent>
        <S.CardTitle>Front-end Development</S.CardTitle>
        <S.CardDescription> We love forging the bridge from our design to development. With years of experience in front-end. </S.CardDescription>
      </S.CardContent>
    </S.CardItem>
    <S.CardItem>
      <S.CardContent>
        <S.CardTitle>UX & <br/>UI Design</S.CardTitle>
        <S.CardDescription> We’ve shaped a process that helps what you needs and build solutions that solve problems.</S.CardDescription>
      </S.CardContent>
    </S.CardItem>
  </S.CardListWrapper>
)

export default CardList 