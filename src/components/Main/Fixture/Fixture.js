import React from 'react';

import classes from './Fixture.module.css';
import Match from './Match';

const Fixture = (props) => {
  return (
    <div className={classes['fixture-container']}>
      <div className={classes.fixture}>
          <Match match='1' key='1' teamA={props.teams[0]} teamB={props.teams[1]}></Match>
          <Match match='2' key='1' teamA={props.teams[2]} teamB={props.teams[3]}></Match>
          <Match match='3' key='1' teamA={props.teams[0]} teamB={props.teams[2]}></Match>
          <Match match='4' key='1' teamA={props.teams[3]} teamB={props.teams[1]}></Match>
          <Match match='5' key='1' teamA={props.teams[2]} teamB={props.teams[1]}></Match>
          <Match match='6' key='1' teamA={props.teams[0]} teamB={props.teams[3]}></Match>  
      </div>
    </div>
  )
}

export default Fixture