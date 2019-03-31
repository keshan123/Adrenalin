import React, { Component } from 'react';
import { Switch } from 'react-router-dom'

import {
  PageContainer,
  DetailsContainer,
  DetailsImage,
  DetailsInfo,
  DetailsTitle,
  DetailsQuestionsContainer,
  DetailsQuestionsTitle,
  DetailsQuestionsBody,
  DetailsTagContainer,
  DetailsImageTag,
} from './styles';

let data = require('../../feed/data.json');

class DetailsPage extends Component {
  state = {
    title: '',
    questions: [],
    tag: '',
    image: '',
  };

  componentDidMount() {
    const isCaseStudyFound = (casestudy) => {
      if (casestudy.id.toString() === this.props.match.params.id) {
        this.setState({
          title: casestudy.title,
          questions: casestudy.questions,
          tag: casestudy.tag,
          image: casestudy.image,
        })
      }
    }
    data.find(isCaseStudyFound)
  };

  render() {
    const { image, title, questions } = this.state;
    return (
      <Switch>
        <PageContainer>
          <DetailsContainer>
            {
              image &&
              <DetailsTagContainer>
                <DetailsImageTag>
                 {this.state.tag}
                </DetailsImageTag>
                <DetailsImage
                  image={require(`../../assets/${image}`)}
                />
              </DetailsTagContainer>
            }
            <DetailsInfo>
              <DetailsTitle>
                {title}
              </DetailsTitle>
              {
                questions.map((caseStudy, index) =>
                <DetailsQuestionsContainer key={index}>
                  <DetailsQuestionsTitle>
                    Question {index + 1}
                  </DetailsQuestionsTitle>
                  <DetailsQuestionsBody>
                    {caseStudy}
                  </DetailsQuestionsBody>
                </DetailsQuestionsContainer>
                )
              }
            </DetailsInfo>
          </DetailsContainer>
        </PageContainer>
      </Switch>
    );
  };
}

export default DetailsPage;
