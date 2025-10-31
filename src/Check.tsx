import { useState } from 'react'
import { Laugh } from "./Laugh"

interface ButtonProps {
  text: string
  className?: string
  onClick?: () => void
}

interface NoProps {
  show: boolean
}

interface ChebtnProps {
  show: boolean
  onClick?: () => void
}

export function Check() {
  const [show, setShow] = useState(false)
  const [btn, setBtn] = useState(false)
  const [text, setText] = useState("Select Student Type")
  const [black, setBlack] = useState(false)
  const [laugh, setLaugh] = useState(false)

  return (
    <>
      <Laugh show={laugh} />

      <div className="mx-5">
        <p className="text-sm my-3">Student Type</p>

        <div
          onClick={() => setShow(prev => !prev)}
          className="relative py-[10px] border border-[#DFE1E6] rounded flex items-center hover:border-2 hover:border-[#00865A]"
        >
          <p
            className={`w-full rounded text-sm px-2 font-medium ${
              black ? "text-black" : "text-[#97A0AF]"
            }`}
          >
            {text}
          </p>
          <i className="fa fa-chevron-down px-3"></i>

          <div
            className={`absolute top-full my-3 bg-white shadow-sm w-full py-2 rounded ${
              show ? "show" : "hide"
            }`}
          >
            <Button
              text="Undergraduate"
              className="bg-blue-100"
              onClick={() => {
                setBtn(true)
                setText("Undergraduate")
                setBlack(true)
              }}
            />
            <Button text="JUPEB" />
            <Button text="Pre Degree" />
            <Button text="Postgraduate" />
            <Button text="CCE-Undergraduate" />
            <Button text="CCE-Postgraduate" />
          </div>
        </div>
      </div>

      <No show={black} />

      <Chebtn
        show={btn}
        onClick={btn ? () => setLaugh(true) : undefined}
      />
    </>
  )
}

function Button({ text, className, onClick }: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`py-2 text-sm px-3 ${className ?? ""} active:bg-blue-200`}
    >
      {text}
    </div>
  )
}

function No({ show }: NoProps) {
  return (
    <div className={`mx-5 ${show ? "show" : "hide"}`}>
      <p className="text-sm my-3">JAMB NO.</p>
      <input
        className="text-sm py-[10px] border border-[#DFE1E6] font-medium placeholder:text-[#97A0AF] w-full px-2"
        type="text"
        placeholder="Enter Jamb Registration Number"
      />
    </div>
  )
}

function Chebtn({ show, onClick }: ChebtnProps) {
  return (
    <div className="px-5 py-3 flex mt-10 w-full border rounded border-[#DFE1E6] justify-end">
      <button
        onClick={onClick}
        className={`text-sm p-2 rounded font-semibold ${
          show ? "text-white bg-[#00875A]" : "bg-[#F4F5F7] text-[#A5ADBA]"
        }`}
      >
        Confirm Status
      </button>
    </div>
  )
}