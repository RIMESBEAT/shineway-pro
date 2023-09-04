'use client'

 
import { ThemeProvider } from "next-themes"




 
export const Provider = ({children})=><ThemeProvider attribute="class">{children}</ThemeProvider>