function logger(req, res, next) {
  // if (req.method !== "POST") {
  console.log(`This API call with method ${req.method} on route ${req.url}`);
  next();
}

module.exports = logger;
