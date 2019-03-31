import React, { Component } from 'react';
import { Switch, Link } from 'react-router-dom';

import {
  PageContainer,
  PreviewTile,
  PreviewTileContainer,
  TileImage,
  TileDescription,
  ViewCaseStudyLink,
  ImageTag,
} from './styles';
import { ViewCaseSVG } from './ViewCaseSVG';

let data = require('../../feed/data.json');

class ListingPage extends Component {
  render() {
    return (
      <Switch>
        <PageContainer>
            <PreviewTileContainer>
              {
                data.map((caseStudy) =>
                  <PreviewTile key={caseStudy.id}>
                    <ImageTag>
                      {caseStudy.tag}
                    </ImageTag>
                    <TileImage image={require(`../../assets/${caseStudy.thumb}`)} />
                    <TileDescription>
                      {caseStudy.title_long}
                    </TileDescription>
                    <ViewCaseStudyLink>
                      <Link to={`/case-study/${caseStudy.id}`}>
                        <ViewCaseSVG />
                      </Link>
                    </ViewCaseStudyLink>
                  </PreviewTile>
                )
              }
            </PreviewTileContainer>
        </PageContainer>
      </Switch>
    );
  }
}

export default ListingPage;
