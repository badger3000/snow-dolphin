export default {
  title: 'Games',
  name: 'games',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
    },
    {
      title:'Team 1',
      name:'team1',
      type:'reference',
      to: [{type: 'teams'}]
    },
    {
      title:'Team 2',
      name:'team2',
      type:'reference',
      to: [{type: 'teams'}]
    }
  ],
}
