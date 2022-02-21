import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Slideshow from './pages/Slideshow'
import NoPage from './pages/NoPage'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: 'system'
}
const theme = extendTheme({ config })
export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/slideshow/:category' element={<Slideshow/>}/>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
