import { getFirebaseAuth } from '../firebase-auth.js'

const validateToken = async (req, res, next) => {
  const authToken = req.get('authentication')
  try {
    const decodedToken = await getFirebaseAuth().verifyIdToken(authToken)
    req.body.uid = decodedToken.uid
    next()
  } catch (e) {
    next(e)
  }
}

export { validateToken }
