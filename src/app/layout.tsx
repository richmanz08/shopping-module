'use client'

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
    },
    mutations: {
      onError: (error) => {
        console.error('Mutation Error:', error.message)
      },
    },
  },
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+IN:wght@100..400&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="antialiased">
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
