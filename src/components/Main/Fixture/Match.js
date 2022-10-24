import React from 'react';

import classes from './Match.module.css';

const Match = (props) => {
  return (
    <div className={classes['match-container']}>
      <h3>Match {props.match}</h3>
      <div className={classes.match}>
        <div className={`${classes.team} ${classes["team-a"]}`}>
          <p className={classes.team}>{props.teamA.team}</p>
          <input className={classes.score} type="text" />
        </div>
        -
        <div className={`${classes.team} ${classes["team-b"]}`}>
          <p className={classes.team}>{props.teamB.team}</p>
          <input className={classes.score} type="text" />
        </div>
      </div>
    </div>
  )
}

export default Match