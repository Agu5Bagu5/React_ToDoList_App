import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAct } from "../redux/act-slice";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const AddAct = () => {
  const [inpValue, setInpValue] = useState("");
  const dispatch = useDispatch();

  const addSystem = () => {
    setInpValue("");
    dispatch(addAct({ act: inpValue, status: false }));
  };

  return (
    <div>
      <InputGroup>
        <FormControl
          className="input-act"
          type="text"
          placeholder="Add activitiy you want to do"
          value={inpValue}
          onChange={(e) => setInpValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addSystem();
            }
          }}
        />
        <Button onClick={addSystem}>Add</Button>
      </InputGroup>
    </div>
  );
};

export default AddAct;
