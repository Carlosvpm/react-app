import React, { FormEvent, useState } from "react";
import { FiSend } from "react-icons/fi";
import { Input, InputContainer } from "../../pages/Home/home-styles";

type InpuSearchProps = {
  parantCallBack: any;
};

export const InputSearch = (props: InpuSearchProps) => {
  
  const [text, setText] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.parantCallBack(text)
  };
  return (
    <form
      onSubmit={handleSubmit}
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
  );
};
