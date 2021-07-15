import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://shoptalk.ghost.io",
  key: "d35d8fe79b8257abdf5c8a7e46",
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
