import "../index.css";
import LeftSide from "./LeftSide";
import Footer from "./Footer";
import RightSide from "./RightSide";
import {useState} from 'react';

export function Sides() {
    const [sum, setSum] = useState(0);
    return(
        <div className="min-h-screen flex items-center justify-center flex-col bg-gradient-to-br from-purple-600 to-purple-300  ">
            <div className="min-w-990 flex flex-col">
                <div className="rounded-3xl overflow-hidden flex min-h-[680px] mb-[16px] pb-0">
                    <div className="flex flex-col text-center items-center w-1/2 bg-slate-100">
                   <LeftSide sum = {sum}/>
                    </div>
                    <div className="flex flex-col w-1/2 bg-white justify-center items-center">
                              <RightSide sum={sum} setSum={setSum}/>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
}