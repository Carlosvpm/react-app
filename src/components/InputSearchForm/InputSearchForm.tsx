import { useLazyQuery } from "@apollo/client";
import { FormEvent, useState } from "react";
import { FiSend } from "react-icons/fi";

import RANDOM_FREE_TEXT from "../../querys/JokeForFreeText";
import { Loader } from "../LoaderView/Loader";
import { ShowJokes } from "../ShowJokeView/ShowJoke";
import { Input, InputContainer } from "./InputSearchForm-styles";

type InputSearchProps = {
  onSubmit: any;
};

export function InputSearch(props: InputSearchProps) {
  const [text, setText] = useState("");
  const [getResults, { loading, data }] = useLazyQuery(RANDOM_FREE_TEXT);

  const emitEvent = (dataForEmit: any) => {
    props.onSubmit(dataForEmit);
  };
  const handleSearchResults = async (e: FormEvent) => {
    e.preventDefault();

    if (loading) return <Loader></Loader>;
    if (!text) return null;

    await getResults({
      variables: {
        text,
      },
    }).then((results) => {
      emitEvent(results);
    });
  };
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
    </>
  );
}
