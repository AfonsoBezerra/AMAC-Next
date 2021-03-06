import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100%;
    position: relative;
    height: 100%;
    cursor: pointer;
    transition: all .5s ease;
    filter: grayscale(100%);
    @media (min-width: 1024px){
    :hover{
      transform: scale(1.1);
      filter: grayscale(0%);
    }
    }
    @media (max-width: 1024px){
      filter: grayscale(0%);
    }
    .sombraImg{
      position:absolute;
      width:100%;
      height: 100%;
      bottom:0;
      left:0;
      z-index: 8;
      mix-blend-mode: multiply;
    }
    .text{
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      img{
        z-index: 1;
      }
      .title{
        position: absolute;
        width: 100%;
        z-index: 9;
        bottom: 1.5rem;
        color:#fff;
      }
    }
    img{
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
`;
