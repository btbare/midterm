import { useState } from 'react';

export default function Page3() {

    const [background, setBackground] = useState("")

    return(
        <>
        <div style={{backgroundColor: background}}>
            <button
                className="background"
                type="button"
                onClick={()=>{setBackground("blue")}}
            >Blue</button>

            <button
                className="background"
                type="button"
                onClick={()=>{setBackground("red")}}
            >Red</button>
        </div>
        </>
    )
}