import preloader from "../../../asserts/images/Bounce-Bar-Preloader-1.gif";

let Preloader = (props) => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader