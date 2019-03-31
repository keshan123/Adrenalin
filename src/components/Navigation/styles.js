import styled from 'styled-components';

// Navigation

export const NavigationContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 43px;
  padding: 0 93px;

  @media (max-width: 768px) {
    padding: 0 55px;
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
