import { useLazyQuery } from "@apollo/client";
import React, { FormEvent, useState } from "react";
import { FiSend } from "react-icons/fi";
import { Container, Input, InputContainer } from "../../pages/Home/home-styles";
import RANDOM_FREE_TEXT from "../../querys/JokeForFreeText";
import { Loader } from "../Loader/Loader";
import { ShowJokes } from "../ShowJoke/ShowJoke";

export function InputSearch() {
  const [text, setText] = useState("");
  const [getResults, { loading, data }] = useLazyQuery(RANDOM_FREE_TEXT);

  const handleSearchResults = async (e: FormEvent) => {
    e.preventDefault();

    if (loading) return <Loader></Loader>;
    if (!text) return null;

    await getResults({
      variables: {
        text,
      },
    }).then((data) => {
      console.log(data.data.freeText.result);
    });
  };
  //

  return (
    <>
      <form
        onSubmit={handleSearchResults}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <InputContainer>
          <Input
            placeholder="Search"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button type="submit" style={{ cursor: "pointer" }}>
            <FiSend size={22} color="#fff" />
            Search
          </button>
        </InputContainer>
      </form>
      {data ? <ShowJokes jokes={data.freeText.result}></ShowJokes> : null}
    </>
  );
}
