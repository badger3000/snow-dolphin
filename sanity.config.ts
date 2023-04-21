import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sport Stats',

  projectId: 'di8pw1hx',
  dataset: 'stats',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
