function Enlace(props) {
    return(
        <a href={props.link}>
          <img src={props.icon}/>
        </a>
    );
}

export default Enlace;