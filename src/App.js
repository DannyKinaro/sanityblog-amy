import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import Blogpost from "./pages/Blogpost";
import Error from "./pages/Error";
<<<<<<< HEAD
import Devplug from "./Devplug";
=======
import Devplug from "./components/Devplug";
>>>>>>> f11f7588a652b44582231e7b9f960a97d4f34648

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:slug" element={<Blogpost />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Devplug/>
      </BrowserRouter>
    </>
  );
}
