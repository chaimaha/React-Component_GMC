import "./App.css";
import Navbar from "./assets/Navbar";
import Pets from "./assets/Pets";
import React from "react";
import Dogs from "./assets/Dogs";
import Cats from "./assets/Cats";
import Rabbit from "./assets/Rabbit";
import Footer from "./Footer";

function App() {
  let pets = [
    { name: "Leo", category: "cat", age: "2 months", img: "/pets/leo.jfif" },
    { name: "Lucy", category: "cat", age: "8 months", img: "/pets/leo1.jfif" },
    { name: "Hazel", category: "dog", age: "4 months", img: "/pets/dog.jfif" },
    { name: "Abby", category: "dog", age: "15 months", img: "/pets/dog2.jfif" },
    {
      name: "Pepper",
      category: "dog",
      age: "18 months",
      img: "/pets/dog3.jfif",
    },
    { name: "Zoe", category: "dog", age: "3 months", img: "/pets/dog4.jfif" },
    {
      name: "Bully",
      category: "rabbit",
      age: "10 months",
      img: "/pets/lap1.jfif",
    },
    {
      name: "Bella",
      category: "rabbit",
      age: "24 months",
      img: "/pets/lap2.jfif",
    },
  ];
  return (
    <>
      <Navbar></Navbar>
      <h1 class="section-title">
        All <span>Pets</span>
      </h1>
      <Pets item={pets}></Pets>
      <h1 class="section-title">
        Dog<span>s</span>
      </h1>
      <Dogs item={pets}></Dogs>
      <h1 class="section-title">
        Cat<span>s</span>
      </h1>
      <Cats item={pets}></Cats>
      <h1 class="section-title">
        Rabbi<span>ts</span>
      </h1>
      <Rabbit item={pets}></Rabbit>
      <Footer></Footer>
    </>
  );
}

export default App;
