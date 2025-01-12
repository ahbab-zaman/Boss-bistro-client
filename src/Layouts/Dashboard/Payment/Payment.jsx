import { Elements } from "@stripe/react-stripe-js";
import TitleSection from "../../../Components/TitleSection/TitleSection";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = () => {
  return (
    <div>
      <TitleSection subHeading="payment"></TitleSection>

      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
