export default {
    title:'Player Stats',
    name: 'playerStats',
    type: 'document',
    groups: [
        {
            title: 'Game & Player',
            name: 'gamePlayed',
            
        },
        {
            title: 'Offense',
            name: 'offense',
            
        },
        {
            title: 'Defence',
            name:'defence',

        }

    ],
    fields: [
        {
            title:'Game',
            name: 'game',
            type: 'reference',
            to:[{type: 'games'}],
            group: 'gamePlayed'
            
        },
        {
            title:'Player',
            name: 'player',
            type: 'reference',
            to:[{type: 'players'}],
            group: 'gamePlayed'
            
        },
        {
            title: 'Points',
            name:'points',
            type: 'number',
            group: 'offense'
        },
        {
            title: 'Goals',
            name:'goals',
            type: 'number',
            group: 'offense'
        },
        {
            title: 'Assist',
            name:'assist',
            type: 'number',
            group: 'offense'
        },
        {
            title: 'Saves',
            name:'savesOff',
            type: 'number',
            group: 'offense'
        },
        {
            title: 'Draw Control',
            name:'drawControl',
            type: 'number',
            group: 'offense'
        },
        {
            title: 'Ground Balls',
            name:'groundBalls',
            type: 'number',
            group: 'defence'
        },
        {
            title: 'Turnover',
            name:'turnover',
            type: 'number',
            group: 'defence'
        },
        {
            title: 'Saves',
            name:'savesDef',
            type: 'number',
            group: 'defence'
        },
        {
            title: 'Goals Against',
            name:'goalsAgainst',
            type: 'number',
            group: 'defence'
        },
        {
            title: 'Save Percentage',
            name:'savePercentage',
            type: 'number',
            group: 'defence'
        },
        
    ]
}