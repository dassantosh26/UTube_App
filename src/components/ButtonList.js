import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Trending",
  "Live",
  "Gaming",
  "Cricket",
  "Socer",
  "Football",
  "Songs",
  "Comedy",
  "News",
  "Cooking",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => {
        return (
          <div key={index}>
            <Button name={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
