export default {
  title: 'Games',
  name: 'games',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title:'Logo',
      name:'logo',
      type:'image',
      options: {
        hotspot: true
      }
    },
    {
      title:'Position',
      name:'position',
      type:'string'
    }
  ],
}
