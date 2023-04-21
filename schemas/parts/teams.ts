export default {
  title: 'Teams',
  name: 'teams',
  type: 'document',
  fields: [
    {
      title: 'School',
      name: 'School',
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
      title: 'County',
      name: 'county',
      type: 'string',
      options: {
        list: [
          {title: 'County 1', value:'county1' },
          {title: 'County 2', value:'county2' },
          {title: 'County 3', value:'county3' },
        ]
      }
    },
    {
      title: 'Division/Conference',
      name: 'divisionConference',
      type:'string',
      options: {
        list: [
          {title: 'Division 1', value:'division1'},
          {title: 'Division 2', value:'division2'},
          {title: 'Division 3', value:'division3'},
        ]
      }
    }
  ],
}
