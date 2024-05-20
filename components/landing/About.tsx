import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32 z-30"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          {/* <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          /> */}
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Us!
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Hey there! I'm <b>Sardar Ali Abbas Qazalbash</b>, your go-to O/A level physics teacher. With a background in O/A level physics myself, I've made it my mission to make learning physics fun and accessible.
              <br />
              From Newton to quantum mechanics, I'm here to guide you through the world of physics with engaging lessons and a touch of humor. Let's dive in and discover the wonders of the universe together!
              </p>
            </div>
            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};