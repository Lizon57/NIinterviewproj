type props = {
    txt: string
}


export const BoxPreview = ({ txt }: props) => {
    return (
        <div className="box pointer">{txt}</div>
    )
}