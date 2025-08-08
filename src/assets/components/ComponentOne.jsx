import ComponentTwo from "./ComponentTwo";

function ComponentOne(props) {

    return (
        <> <ComponentTwo userNameInTwo={props.userName} />
            <p>Alternatively, Hi {props.userName} from componentTwo</p>
        </>
    )
    //return <p>{props.userName}</p>
}

export default ComponentOne;