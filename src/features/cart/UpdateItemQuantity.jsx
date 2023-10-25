import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };
  const decrease = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };
  return (
    <div className="flex gap-4">
      <Button type="round" onClick={decrease}>
        -
      </Button>
      <p>{quantity}</p>
      <Button type="round" onClick={increase}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
