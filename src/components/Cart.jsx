import Link from "next/link";

const Cart = () => {
  return (
    <section className="py-14">
      <div className="container">
        <div className="py-5 border-b mb-5">
            <Link href="/menu" className="inline-flex items-center justify-center bg-main text-white rounded-full h-8 w-8 mr-2">
                <span className="bi bi-chevron-left"></span>
            </Link>
            <span className="font-semibold">Back to Menu</span>
        </div>
        <div className="grid grid-cols-12">
            {/* <div className="col-span-8 grid grid-cols-8">
                <span className="font-bold text-gray-500">Item</span>
                <span className="font-bold text-gray-500">Name</span>
                <span className="font-bold text-gray-500">Price</span>
                <span className="font-bold text-gray-500">Quantity</span>
                <span className="font-bold text-gray-500">Total</span>
            </div> */}
            {/* <div className="col-span-4">Cart Totals</div> */}
        </div>
      </div>
    </section>
  )
}

export default Cart
