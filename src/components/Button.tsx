export type ButtonType = {
    nickName: string
    callback: () => void
}

export const Button = (props:ButtonType) => {

    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button onClick={onClickHandler}>{props.nickName}</button>
    )
}