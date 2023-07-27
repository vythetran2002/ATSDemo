
export default function UseRefPage({ locator }) {

    return (
        <input
            type="text"
            ref={locator}
            placeholder="INPUT HERE!"></input>
    )
}