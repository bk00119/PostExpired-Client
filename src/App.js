import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
  import Home from "./routes/home"
  import Browse from "./routes/browse"
  import Stores from "./routes/stores";
  import Saved from "./routes/saved";
  import More from "./routes/more";
  import Google from "./components/google"
  import Navbar from "./components/navbar"

export default function App() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />} >
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
                </Route>
            </Routes>
            </BrowserRouter>
            <Google />
        </div>
    )
}