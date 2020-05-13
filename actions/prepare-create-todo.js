function main(params) {
  if (!params.title) {
    return Promise.reject({ error: "no title" });
  }

  return {
    doc: {
      title: params.title,
      completed: false,
    },
    params: {
      include_docs: true,
    },
  };
}
