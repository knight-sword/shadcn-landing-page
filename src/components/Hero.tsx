import { Button } from "./ui/button";


export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center  gap-10">
      <div className="text-center lg:text-start space-y-6  ml-20">
        <main className="text-5xl md:text-5xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Make
            </span>{" "}
            scheduling easier,
          </h1>{" "}
          save{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              every minute
            </span>{" "}
            for you
          </h2>
          {/* Make scheduling easier, save every minute for you. */}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Display services, schedule, and availability on your free booking page, and let customers book appointments at their convenience 24/7.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>
        </div>
      </div>


      {/* Hero cards sections */}
      {/* <div className="z-10">
        <HeroCards />
      </div> */}

      {/* Shadow effect */}
      <div>
        <img src="./src/assets/s.png" />
      </div>
    </section>
  );
};
