import styled from 'styled-components';

// Footer

export const FooterContainer = styled.div`
  align-items: flex-end;
  border-top: 1px solid black;
  display: flex;
  height: 40px;
  justify-content: space-between;
  margin: 100px 93px 53px 93px;

  @media (max-width: 768px) {
    margin: 100px 55px 53px 55px;
  }
`;

export const LogoContainer = styled.div`
  background-image: url('require(../assets/adrenalin.svg'));
`;

export const NavigationOptionsContainer = styled.div`
  color: #000000;
  display: flex;
  font-family: ArialMT;
  font-size: 13px;
  justify-content: space-between;
  letter-spacing: 0;
  line-height: 14px;
  width: 436px;
`;

export const NavigationItem = styled.div`
  color: #000000;
  font-family: Arial,Helvetica Neue,Helvetica,sans-serif;
  font-size: 13px;
  font-weight: regular;
  margin-left: 5px;
`;
