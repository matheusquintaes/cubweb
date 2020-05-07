import styled from "styled-components"
// import media from "styled-media-query"


export const FormContainer = styled.div`
  width: 620px; 
  margin: 0 auto;
`

export const Row6wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  div${InputGroup}{
    width: 48%;
  }
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`


export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;


  input {
    height: 45px;
    border-radius: 10px;
    border: 1px solid var(--gray4);
  }
`


export const InputLabel = styled.label`
  margin-bottom: 8px;
`
