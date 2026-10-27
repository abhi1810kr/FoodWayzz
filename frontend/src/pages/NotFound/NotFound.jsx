import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="not-found">
      <div className="not-found-content">
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1>Page not found</h1>
        <p className="not-found-message">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link className="not-found-home" to="/">
          Back to home
        </Link>
      </div>
    </main>
  )
}

export default NotFound
