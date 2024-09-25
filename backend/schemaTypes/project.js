export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(80),
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(500),
    },

    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'technology'}]}],
    },
    {
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
    },
    {
      name: 'finishDate',
      title: 'Finish Date',
      type: 'datetime',
    },
    {
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'challenge'}]}],
    },
    {
      name: 'whatILearned',
      title: 'What I Learned',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'whatILearned'}]}],
    },
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{type: 'client'}],
    },
    {
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'responsibility'}]}],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    },
    {
      name: 'role',
      title: 'Current Role',
      type: 'string',
      description: 'Your role in this project (e.g. Frontend Developer, Fullstack Developer, etc.)',
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      validation: (Rule) =>
        Rule.required()
          .uri({
            scheme: ['http', 'https'],
          })
          .error('Please provide a valid GitHub URL'),
    },
    {
      name: 'previewUrl',
      title: 'Preview URL',
      type: 'url',
      validation: (Rule) =>
        Rule.required()
          .uri({
            scheme: ['http', 'https'],
          })
          .error('Please provide a valid Preview URL'),
    },
    {
      name: 'visible',
      title: 'Visible',
      type: 'boolean',
      description: 'Toggle visibility of the project',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images[0]',
    },
  },
}
