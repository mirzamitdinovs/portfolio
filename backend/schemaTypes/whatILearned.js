// schemas/whatILearned.js
export default {
  name: 'whatILearned',
  title: 'What I Learned',
  type: 'document',
  fields: [
    {
      name: 'lesson',
      title: 'Lesson Learned',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
}
