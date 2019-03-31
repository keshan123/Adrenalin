import styled from 'styled-components';

// DetailsPage

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: 0 93px;

  @media (max-width: 830px) {
    padding: 0;
    align-items: center;
    flex-direction: column;
  }
`;

export const DetailsImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  height: 1107px;
  margin-top: 62px;
  width: 650px;
`;

export const DetailsInfo = styled.div`
  height: 800px;
  margin-left: 80px;
  margin-top: 123px;
  overflow: scroll;
  width: 564px;

  @media (max-width: 830px) {
    margin-left: 0;
  }
`;

export const DetailsTitle = styled.div`
  align-text: left;
  font-family: Arial,Helvetica Neue,Helvetica,sans-serif;
  font-size: 68px;
  font-weight: bold;
  margin-bottom: 65px;
`;

export const DetailsQuestionsContainer = styled.div`
  align-text: left;
  margin-bottom: 30px;
`;

export const DetailsQuestionsTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const DetailsQuestionsBody = styled.div`
  color: #333333;
  font-family: Georgia,Times,Times New Roman,serif;
  font-family: Georgia;
  font-size: 21px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 37px;
  margin-top: 10px;
`;

export const DetailsTagContainer = styled.div`
  position: relative;
`;

export const DetailsImageTag = styled.div`
  align-items: flex-start;
  background-color: #F5F5F5;
  box-shadow: 0px 4px 4px -2px rgba(0,0,0,0.3);
  color: rgba(0,0,0,0.75);
  display: flex;
  font-size: 12px;
  height: 24px;
  justify-content: center;
  left: 0;
  margin-left: -37px;
  margin-top: 99px;
  position: absolute;
  top: 0;
  transform: rotate(270deg);
  width: 98px;
`;
