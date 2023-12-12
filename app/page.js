'use client'
import Image from 'next/image'
import { useAuth } from './hooks/auth'
import Link from 'next/link'

export default function Home() {
  const { user } = useAuth({ middleware: 'guest' })
  return (
    <div className="relative flex items-top justify-center min-h-screen bg-gray-100  sm:items-center sm:pt-0">
      <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
        {user ? (
          <Link
            href="/dashboard"
            className="ml-4 text-sm text-gray-700 underline">
            Dashboard
          </Link>
        ) : (
          <>
            <Link
              href="/login"
              className="text-sm text-gray-700 underline">
              Login
            </Link>

            <Link
              href="/registro"
              className="ml-4 text-sm text-gray-700 underline">
              Registro
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
