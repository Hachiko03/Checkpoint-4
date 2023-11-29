import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";

function App() {
  const API = "https://my-json-server.typicode.com/typicode/demo/posts";

  const getData = async () => {
    const res = await axios.get(API);
    console.log(res.data, "get");
  };
  const postData = async () => {
    const res = await axios.post(API, {
      id: 5,
      title: "cinco",
    });
    console.log(res.data, "post");
  };

  const actualizarData = async () => {
    const res = await axios.put(`${API}/1`, { title: "nuevo Titulo" });
    console.log(res.data, "put");
  };

  const deleteData = async () => {
    const res = await axios.delete(`${API}/1`);
    console.log(res.data, "delete");
  };

  useEffect(() => {
    getData();
    postData();
    actualizarData();
    deleteData();
  }, []);
}

export default App;
