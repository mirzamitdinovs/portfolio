// schemas/social.js
export default {
  name: 'social',
  title: 'Social Media',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Platform Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Profile Link',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'image',
      title: 'Platform Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
