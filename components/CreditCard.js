import React from 'react';
import { CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "blue",
            fontSize: "18px",
            fontFamily: "sans-serif",
            fontSmoothing: "antialiased",
            "::placeholder": {
                color: "#000000"
            }
        },
        invalid: {
            color: "red",
            ":focus": {
                color: "red"
            }
        }
    }
}

const CreditCard = ({ stripe, elements, handlePayout }) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;
        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);
        if (result.error) {
            console.log(result.error.message);
        } else {
            handlePayout(result.token);
        }
    }
    return (
        <div className='card-container'>
            <form onSubmit={handleSubmit}>
                <CardSection />
                <button
                    disabled={!stripe}
                    type="submit"
                    className="inline-block mt-10 m-auto w-full  rounded bg-blue-600 px-6 pb-1 pt-1 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]">
                    Pay Now
                </button>
            </form>
        </div>
    )
}

export default function InjectCheckout({ handlePayout }) {

    return (
        <ElementsConsumer>
            {({ stripe, elements }) => (
                <CreditCard stripe={stripe} handlePayout={handlePayout} elements={elements} />
            )}
        </ElementsConsumer>
    )
};




function CardSection() {
    return (
        <div>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>
    )
}
