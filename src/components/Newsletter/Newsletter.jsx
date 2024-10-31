import Button from "../Button/Button";

const Newsletter = () => {
  return (
    <section
      id="subscribe"
      className="dark:bg-slate-900 py-20
    p-3"
    >
      <div
        className="container max-w-7xl mx-auto text-center
      rounded-lg px-4 py-20 bg-slate-10 dark:bg-slate-800
       dark:text-slate-200 text-slate-900"
      >
        <h1 className="text-2xl md:text-4xl font-semibold mb-6">
          Join Our Newsletter
        </h1>
        <p
          className="text-slate-600 dark:text-slate-400
        text-base md:text-lg mb-10"
        >
          Stay informed with latest updates. No spam, just exclusive content.{" "}
        </p>

        <div
          className="flex flex-col md:flex-row items-center
        justify-center md:gap-2 gap-6"
        >
          <input
            className="w-full md:w-2/3 p-3 text-sm bg-white
            dark:bg-gray-800 border-2 border-slate-300 dark:border-slate-50
            rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400
            dark:focus:ring-slate-600"
            type="email"
            placeholder="Enter your email address"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
