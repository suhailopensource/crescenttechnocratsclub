import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hod',
  title: 'Head of Department',
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
      name: 'clubPosition',
      title: 'Position in Club',
      type: 'string',
      description: 'Position of the HOD within the club (e.g., President, Vice President, etc.)',
    },
  ],
})
