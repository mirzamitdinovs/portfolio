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
  projects[]->{
    _id,
    title,
    description,
    visible,
    githubUrl,
    previewUrl,
    images[]{
      asset->{
        url
      }
    },
    tags[]->{
      name
    }
  },
  technologies[]->{
    _id,
    name,
    image{
      asset->{
        url
      }
    }
  }
}`;
