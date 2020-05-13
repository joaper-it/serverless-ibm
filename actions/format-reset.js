function main() {
  // need this instead of returning json directly due to built-in validation
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: "[]",
  };
}
