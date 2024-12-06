const getParam = (req, key = "") => {
  let queryRes = "";
  let bodyRes = "";

  if (req.query) {
    queryRes = req.query[key] || req.query[key.toLowerCase];
  }

  if (req.body) {
    bodyRes = req.body[key] || req.query[key.toLowerCase];
  }

  return queryRes || bodyRes || "";
};

export { getParam };
