// schemas/experience.js
export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'job_title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Job title is required'),
    },
    {
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: [{type: 'client'}],
      validation: (Rule) => Rule.required().error('Company reference is required'),
    },
    {
      name: 'start_date',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required().error('Start date is required'),
    },
    {
      name: 'end_date',
      title: 'End Date',
      type: 'date',
      validation: (Rule) =>
        Rule.custom((end_date, context) => {
          const start_date = context.document.start_date
          return start_date && end_date && end_date < start_date
            ? 'End date cannot be earlier than start date'
            : true
        }),
    },
    {
      name: 'job_description',
      title: 'Job Description',
      type: 'text',
      validation: (Rule) => Rule.required().error('Job description is required'),
    },
    {
      name: 'achievements_or_tasks',
      title: 'Achievements/Tasks',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) =>
        Rule.required().min(1).error('At least one task or achievement is required'),
    },
  ],
}
