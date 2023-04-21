export default {
    title:'stats',
    name: 'stats',
    type: 'object',
    groups: [
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