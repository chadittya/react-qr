import QRCode from "./assets/images/image-qr-code.png";

function App() {
  return (
    <>
      <div className="container flex mx-auto items-center h-screen">
        <div className="bg-white w-96 rounded-xl sm:w-72 sm:mx-auto">
          <div className="px-4 py-4 text-center">
            <div>
              <img src={QRCode} alt="qrcode" className="rounded-xl mb-8" />
            </div>
            <div className="px-3">
              <h2 className="font-bold mb-3 text-2xl sm:text-lg">
                Improve your front-end skills by building projects
              </h2>
              <p className="text-gray-400 text-lg mb-6 sm:text-sm">
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/chadittya/react-qr">Galih Arizza</a>.
      </div>
    </>
  );
}

export default App;
