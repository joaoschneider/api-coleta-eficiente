const handleError = (error, req, res, next) => {
  console.log(error)
  res.sendStatus(500)
}

export { handleError }
