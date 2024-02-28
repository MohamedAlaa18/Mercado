"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/state/store";
import { ReactNode } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {


  return (
    <Provider
      store={store}
    >
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="keywords" content="HTML, CSS, JavaScript, React.js, React, Next.js, Next, CSS, Material Ui, PostgreSQL, Frontend, Front-end ,fullstack ,full-stack" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="author" content="Mohamed Alaa" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" type="image/svg+xml" href="/logo.png" />
          <title>Mercado</title>
        </head>
        <body className={inter.className} suppressHydrationWarning={true}>

          {children}

        </body>
      </html>
    </Provider>
  );
}
