import React from 'react'
import styled from 'styled-components'
import remcalc from 'remcalc'
import { Row, Col } from '../grid'
import { Margin, Padding } from 'styled-components-spacing'
import breakpoint from 'styled-components-breakpoint'
import StyledLink from '../styledLink'
import Image from '../Common/Image'
import { H2, Paragraph } from '../Typography'
import getIntroSentence from '../../utils/getIntroSentence'

const ImageWrapper = styled(Col)`
  margin-top: ${remcalc(-5)};
  width: 100%;
  max-width: ${remcalc(549)};
  height: auto;

  ${breakpoint('desktop')`
    max-width: ${remcalc(549)};
    padding-right: 0px;
  `}
`

const WrapperRow = styled(Row)`
  ${breakpoint('tablet')`
    min-height: ${remcalc(540)};
    align-items: center;
  `};
`

const P = styled(Paragraph)`
  margin-bottom: ${remcalc(9)};
`

const SubHeading = styled(Paragraph)`
  color: #757575;
  padding-bottom: ${remcalc(15)};
  opacity: 0.7;
`

const CaseStudy = ({ caseStudy, subHeading }) => (
  <WrapperRow>
    <Col sm={12} xs={12} md={false}>
      <SubHeading>{subHeading}</SubHeading>
      <Padding bottom={{ smallPhone: 0, tablet: 3, desktop: 1 }}>
        <H2>{caseStudy.title}</H2>
      </Padding>
    </Col>
    <Col xs={false} sm={false} md={6}>
      <SubHeading>{subHeading}</SubHeading>
      <Margin bottom={1}>
        <H2>{caseStudy.title}</H2>
      </Margin>
      <P>{getIntroSentence(caseStudy)}</P>
      <StyledLink to={`/case-study/${caseStudy.slug}`}>Learn more</StyledLink>
    </Col>
    <ImageWrapper xs={12} sm={12} md={6}>
      <Image alt={caseStudy.posterImage.title} image={caseStudy.posterImage} />
    </ImageWrapper>
    <Col xs={12} sm={12} md={false}>
      <Margin top={2} />
      <P>{getIntroSentence(caseStudy)}</P>
      <StyledLink
        aria-label={`Learn more about ${caseStudy.title}`}
        to={`/case-study/${caseStudy.slug}`}
      >
        Learn more
      </StyledLink>
    </Col>
  </WrapperRow>
)

export default CaseStudy
