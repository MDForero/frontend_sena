'use client'

import { useRouter } from "next/navigation"
import Navigation from "../components/Layouts/Navigation"
import Sidebar from "../components/Layouts/Sidebar"
import { useAuth } from "../hooks/auth"
import { CartProvider } from "../context/CartContext"

const DashboardLayout = ({ children }) => {
  const { user } = useAuth()
  const router = useRouter()

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