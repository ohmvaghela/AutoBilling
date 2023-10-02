const LandingPage = () => {
  return (
    <div
      className="flex w-screen h-screen "
      style={{
        background: ` #6190E8`,
        background: `-webkit-linear-gradient(to right, #A7BFE8, #6190E8)`,
        background: `linear-gradient(to right, #A7BFE8, #6190E8)`,
      }}
    >
      {/* left half */}
      <div className="flex justify-center items-center  ml-[250px] ">
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl font-extrabold">
            Your Invoices,
            <br /> Automated
          </h1>
          <p className="font-medium">
            Streamline invoicing with InvoiceGenius. Create professional <br />
            invoices in seconds, freeing you to focus on your business. <br />{" "}
            Join now.
          </p>
        </div>
      </div>

      {/* right half */}
      <div className="flex justify-center items-center  flex-1 ">
        <img
          src="../../public/invoice4.svg"
          alt="Invoice"
          className="w-[750px] h-auto"
        />
      </div>
    </div>
  );
};

export default LandingPage;
