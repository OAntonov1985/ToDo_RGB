"use client"
import styles from "./page.module.css";
import Header from './components/Header/Header';
import MainContetn from './components/MainContent/MainContent';
import { Provider } from 'react-redux';
import { store } from "@/app/utils/slise/store";




export default function Home() {
    return (
        <Provider store={store}>
            <main className={styles.main}>
                <Header />
                <MainContetn />
            </main>
        </Provider>
    );
}
