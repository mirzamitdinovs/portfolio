// schemas/challenge.js
export default {
  name: 'challenge',
  title: 'Challenge',
  type: 'document',
  fields: [
    {
      name: 'challenge',
      title: 'Challenge Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'solution',
      title: 'Solution',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
}
