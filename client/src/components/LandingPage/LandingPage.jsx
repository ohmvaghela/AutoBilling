import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="flex m-auto bg-repeat-y ">
      {/* left half */}
      <div className="flex justify-center items-center  ml-auto ">
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl font-extrabold justify-center">
            Your <span className="text-[#f6f9fc]">Invoices</span>
            <br /> <span className="ml-5">Automated.</span>
          </h1>
          <p className="font-extrabold ">
            Streamline invoicing with InvoiceGenius. Create professional <br />
            invoices in seconds, freeing you to focus on your business. <br />{" "}
            Join now.
          </p>
        </div>
      </div>

      {/* right half */}
      <div className="flex justify-center items-center flex-1 ">
        <img
          src="../../public/invoice4.svg"
          alt="Invoice"
          className="w-[400px] h-auto"
        />
      </div>
    </div>
  );
};

export default LandingPage;
