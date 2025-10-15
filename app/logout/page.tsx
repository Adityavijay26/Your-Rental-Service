'use client'

import { useEffect } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LogoutPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.replace('/')
      return
    }
    signOut({ redirect: false }).finally(() => router.replace('/'))
  }, [session, status, router])

  return (
    <div className="min-h-[50vh] flex items-center justify-center text-gray-700">
      Signing you out…
    </div>
  )
}


