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
    <section>
      <Navigation user={user} />
      <section className="flex">

        <Sidebar />
        <main className="w-full">
          <CartProvider>
            {children}
          </CartProvider>
        </main>
      </section>
    </section>
  )


}

export default DashboardLayout