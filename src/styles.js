import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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

// ListingPage components

export const PreviewTileContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  left: 0;
  margin-top: 63px;
  padding: 0 93px;
  top: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 45px;
  }
`;

export const PreviewTile = styled.div`
  color: #ccc;
  display: flex;
  flex-direction: column;
  height: 517px;
  position: relative;
  width: calc(50% - 16.5px);

    &:nth-child(even) {
      margin-left: 33px;
  }
    &:nth-child(-n+2) {
      margin-bottom: 36px;
  }
    &:nth-last-of-type(-n+2) {
      margin-top: 36px;
  }

  @media (max-width: 768px) {
    width: 100%;
      &:nth-child(even) {
        margin-left: 0px;
        margin-bottom: 36px;
    }
      &:nth-child(odd) {
        margin-left: 0px;
        margin-bottom: 36px;
    }
      &:nth-last-of-type(-n+2) {
        margin-top: 0px;
    }
  }
`;

export const ImageTag = styled.div`
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
  margin-top: 37px;
  position: absolute;
  top: 0;
  transform: rotate(270deg);
  width: 98px;
`;

export const TileImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  height: 384px;
`;

export const TileDescription = styled.div`
  color: #1A1A1A;
  font-family: Arial,Helvetica Neue,Helvetica,sans-serif;
  font-size: 24px;
  font-weight: bold;
  height: 64px;
  margin-top: 24px;
  text-align: left;
  width: 80%;

  @media (max-width: 1024px) {
    height: 114px;
  }
  @media (max-width: 768px) {
    height: 64px;
  }
`;

export const ViewCaseStudy = styled.div`
  color: blue;
  font-size: 12px;
  height: 13px;
  margin-top: 32px;
`;

// DetailsPage

export const DetailsImageTag = styled(ImageTag)`
  margin-top: 99px;
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
