import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PaymentForm } from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51NRNo8GybJIGT3OEtcwRZ0SZnj9XK3zHgXbaAsLRQbl7fQeunev0HYWI00OWEAQKr56JhkKBnKRwmZaH0H5C1CL400bhmg3Aha";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
};
