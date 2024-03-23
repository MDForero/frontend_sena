'use client'

import { useRouter } from "next/navigation"
import Navigation from "../components/Layouts/Navigation"
import Sidebar from "../components/Layouts/Sidebar"
import { useAuth } from "../hooks/auth"
import { CartProvider } from "../context/CartContext"
import { useEffect } from "react"

const DashboardLayout = ({ children }) => {
  const router = useRouter()
  const { user } = useAuth()
  useEffect(() => {
    if (!user) router.push('/login')
  }, [user])
  return (
    <section className="h-screen overflow-hidden">
      <Navigation user={user} />
      <main className="w-full flex items-start">
        <Sidebar user={user} />
        <section className="w-full">

          <CartProvider>
            {children}
          </CartProvider>
        </section>
      </main>
    </section>
  )


}

export default DashboardLayout