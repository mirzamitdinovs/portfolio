// schemas/responsibility.js
export default {
  name: 'responsibility',
  title: 'Responsibility',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Responsibility Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
