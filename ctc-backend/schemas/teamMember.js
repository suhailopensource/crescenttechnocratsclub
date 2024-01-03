import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Allows selecting a focal point in the image
      },
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'department',
      title: 'Department',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Year when the team member joined',
    },
  ],
})
