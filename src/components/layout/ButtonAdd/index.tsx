"use client";

import React, { useState } from "react";
import styles from "@/components/ButtonAdd/style.module.css";
import HeartIcon from "@/components/shared/HeartIcon";
import { usePostContext } from "@/context/PostContext";

const ButtonAdd = () => {
  const [add, setAdd] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    message: "",
    date: "",
  });
  const [posts, setPosts] = useState([]);
  const {filter} = usePostContext();

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

    // console.log(inputs.title);
    console.log();

    setPosts([...posts, newPost]);
    // console.log(...posts);
    setInputs({ title: "", message: "", date: "" });
  };

  const filteredPost = posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

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

        <p>{JSON.stringify(inputs)} </p>
        {filteredPost.map((post, index) => (
          <div key={index} className={styles.cards}>
            <div className={styles.iconDateContainer}>
              <p>{post.date} </p>

              <p>
                <HeartIcon />
              </p>
            </div>

            <div className={styles.textContainer}>
              <h3>{post.title} </h3>
              <p>{post.message} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ButtonAdd;
