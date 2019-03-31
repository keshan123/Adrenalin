import styled from 'styled-components';

// ListingPage

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const ViewCaseStudyLink = styled.div`
  color: blue;
  font-size: 12px;
  height: 13px;
  margin-top: 32px;
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
