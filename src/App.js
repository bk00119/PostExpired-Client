import { BrowserRouter, Routes, Route } from "react-router-dom";
  
import pageRoutes from "./routes/pageRoutes";
import Navbar from "./components/Navbar/navbar";

export default function App() {
    const allPageRoutes = pageRoutes.map((linkComponent) => {
        return <Route exact key={linkComponent.path} path={linkComponent.path} element={linkComponent.element} />;
    });
    
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {/* <Route path="/" element={<Navbar />} >
                <Route path = "home" element = {<Home />}/>
                <Route path = "browse" element = {<Browse />} />
                <Route path="stores" element={<Stores/>} />
                <Route path="saved" element={<Saved />} />
                <Route path = "more" element = {<More/>} />
                <Route
                    path="*"
                    element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
                />
                </Route> */}
                {pageRoutes.map((route) => (
                    <Route key={route.path} exact path={route.path} element={route.element} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}