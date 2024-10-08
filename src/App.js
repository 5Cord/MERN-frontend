import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';


import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { fetchAuthMe } from "./redux/slices/auth";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe())
  }, [dispatch])
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/FullPost" element={<FullPost />}></Route>
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={<AddPost />} />
          <Route path="/add-post" element={<AddPost />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/register" element={<Registration />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
