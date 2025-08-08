import ComponentFour from "./ComponentFour";

function ComponentThree(props) {
    return (<>
        <ComponentFour userNameInFour={props.userNameInThree} />
        <p>Alternatively, Hi {props.userNameInThree} from componentThree</p>
    </>)

}

export default ComponentThree;