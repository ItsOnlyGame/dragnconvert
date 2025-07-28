import { Link } from 'react-router'

export default function PageComponent() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-2xl font-bold">404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        Please check the URL or return to the{' '}
        <Link to="/" className="underline">
          home page
        </Link>
      </p>
    </div>
  )
}
