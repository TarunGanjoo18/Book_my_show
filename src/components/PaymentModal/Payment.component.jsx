import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function PaymentModal({isOpen, setIsOpen , price}) {

  function closeModal() {
    setIsOpen(false)
  }

  const launchRazorPay =() =>{
      let options ={
          key : "rzp_test_VuzlJ4COjUn1FJ"
          ,
          amount : price *100,
          currency : "INR",
          name: "Book My Show Clone",
          description : " Movie Purchase or Rental",
          image : "data:image/jpeg;base64,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"
          , handler : ()=>{
              setIsOpen(false);
              alert("Payment Done")
          },
          theme : {color : "#c4242d"}
      };
      const RazorPay = new window.Razorpay(options)
      RazorPay.open();
  }
 
  return (
    <>
   

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="z-50 fixed inset-0 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                 Please make a payment
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Hello Please click on the below button to make a payment.
                  </p>
                </div>

                <div className="w-full  mt-4">
                  <button
                    type="button"
                    className=" w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white-900 bg-red-600 border border-transparent rounded-md hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={launchRazorPay}
                  >
                    Pay ₹{price}
                  </button>


                  <button
                    type="button"
                    className= "mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={closeModal}
                  >
                   Cancel Payment
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}











