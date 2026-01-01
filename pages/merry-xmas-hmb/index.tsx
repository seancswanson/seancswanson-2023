import { useState } from "react";
import Layout from "../../components/layoutHmb";

const MerryXmasHmb = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <div className="mx-auto w-full max-w-[600px] rounded-xl bg-white px-4 py-4 shadow-md sm:px-6">
        <div className="text-xl text-center nanum-pen-script-regular">
          <p className="text-4xl">To my dahhhhling Aichen-</p>
          AKA Half Moon Beauty AKA HMB
          <br />
          <br />
          <p className="text-5xl font-bold">Merry Christmas!</p>
          <br />
          <img
            className="h-auto max-w-full mx-auto"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmJuMDczOGtjNms0Y2xvbXZoeXZuZGVnenZiYmJnbjdhYzV2cWFkNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YfSKB039u1zspUoaJp/giphy.gif"
            alt=""
          />
          <br />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-6 py-3 text-2xl font-bold text-white transition-colors bg-red-500 rounded-lg hover:bg-red-600"
          >
            {isOpen ? "Close" : "Open"}
          </button>
          {isOpen && (
            <div className="mt-6">
              <p className="text-3xl">Your gift comes in 2 parts: </p>
              <ol>
                <li>
                  1. something that will be delivered in a couple weeks... &
                </li>
                <li>
                  2. 6 months membership to{" "}
                  <a
                    className="uderline"
                    href="https://garritytools.com/collections/all-tools/products/tool-of-the-month-club?_pos=1&_fid=db2012e07&_ss=c"
                  >
                    Garrity Tools&apos; Tool-of-the-Month Club
                  </a>
                  !
                </li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
export default MerryXmasHmb;
