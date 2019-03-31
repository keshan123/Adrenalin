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
} from '../styles';

let data = require('../feed/data.json');

class DetailsPage extends Component {
  state = {
    title: '',
    questions: [],
    tag: '',
    image: '',
  }
  componentDidMount() {
    const isFound = (casestudy) => {
      if (casestudy.id.toString() === this.props.match.params.id) {
        this.setState({
          title: casestudy.title,
          questions: casestudy.questions,
          tag: casestudy.tag,
          image: casestudy.image,
        })
      }
    }
    data.find(isFound)
  }
  render() {
    return (
      <Switch>
        <PageContainer>
          <DetailsContainer>
            {
              this.state.image &&
              <DetailsTagContainer>
                <DetailsImageTag>
                 {this.state.tag}
                </DetailsImageTag>
                <DetailsImage
                  image={require(`../assets/${this.state.image}`)}
                />
              </DetailsTagContainer>
            }
            <DetailsInfo>
              <DetailsTitle>
                {this.state.title}
              </DetailsTitle>
              {
                this.state.questions.map((caseStudy, index) =>
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
  }
}

export default DetailsPage;
