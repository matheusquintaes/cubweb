import styled, { keyframes } from "styled-components"

const carrousel = keyframes`
    0% {
        transform: scale(1) translate3d(0px, 0px, 0px);
    }
    100% {
        transform: scale(1) translate3d(-2120px, 0px, 0px);
    }
`;

export const GalleryWrapper = styled.section`
  height: 800px;
  position: relative;
  overflow: hidden;
  box-sizing: initial;
  padding: 64px 0;

`
export const ImageWrapper = styled.div`
  position: absolute;
  top: ${props => `${props.y}px`};
  left: ${props => `${props.x}px`};
  width: 200px;
  img { 
    width: 100%
  }
`
export const GalerryAnimmation = styled.div`
  animation-name: ${carrousel};
  animation-timing-function: linear;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  animation-duration: 30s;
  animation-play-state: running;
`




