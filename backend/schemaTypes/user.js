// schemas/client.js (updated)
export default {
  name: 'user',
  title: 'User Info',
  type: 'document',
  fields: [
    {
      name: 'first_name',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'last_name',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_bio',
      title: 'Short Bio',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'detailed_bio',
      title: 'Detailed Bio',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    },
    {
      name: 'socials',
      title: 'Social Media Links',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'social'}]}],
    },
    {
      name: 'resume',
      title: 'Resume (PDF)',
      type: 'file',
      options: {
        accept: 'application/pdf', // Only allow PDF files
      },
      validation: (Rule) => Rule.required().error('A resume is required and must be a PDF.'),
    },
    {
      name: 'experiences',
      title: 'Experiences',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'experience'}]}],
      options: {
        // Enable drag-and-drop ordering within the array
        sortable: true,
      },
    },
  ],
}
