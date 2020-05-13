function main(params) {
  if (!params.id) {
    return Promise.reject({ error: "no id" });
  }

  return { docid: params.id };
}
