import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: "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",
});

export const getGists = async () => {
  console.log("GET GISTS");
  return await octokit.request("GET /users/{username}/gists", {
    accept: "application/vnd.github.v3+json",
    username: "D3joTT",
  });
};

export const getGist = async (id) => {
  console.log("GET GIST");
  // console.warn(() => {});
  return await octokit.request("GET /gists/{gist_id}", {
    gist_id: `${id}`,
  });
};

export const createGist = async (payload) => {
  console.log("CREATE GIST");
  return await octokit.request("POST /gists", payload);
};

export const updateGist = async (token, payload) => {
  console.log("UPDATE GIST");
  return await octokit.request("PATCH /gists/{gist_id}", payload);
};

export const deleteGist = async (id) => {
  console.log("DELETE GIST");
  return await octokit.request(`DELETE /gists/{gist_id}`, {
    gist_id: `${id}`,
  });
};

const exported = {
  getGists,
  getGist,
  createGist,
  updateGist,
  deleteGist,
};

export default exported;
