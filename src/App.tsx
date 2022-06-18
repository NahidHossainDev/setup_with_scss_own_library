import { MainLayout } from "components/templates";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages";
import "./scss/main.scss";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path='/'>
                        <Route index element={<div>Welcome</div>} />
                        <Route path='dashboard' element={<Dashboard />} />
                    </Route>
                    <Route path='*' element={<div>404 NOT FOUND !!</div>} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;
