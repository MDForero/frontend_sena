'use client'

import { useRouter } from "next/navigation"
import Navigation from "../components/Layouts/Navigation"
import { useAuth } from "../hooks/auth"
import { CartProvider } from "../context/CartContext"
import { useEffect } from "react"

const DashboardLayout = ({ children }) => {
  const router = useRouter()
  const { user } = useAuth()
  useEffect(() => {
    // if (!user) router.push('/login')
  }, [user])
  return (
    <section className="h-screen  max-w-screen-2xl relative mx-auto ">
      <Navigation user={user} />
      <main className="w-full flex items-start">
        <section className="w-full ">

          <CartProvider>
            {children}
          </CartProvider>
        </section>
      </main>
    </section>
  )


}

export default DashboardLayout