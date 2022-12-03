const post = ({ router, path, useCase }) => {
  router.post(path, async (req, res, next) => {
    try {
      const result = await useCase({
        ...req.body,
        ...req.params,
        ...req.query,
      })
      res.status(201).json(result)
    } catch (err) {
      next(err)
    }
  })
}

export { post }
