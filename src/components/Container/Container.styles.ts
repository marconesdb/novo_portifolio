import styled from 'styled-components';

export const Container = styled.div`
  display: flex;


  @media (min-width: 1640px) {
    height: 80vh;
    }
`;


export const FooterWrapper = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  transform: translateY(4600px);

  @media (min-width: 1640px) {
    transform: translateY(4850px);
    
  }


   /* Responsividade */
   @media (min-width: 360px) and (max-width: 768px) {
    transform: translateY(7150px);
  }
`;