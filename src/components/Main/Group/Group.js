import React from 'react';

import classes from './Group.module.css';

const Group = (props) => {
  return (
    <div className={classes['group-container']}>
        <div className={classes.group}>
            <ul className={classes['group-header']}> 
                <li className={classes.team}>Team</li>
                <li className={classes.data}>Pts</li>
                <li className={classes.data}>P</li>
                <li className={classes.data}>W</li>
                <li className={classes.data}>D</li>
                <li className={classes.data}>L</li>
                <li className={classes.data}>GF</li>
                <li className={classes.data}>GA</li>
                <li className={classes.data}>GD</li>
            </ul>
            {props.teams.map(team =>{
                return (
                <ul className={classes['group-team']} id={classes[team.id]} key={team.id}>
                    <li className={classes.team}>{team.team}</li>
                    <li className={classes.data}>{team.points}</li>
                    <li className={classes.data}>{team.played}</li>
                    <li className={classes.data}>{team.won}</li>
                    <li className={classes.data}>{team.tied}</li>
                    <li className={classes.data}>{team.lost}</li>
                    <li className={classes.data}>{team.goalsFor}</li>
                    <li className={classes.data}>{team.goalsAgainst}</li>
                    <li className={classes.data}>{team.goalsFor - team.goalsAgainst}</li>
                </ul>
            )
            })}
        </div>
    </div>
  )
}

export default Group