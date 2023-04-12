import './App.css';
import Header from "./components/Header/index";
import Hero from "./components/Hero/hero";
import Home from './pages/Home/home'
import Home2 from './components/Home/home'
import Support from './components/Support/support'
import Footer from "./components/Footer/footer";
import Recipes from "./components/Recipes/recipes";
import Blog from "./components/Blog/blog4";
import Meat from "./components/Meat/meat";
import About from "./components/About/about";

import './styles/style.scss'
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="home2" element={<Home2/>}/>
                <Route path="recipes" element={<Recipes/>}/>
                <Route path="meat" element={<Meat/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="blog" element={<Blog/>}/>
                <Route path="support" element={<Support/>}/>
            </Routes>
            <Hero/>
            <Footer/>
        </>
    );
}

export default App;
