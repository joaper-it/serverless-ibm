function main(params) {
  if (params.error) {
    if (params.error.error == "not_found") {
      return null;
    }

    return Promise.reject({ error: params.error.error });
  }

  let content = JSON.stringify({
    title: params.title,
    completed: params.completed,
    url: `https://087ae8c3.eu-de.apigw.appdomain.cloud/todos/entry?id=${params._id}`,
  });

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: content,
  };
}
