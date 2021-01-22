import React from 'react'

import Section from '~organisms/Section'
import Prompt from '~atoms/Prompt'
import Header from '~molecules/Header'
import MouseIndicator from '~atoms/MouseIndicator'

import style from './Welcome.style'

export default () => (
  <Section className={style.Welcome}>
    <Header className={style.header} />
    <div className={style.content}>
      <div className={style.preTitle}>
        Digital Product Research, Design & Develop
      </div>

      <h1 className={style.title}>
        <span className={style.stateOfTheArt}>State-of-the-art</span>
        <br /> technologies for
        <br />
        user experiences
        <br />
        really{' '}
        <span className={style.adjective}>
          <Prompt words={['seamless', 'immersive', 'magical']} />
        </span>
      </h1>
    </div>
    <MouseIndicator />
  </Section>
)