import ninja from "../../assets/imgs/ninja.svg"
import rightArrow from "../../assets/imgs/arrow.svg"

import { BoxLst } from "./BoxLst"


type props = {
    boxs: string[],
    closeModal: () => void
}


export const Modal = ({ boxs, closeModal }: props) => {
    return (
        <aside className="modal-screen-container">
            <div className="modal-container">
                <div className="top-bar flex align-center">
                    <svg onClick={closeModal}
                        width="14"
                        height="14"
                        className="pointer"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path id="Path" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#1789D5" />
                    </svg>
                </div>

                <img src={ninja} className="ninja-img" />
                <span className="ninja-shadow"></span>

                <div className="info-container flex column align-center">
                    <h2 className="title">how many lines do you need?</h2>
                    <div className="txt">let's find the right VoIP service for you</div>

                </div>

                <BoxLst boxs={boxs} />

                <div className="btns-container flex justify-center">
                    <button className="next-btn pointer text-center">
                        Next <img src={rightArrow} />
                    </button>
                </div>
            </div>
        </aside>
    )
}