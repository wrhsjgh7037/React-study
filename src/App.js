import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "조건호",
    birthday: "020724",
    gender: "남자",
    job: "학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "홍길동",
    birthday: "222222",
    gender: "남자",
    job: "도적",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "김영훈",
    birthday: "333333",
    gender: "남자",
    job: "회사원",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
