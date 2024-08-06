import { useEffect } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { GiRoyalLove } from "react-icons/gi";
import Sidepage from "./Sidepage";
import { CgTrashEmpty } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  getCartTotal
} from "./features/cartSlice";

const Cardpage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.cartdata
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);


  return (
    <div className=" min-h-screen w-full">
      <h1>cardData</h1>
      <div className=" container mx-auto py-20">
        <div className="flex justify-center gap-2 ">
          <div className="w-[60%] bg-white border px-4 py-8">
            {cart.length === 0 ? <table className='table cart-table mb-0'>
                                        <tbody>
                                            <tr>
                                                <td className=' col-span-6'>
                                                    <div className='text-xl flex items-center gap-1'>
                                                        <p>Your Cart Is Empty </p>
                                                        <span className=' text-red-500'> <CgTrashEmpty /></span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>:cart.map((data) => {
              return (
                <>
                  <div className=" flex justify-between px-8">
                    <div>
                      <img className="w-[160px] rounded-lg" src={data.img} />
                    </div>

                    <div className=" flex flex-col gap-4">
                      <h1 className=" font-bold text-xl">{data.title}</h1>
                      <p className=" text-slate-800">color-{data.color}</p>
                      <p className=" text-slate-800">size-{data.size}</p>
                      <div className="flex gap-1">
                        <span
                          className="bg-blue-600 rounded-sm px-3 py-2 cursor-pointer text-white"
                          onClick={() => dispatch(removeItem(data.id))}
                        >
                          <MdOutlineDeleteForever />
                        </span>
                        <span className=" bg-red-800 rounded-sm text-white px-3 py-2">
                          <GiRoyalLove />
                        </span>
                      </div>
                    </div>
                    <div >
                      <div className="flex gap-5">
                        <button
                          className=" bg-blue-500 px-2 text-white"
                          onClick={() =>
                            dispatch(decreaseItemQuantity(data.id))
                          }
                        >
                          -
                        </button>
                        <div>
                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value={data.quantity}
                            type="number"
                            className="form-control w-[35px]"
                            onChange={() => null}
                          />
                        </div>
                        <button
                          className=" bg-blue-500 px-2 text-white"
                          onClick={() =>
                            dispatch(increaseItemQuantity(data.id))
                          }
                        >
                          +
                        </button>
                      </div>
                      <div className="py-3">
                      <p className="text-center">price-{data.price * data.quantity}</p>
                      </div>
                    </div>
                  </div>
                  <hr className="w-full bg-slate-500 mb-2 mt-4 mx-auto" />
                </>
              );
            })}
          </div>
          <div>
            <Sidepage totalQuantity={totalQuantity} totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardpage;
