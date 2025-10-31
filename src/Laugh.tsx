interface LaughProps {
  show: boolean
}

export function Laugh({ show }: LaughProps) {
  return (
    <div
      className={`bg-white fixed z-10 top-0 left-0 w-full h-full flex ${
        show ? "show" : "hide"
      }`}
    >
      <img src="/laugh.gif" className="w-full mt-29" alt="laugh animation" />
    </div>
  )
}