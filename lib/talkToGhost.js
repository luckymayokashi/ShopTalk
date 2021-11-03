import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_API_KEY,
  version: "v3",
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(slug) {
  return await api.posts
    .browse({
      include: "tags,authors",
      filter: `slug:${slug}`,
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getTags() {
  return await api.tags
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getFeaturedPost() {
  return await api.posts
    .browse({
      limit: "all",
      filter: "featured:true",
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getLatestCategoryPost(category) {
  return await api.posts
    .browse({
      limit: "1",
      filter: `tag:${category}`,
      order: "published_at DESC",
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getFiveLatestPostGeneral() {
  return await api.posts
    .browse({
      limit: "5",
      filter: "featured:false",
      order: "published_at DESC",
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getFiveLatestPostCategory(category) {
  return await api.posts
    .browse({
      filter: `tag:${category}`,
      from: "2",
      order: "published_at DESC",
      limit: "5",
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPopularTalk() {
  return await api.posts
    .browse({
      limit: "5",
      filter: "tag:populartalk",
      order: "published_at DESC",
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
}

//Buiolud out specific funtions that return certain sets of data so that when we are consuming specific data at a page level it can be dispersed and oraginzed in a neat fashion as well as handing out specific props to children to make it easier on the eyes
