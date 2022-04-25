import { BoxPreview } from "./BoxPreview"


type props = {
    boxs: string[]
}


export const BoxLst = ({ boxs }: props) => {
    return (
        <div className="boxes-container">
            {boxs.map(box => <BoxPreview key={box} txt={box} />)}
        </div>
    )
}