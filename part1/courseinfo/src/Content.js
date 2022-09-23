const Header = (props) => {
  const info = props.parts; 
  const displatParts = info.map((item) => {
    return (
      <li key = {item.id}>
        {item.part} : {item.exercise}
      </li>
    )
  });
  return (
    <>
    <ul style = {{listStyle: "none"}}> {displatParts} </ul> 
    </>
  )
}

export default Header 