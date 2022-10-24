import React, {useState} from 'react';

import classes from './Main.module.css';
import Group from './Group/Group';
import Fixture from './Fixture/Fixture';

const Main = () => {

    const [teams, setTeams] = useState([
        {
            team: 'Argentina',
            points: 0,
            played: 0,
            won: 0,
            tied: 0,
            lost: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            id: 0
        },
        {
            team: 'Mexico',
            points: 0,
            played: 0,
            won: 0,
            tied: 0,
            lost: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            id: 1
        },
        {
            team: 'Poland',
            points: 0,
            played: 0,
            won: 0,
            tied: 0,
            lost: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            id: 2
        },
        {
            team: 'Saudi Arabia',
            points: 0,
            played: 0,
            won: 0,
            tied: 0,
            lost: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            id: 3
        },
    ])

  return (
    <div className={classes.main}> 
        <Group teams={teams}></Group>
        <Fixture teams={teams}></Fixture>
    </div>
  )
}

export default Main