// import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            {/* <LogoIcon /> */}
            Sardar of Physics
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.youtube.com/@sardarofphysics"
              className="opacity-60 hover:opacity-100"
            >
              Youtube
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.instagram.com/ali_abbas_madrid/"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Dribbble
            </a>
          </div>
        </div>

        {/* <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Web
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Mobile
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Desktop
            </a>
          </div>
        </div> */}

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#courses"
              className="opacity-60 hover:opacity-100"
            >
              Courses
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#pricing"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="/termsConditions"
              className="opacity-60 hover:opacity-100"
            >
              Terms & Conditions
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="/policy"
              className="opacity-60 hover:opacity-100"
            >
              Privacy and Policy
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="/refund"
              className="opacity-60 hover:opacity-100"
            >
              Refund & Cancellation
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Sardar of Physics made by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/sameeramjad07"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Sameer Amjad
          </a>
        </h3>
      </section>
    </footer>
  );
};