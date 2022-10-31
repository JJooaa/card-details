import { SyntheticEvent, useState } from "react"
import bgCardBack from "./images/bg-card-back.png"
import bgCardFront from "./images/bg-card-front.png"
import bgMainDesktop from "./images/bg-main-desktop.png"
import bgMainMobile from "./images/bg-main-mobile.png"

function App() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000")
  const [name, setName] = useState("Jane Appleseed")
  const [dates, setDates] = useState({
    month: "00",
    year: "00",
    cvc: "000",
  })

  const [thankYouScreen, setThankYouScreen] = useState(false)

  const onSubmit = (e: any) => {
    e.preventDefault()
    setThankYouScreen(true)
  }
  return (
    <div className="bg-white h-screen text-black w-full">
      <div className="w-full min-h-[240px] bg-[url(./images/bg-main-mobile.png)] relative">
        {/* CARD FRONT */}
        <div className="bg-[url(./images/bg-card-front.png)] text-white rounded-lg h-[156px] w-[285px] p-5 absolute -bottom-12 left-4 flex flex-col justify-between z-20">
          {/* Circles */}
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white w-8 h-8"></div>
            <div className="rounded-full w-4 h-4 border-[1px]"></div>
          </div>
          <div className="grow flex items-end tracking-[2px]">{cardNumber}</div>
          <div className="flex justify-between items-end mt-2">
            <p className="text-[9px] tracking-[2px]">{name.toUpperCase()}</p>
            <p className="text-[9px] tracking-[2px]">
              {dates.month} / {dates.year}
            </p>
          </div>
        </div>
        {/* CARD BACK */}
        <div className="bg-[url(./images/bg-card-back.png)] rounded-lg h-[156px] w-[285px] absolute right-0 top-4 bg-top bg-contain">
          <p className="absolute right-10 bottom-[72px] text-white text-[9px] tracking-[2px]">
            {dates.cvc}
          </p>
        </div>
      </div>
      {/* FORM  */}
      <div className="p-4 mt-20">
        {!thankYouScreen ? (
          <form
            action=""
            onSubmit={onSubmit}
            className="flex mx-auto flex-col max-w-[381px] gap-4"
          >
            <label htmlFor="Number" className="text-xs tracking-[2px]">
              CARDHOLDER NAME
            </label>
            <input
              placeholder="e.g. Jane Appleseed"
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="rounded-lg border-[1px] p-4 border-gray-400"
            />
            <label htmlFor="Name" className="text-xs tracking-[2px]">
              CARD NUMBER
            </label>
            <input
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="e.g. 1234 5678 9012 0000"
              type="number"
              maxLength={16}
              className="rounded-lg border-[1px] p-4 border-gray-400"
            />
            <label htmlFor="Name" className="text-xs tracking-[2px]">
              EXP. DATE (MM/YY) CVC
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                className="rounded-lg border-[1px] p-4 border-gray-400 w-[74px]"
                placeholder="MM"
                maxLength={2}
                onChange={(e) =>
                  setDates((prev) => ({ ...prev, month: e.target.value }))
                }
              />
              <input
                type="text"
                className="rounded-lg border-[1px] p-4 border-gray-400 w-[74px]"
                placeholder="YY"
                maxLength={2}
                onChange={(e) =>
                  setDates((prev) => ({ ...prev, year: e.target.value }))
                }
              />
              <input
                type="text"
                className="rounded-lg border-[1px] p-4 border-gray-400 w-[164px]"
                placeholder="e.g. 123"
                maxLength={3}
                onChange={(e) =>
                  setDates((prev) => ({ ...prev, cvc: e.target.value }))
                }
              />
            </div>

            <button className="bg-black p-4 text-white rounded-lg">
              Confirm
            </button>
          </form>
        ) : (
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <svg
              width="80"
              height="80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="url(#a)" />
              <path
                d="M28 39.92 36.08 48l16-16"
                stroke="#fff"
                stroke-width="3"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="-23.014"
                  y1="11.507"
                  x2="0"
                  y2="91.507"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#6348FE" />
                  <stop offset="1" stop-color="#610595" />
                </linearGradient>
              </defs>
            </svg>
            <h2 className="text-3xl tracking-[2px]">THANK YOU!</h2>
            <h3 className="text-gray-500">We've added your card details</h3>
            <button
              onClick={() => setThankYouScreen(false)}
              className="bg-black p-4 w-full mt-6 text-white rounded-lg"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
