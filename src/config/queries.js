export const PROJECTS_SCHEMA = `*[_type == "project"]{
  _id,
  title,
  description,
  visible,
  images[]{
    asset->{
      url
    }
  },
  tags[]->{
    name
  }
}`;
export const PROJECT_DETAILS_SCHEMA = `*[_type == "project"]{
  _id,
  title,
  description,
  startDate,
  finishDate,
  role,
  visible,
  images[]{
    asset->{
      url
    }
  },
  client->{
    name,
    logo{
      asset->{
        url
      }
    }
  },
  technologies[]->{
    name,
    image{
      asset->{
        url
      }
    }
  },
  challenges[]->{
    challenge,
    solution
  },
  whatILearned[]->{
    lesson
  },
  responsibilities[]->{
    description
  },
  tags[]->{
    name
  }
}`;
export const TECHNOLOGIES_SCHEMA = `*[_type == "technology"]{
  _id,
  name,
  image
}`;

export const USER_SCHEMA = `*[_type == "user"]{
    _id,
    first_name,
    last_name,
    short_bio,
    detailed_bio,
    image{
      asset->{
        url
      }
    },
    skills[]->{
      name,
      description,
      image{
        asset->{
          url
        }
      }
    },
    socials[]->{
      name,
      link,
      image{
        asset->{
          url
        }
      }
    },
    resume{
      asset->{
        url
      }
    },
    experiences[]->{
      _id,
      job_title,
      company->{
        name,
        logo{
          asset->{
            url
          }
        }
      },
      start_date,
      end_date,
      job_description,
      achievements_or_tasks,
    },
  }`;

export const EXPERIENCE_SCHEMA = `*[_type == "experience"]{
    _id,
    job_title,
    client->{
      name,
      logo{
        asset->{
          url
        }
      }
    },
    start_date,
    end_date,
    job_description,
    achievements_or_tasks,
  }`;
