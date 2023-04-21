export default {
  title: 'Players',
  name: 'players',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title:'Photo',
      name:'photo',
      type:'image',
      options: {
        hotspot: true
      }
    },
    {
      title:'Position',
      name:'position',
      type:'string'
    },
    {
      title:'Year',
      name:'year',
      type:'string',
      initialValue: 'freshman',
      options: {
        list: [
          {title: 'Freshman', value:'freshman'},
          {title: 'Sophomore', value:'sophmore'},
          {title: 'Junior', value:'junior'},
          {title: 'Senior', value:'senior'},

        ]

      }
    },
    {
      title:'Team',
      name:'team',
      type:'reference',
      to:[{type:'teams'}],
    },
    {
      title:'Stats',
      name:'stats',
      type:'array',
      of: [
        {
          type: 'reference',
          to:[{type: 'playerStats'}],
          weak: true
        }

      ]
    }  
  ],
}
