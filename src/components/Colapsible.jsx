import { useRef, useState } from "react"
import '../styles/collapsible.css'

const Collapsible = ({children, label }) => {
    const [open, setOpen] = useState(false)
    const contentRef = useRef()
    const handleClick = () => {
        setOpen(!open)
        if (open) console.log(contentRef.current.scrollHeight)
    }

    return (
        <div className="collapsible-container">
            <button onClick={handleClick}>{label}</button>
            { open && 
                <div className={ open ? "content-show" : "content-parent"} ref={contentRef} >
                    <div className="content">{children}</div>
                    <hr/>
                </div>
            }
        </div>
    )
}

export { Collapsible }
// style={ open ? { height: `${contentRef.current.scrollHeight}px`} : {height: "0px"}}
