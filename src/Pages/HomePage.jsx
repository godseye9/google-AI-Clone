import { infoCards } from "../Data/dummyData";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const HomePage = () => (
  <div className="font-google">
    <Navbar />
    <section className="flex flex-col gap-6 bg-black px-6 py-10 justify-center items-center min-h-screen text-white bg-[url('Assets/aiBackground.svg')] bg-cover bg-center bg-color bg-black [background-position-y:40px]">
      <div>
        <section className="relative flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden ">
          <div className="z-10 max-w-4xl">
            <h1 className="text-8xl md:text-8xl  leading-tight font-google">
              Get started with <br />
              the <span className="text-blue-500">Gemini</span> API
            </h1>
            <p className="mt-6 text-lg text-babagrey max-w-2xl mx-auto">
              Google AI Studio is the fastest way to start building with Gemini,
              our next generation family of multimodal generative AI models.
            </p>
            <button className="mt-8 bg-blue-600 hover:bg-white hover:text-blue-600 text-sm font-medium px-6 py-4 rounded-full">
              Sign in to Google AI Studio
            </button>
          </div>
        </section>
        <div className="flex flex-row gap-6">
          {infoCards.map((card, idx) => (
            <div
              className={`
            group w-[420px] h-[240px] py-10 px-8 rounded-2xl text-center
            transition duration-300 bg-[#0e0f11] border border-transparent
            bg-[url('Assets/CardBackground.jpg')]
            hover:bg-[url('Assets/CardImageHover.jpg')]
            flex flex-col justify-between

          `}
            >
              <div>
                <h2 className="text-xl mb-2 pb-2">{card.title}</h2>
                <p className="text-gray-400 text-sm">{card.description}</p>
              </div>
              <button
                className={`
                mt-6 px-4 py-2 rounded-full border text-sm font-medium transition
                border-white text-white w-fit mx-auto
                group-hover:bg-white group-hover:text-black
            `}
              >
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default HomePage;
