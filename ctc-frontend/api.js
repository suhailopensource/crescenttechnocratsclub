import client from "./sanity";

let sanityQuery = (query, params) => client.fetch(query, params)



// export const getHod = () => {
//     return client.fetch(`*[_type=="hod"]{
//         name,
//         department,
//         clubPosition,
//         position,
//         image
//       }
//       `)
// }
export const getHod = () => {
  return sanityQuery(`
  *[_type=='hod']{
    name,
       department,
        clubPosition,
           position,
           image
    }
      `);
}
export const getBlogs = () => {
  return sanityQuery(`
  *[_type=="blogPost"]{
    date,
      title,
      description,
      image,
      author
  }
  
      `);
}

export const getTeamMember = () => {
  return sanityQuery(`
  *[_type=="teamMember"]{
    name,
      department,
      image,
      position,
      year
  }`)
}

export const getPastEvents = () => {
  return sanityQuery(`
  *[_type=="pastEvent"]{
    image
  }`)
}

export const getUpcomingEvent = () => {
  return sanityQuery(`
  *[_type=="upcomingEvent"]{
    image
  }`)
}