import React from "react"

import * as S from "./styled"

import office1 from '../../../images/office-1.png'
import office2 from '../../../images/office-2.png'
import office3 from '../../../images/office-3.png'
import office4 from '../../../images/office-4.png'
import office5 from '../../../images/office-5.png'
import office6 from '../../../images/office-6.png'
import office7 from '../../../images/office-7.png'
import office8 from '../../../images/office-8.png'
import office9 from '../../../images/office-9.png'
import office10 from '../../../images/office-10.png'


const Gallery = () => (
  
  <S.GalleryWrapper className="section">
    <S.GalerryAnimmation>
      <S.ImageWrapper x="0" y="0">     <img alt="office" src={office1}></img></S.ImageWrapper>
      <S.ImageWrapper x="60" y="400">  <img alt="office" src={office2}></img></S.ImageWrapper>
      <S.ImageWrapper x="360" y="80">  <img alt="office" src={office3}></img></S.ImageWrapper>
      <S.ImageWrapper x="420" y="480"> <img alt="office" src={office4}></img></S.ImageWrapper>  
      <S.ImageWrapper x="720" y="0">   <img alt="office" src={office5}></img></S.ImageWrapper>
      <S.ImageWrapper x="780" y="400"> <img alt="office" src={office6}></img></S.ImageWrapper>
      <S.ImageWrapper x="1080" y="80"> <img alt="office" src={office7}></img></S.ImageWrapper>
      <S.ImageWrapper x="1140" y="480"><img alt="office" src={office8}></img></S.ImageWrapper>
      <S.ImageWrapper x="1440" y="0">  <img alt="office" src={office9}></img></S.ImageWrapper>
      <S.ImageWrapper x="1500" y="400"><img alt="office" src={office10}></img></S.ImageWrapper>
      <S.ImageWrapper x="1800" y="80"> <img alt="office" src={office6}></img></S.ImageWrapper>
      <S.ImageWrapper x="1860" y="480"><img alt="office" src={office7}></img></S.ImageWrapper>
      <S.ImageWrapper x="2120" y="0">  <img alt="office" src={office1}></img></S.ImageWrapper>
      <S.ImageWrapper x="2180" y="400"><img alt="office" src={office2}></img></S.ImageWrapper>
      <S.ImageWrapper x="2480" y="80"> <img alt="office" src={office3}></img></S.ImageWrapper>
      <S.ImageWrapper x="2540" y="480"><img alt="office" src={office4}></img></S.ImageWrapper>  
      <S.ImageWrapper x="2840" y="0">  <img alt="office" src={office5}></img></S.ImageWrapper>
      <S.ImageWrapper x="2900" y="400"><img alt="office" src={office6}></img></S.ImageWrapper>
      <S.ImageWrapper x="3200" y="80"> <img alt="office" src={office7}></img></S.ImageWrapper>
      <S.ImageWrapper x="3260" y="480"><img alt="office" src={office8}></img></S.ImageWrapper>
      <S.ImageWrapper x="3560" y="0">  <img alt="office" src={office9}></img></S.ImageWrapper>
      <S.ImageWrapper x="3620" y="400"><img alt="office" src={office10}></img></S.ImageWrapper>
      <S.ImageWrapper x="3920" y="80"> <img alt="office" src={office6}></img></S.ImageWrapper>
      <S.ImageWrapper x="3980" y="480"><img alt="office" src={office7}></img></S.ImageWrapper>
    
    </S.GalerryAnimmation>
  </S.GalleryWrapper>

)

export default Gallery 