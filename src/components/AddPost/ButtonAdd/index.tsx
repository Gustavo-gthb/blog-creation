"use client";

import React, { useState } from "react";
import styles from "@/components/AddPost/ButtonAdd/style.module.css";

const ButtonAdd = () => {
  const [add, setAdd] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    message: "",
    date: "",
  });
  const [posts, setPosts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleClick = () => {
    setAdd(!add);
    console.log(add);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { ...inputs };

    console.log(inputs.title);
    setPosts([...posts, newPost]);
    setInputs({ title: "", message: "", date: "" });
  };

  return (
    <>
      <div className={styles.buttonAddContainer}>
        <form onSubmit={handleSubmit} className={styles.formStyles}>
          <input
            type="text"
            placeholder="adicione o titulo"
            name="title"
            onChange={handleChange}
            value={inputs.title}
          />

          <input
            type="text"
            placeholder="adicione uma mensagem"
            name="message"
            onChange={handleChange}
            value={inputs.message}
          />

          <input
            type="date"
            placeholder="adicione uma data"
            name="date"
            onChange={handleChange}
            value={inputs.date}
          />
          <button type="submit">Enviar postagem</button>
        </form>

        {posts.map((post, index) => (
          <div key={index}>
            <p>Data: {post.date} </p>
            <div className={styles.textContainer}>
              <p>título: {post.title} </p>
              <p>mensagem: {post.message} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ButtonAdd;
