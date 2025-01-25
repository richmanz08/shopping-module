'use client'

import { Figtree } from 'next/font/google'
import './globals.css'
import 'antd/dist/reset.css'
import '@ant-design/v5-patch-for-react-19'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from '../redux/store'
import NavbarComponent from '@/components/navbar/navbar'
import FooterComponent from '@/components/footer/footer'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // Retry failed requests 2 times
      refetchOnWindowFocus: false, // Disable refetch on window focus
      staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
      // cacheTime: 1000 * 60 * 30, // Cached data will expire after 30 minutes
    },
    mutations: {
      onError: (error) => {
        console.error('Mutation Error:', error.message)
      },
    },
  },
})

const figTree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${figTree.variable} antialiased`}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <NavbarComponent />
            <div className="min-h-[72vh]">{children}</div>
            <FooterComponent />
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  )
}
