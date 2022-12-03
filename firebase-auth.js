import { applicationDefault, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'

let firebaseAuth

const startFirebaseAuth = () => {
  const app = initializeApp({ credential: applicationDefault() })
  firebaseAuth = getAuth(app)
}

const getFirebaseAuth = () => {
  if (!firebaseAuth) {
    startFirebaseAuth()
  }
  return firebaseAuth
}

export { getFirebaseAuth }
