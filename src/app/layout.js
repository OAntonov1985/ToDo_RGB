"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import { store } from "@/app/utils/slise/store"

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//     title: "RGB ToDo List test",
//     description: 'RGB ToDo List test',
// };

export default function RootLayout({ children }) {
    return (
        <Provider store={store}>
            <html lang="en">
                <body className={inter.className}>{children}</body>
            </html>
        </Provider>
    );
}
