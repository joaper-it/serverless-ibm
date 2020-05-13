function main(params) {
  // need this instead of returning json directly due to built-in validation
  let content = JSON.stringify(
    params.rows.map((row) => {
      return {
        title: row.doc.title,
        completed: row.doc.completed,
        url: `https://087ae8c3.eu-de.apigw.appdomain.cloud/todos/entry?id=${row.doc._id}`,
      };
    })
  );

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: content,
  };
}
