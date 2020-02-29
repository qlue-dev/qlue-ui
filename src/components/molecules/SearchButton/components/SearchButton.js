import React from "react";

import { Base } from "../styles";
import { Input } from "../../../atoms/Input";
import { Button } from "../../../atoms/Button";

function SearchButton() {
  return (
    <Base>
      <Input />
      <Button>Search</Button>
    </Base>
  );
}

export default SearchButton;
