import React, { useEffect, useReducer, useRef } from 'react';
import HomeNavBar from './HomeNavBar'
import './Home.css';
import HomeJavascrptLogoSection from './HomeJavascrptLogoSection';
import HomeMasonarySection from './HomeMasonarySection';
import HomeTopSection from './HomeTopSection';
import { HomeContextProvider, initialHomeState } from './HomeContext';
import { homeReducer } from './HomeProvider';


const Home: React.FC = () => {

    const renders = useRef(0);
    const [homeState, stateDispatch] = useReducer(homeReducer,initialHomeState)

    const handleScroll = () => {
        //stateDispatch({type: 'setScroll',payload: 2});
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            const navbar: HTMLElement | null = document.getElementById("navbar");
            if (navbar) {
                navbar.style.top = "0";
            }
        } else {
            const navbar: HTMLElement | null = document.getElementById("navbar");
            if (navbar) {
                navbar.style.top = "-50px";
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <HomeContextProvider value={{homeState,stateDispatch}}>
            <div className="Home">
                <HomeNavBar/>
                <div>renders: {renders.current++} </div>
                <div className="parallax-image img1"/>
                <HomeTopSection/>
                <HomeMasonarySection/>
                <HomeJavascrptLogoSection/>
            </div>
        </HomeContextProvider>
    );
}

export default Home;