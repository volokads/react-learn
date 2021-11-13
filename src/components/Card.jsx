function Card(props) {
    const { id, name= "No name" } = props

    const handleClick = () => {
        alert(name)
     }
    // console.log("props", props);
    return (
        <div style={{ display: "flex", flexDirection: "row"}}>
            <button onClick={handleClick}>show alert's name</button>
            <p key={id}>{name}</p>
        </div>
    )
}
// Card.defaultProps = {
//     name: "No name"
// }
export {Card};
