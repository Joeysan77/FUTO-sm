export function Laugh({show}) {
    return (
        <div className={`bg-white fixed z-10 top-0 lef-0 w-full h-full flex ${show ? "show" : "hide"}`}>
            <img src="/laugh.gif" className="w-full mt-29"alt=""/>
        </div>
    )
}