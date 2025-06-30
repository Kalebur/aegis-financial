import { ServiceBlurb } from "../ServiceBlurb/ServiceBlurb";
import "./MainContent.css";

export const MainContent = () => {
  const serviceBlurbs = [
    {
      title: "Enjoy Peace of Mind with Our New Low Interest Rate",
      body: "We’ve lowered our rates to help you do more with your money. Whether you're managing everyday expenses or planning for something big, our new low interest rate makes borrowing smarter and more affordable.",
      imgUrl: "./assets/images/interestImage.jpg",
      imgAlt:
        "A happy woman with a tablet computer in her hands, sitting at a conference table.",
      actionText: "Apply Now",
    },
    {
      title: "Effortless Transfers, Instant Confidence",
      body: "Send and receive money in moments with Zelle —directly from your account, with no extra apps or delays. Whether it’s a gift, a shared expense, or a quick repayment, Zelle makes moving money as seamless as your lifestyle demands.",
      imgUrl: "./assets/images/transfersImage.jpg",
      imgAlt:
        "A selfie of a happy woman with red hair, standing outside in the evening sun.",
      actionText: null,
    },
    {
      title: "Your First Home Starts Here",
      body: "Buying your first home should feel exciting—not overwhelming. Our team is here to guide you every step of the way, with flexible loan options, clear advice, and support you can count on—from pre-approval to move-in day.",
      imgUrl: "./assets/images/mortgageImage.jpg",
      imgAlt:
        "A man and woman discussing mortgage rates with a mortgage officer.",
      actionText: null,
    },
  ];
  return (
    <section className="main-content">
      {serviceBlurbs.map((blurb) => (
        <ServiceBlurb blurb={blurb} />
      ))}
    </section>
  );
};
