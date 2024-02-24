import type {Metadata} from "next";
import Head from "next/head";
import {Inter} from "next/font/google";
import "./styles/globals.css";
import Header from "@/app/components/header/page";
import Footer from "@/app/components/footer/footer";
import {ThemeProvider} from "./ThemeContext";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Отдел МО",
    description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <ThemeProvider>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </Head>
                <html lang="en">
                <body className={inter.className}>
                <Header/>
                {children}
                <Footer />
                </body>
                </html>

            </ThemeProvider>

        </>
    );
}
