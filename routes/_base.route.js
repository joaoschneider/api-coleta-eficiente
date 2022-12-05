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

const get = ({ router, path, useCase }) => {
  router.get(path, async (req, res, next) => {
    try {
      const result = await useCase({ ...req.body, ...req.params, ...req.query })
      res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  })
}

export { get, post }
