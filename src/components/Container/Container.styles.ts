import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

 /* Responsividade */
 @media (min-width: 360px) and (max-width: 768px) {
   height: 100vh;
   margin-top: 0px; /* Remova o margin-top negativo */
   padding-bottom: 0px; /* Remova padding inferior */
    
  }
  @media (min-width: 1640px) {
    height: 80vh;
  }


  @media (min-width: 1281px) and (max-width: 1639px){
   width: 100%;
   
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
    transform: translateY(10600px);
    margin-bottom: 220px;
    height: auto;
    
  }

  @media (min-width: 992px) and (max-width: 1280px) {
    transform: translateY(5220px);
   
  }

  @media (min-width: 1281px) and (max-width: 1639px){
    width: 100%;
 
    
  }

`;