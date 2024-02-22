import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../features/cartSlice";

const Productcard = () => {
  const items = useSelector((state) => state.cartdata.items);
 // console.log(items);

    const dispatch = useDispatch();
   

  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-5 justify-items-center">
        {items.map((item) => {
          return (
            <div className="py-10" key={item.id}>
              <div className=" rounded overflow-hidden max-w-[300px] shadow-lg ">
                <img className="w-full" src={item.img} alt="science" />
                <div className="px-2 py-2">
                  <div className=" font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-slate-600 block">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam, animi.
                  </p>
                </div>
                <div className="grid grid-flow-col gap-5 pb-2 px-2">
                  <span className=" text-black px-2 py-1 rounded-full  text-center">
                    {item.price}
                  </span>
                  <span onClick={() => dispatch(addtocart(item))} className=" bg-red-500 px-2 py-1 cursor-pointer rounded-full text-white text-center">
                    Add to cart
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productcard;
