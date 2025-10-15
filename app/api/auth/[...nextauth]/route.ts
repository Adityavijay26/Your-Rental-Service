import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  session: { strategy: 'jwt' as const },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials?.email?.toLowerCase().trim()
        const password = credentials?.password

        // Demo user for now
        if (email === 'demo@demo.com' && password === 'demo123') {
          return { id: 'demo-user', name: 'Demo User', email }
        }
        return null
      },
    }),
  ],
  pages: {},
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }


