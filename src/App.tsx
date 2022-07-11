import { getValue } from "@testing-library/user-event/dist/utils";
import * as React from "react";
import { useRef } from "react";

import "./App.css";

export default function App() {
  //[items inside the component state, fuction called to update the items]
  //("default data")
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string | undefined>("");
  const [color, setColor] = React.useState<string | undefined>("red");
  const [gender, setGender] = React.useState<string>("Female");

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, age, gender, color);
  };

  const changeGender = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setGender(event.target.value);
  };

  const isRadioSelected = (value: string): boolean => gender === value;

  const resetInputField = () => {
    setName("");
    setAge("");
  };

  return (
    <div className="pa-16">
      <form onSubmit={handleSubmit}>
        <Input name="Name" value={name} onChange={changeName} />
        <Input name="Age" value={age} onChange={changeAge} />
        <div className="mb-16">
          <label>Gender</label>
          <div className="radiostyle">
            <div>
              <input
                type="radio"
                name="Gender"
                value="Female"
                onChange={changeGender}
                checked={isRadioSelected("Female")}
              />
              <span>Female</span>
            </div>
            <div>
              <input
                type="radio"
                name="Gender"
                value="Male"
                onChange={changeGender}
                checked={isRadioSelected("Male")}
              />
              <span> Male</span>
            </div>
          </div>
        </div>
        <Select name="Favourite Color" value={color} onChange={changeColor} />
        <button type="submit" className="btn-primary mb-16">
          Submit
        </button>
        <button onClick={resetInputField} className="btn-secondary">
          Clear
        </button>
      </form>
    </div>
  );
}

type InputType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange, name }: InputType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

type SelectType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, onChange, name }: SelectType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <select value={value} onChange={onChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};
