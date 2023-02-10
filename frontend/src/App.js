import {useState} from "react";
import Menu from "./components/Menu.jsx";
import Navbar from "./components/Navbar.jsx";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/theme.utils.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Video from "./pages/Video.jsx";
import Signin from "./pages/Signin.jsx";

const Container = styled.div`
  display:flex;
`
const Main = styled.div`
  flex:5;
  background: ${({theme}) => theme.bgLighter};
`
const Wrapper = styled.div`
padding: 1.5rem 2rem;
`
function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <Container>
            <Menu />
            <Main>
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
              <Wrapper>
                <Routes>
                  <Route path="/">
                    <Route index element={<Home type="random"/>}/>
                    <Route path="trend" element={<Home type="trend"/>}/>
                    <Route path="subscriptions"  element={<Home type="sub"/>}/>
                    <Route path="video">
                      <Route path=":id" element={<Video/>}/>
                    </Route>
                    <Route path="signin" element={<Signin/>}/>
                  </Route>
                </Routes>
              </Wrapper>
            </Main>
          </Container>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
