import ComponentThree from "./ComponentThree";

function ComponentTwo(props) {
        return (<>
                <ComponentThree userNameInThree={props.userNameInTwo} />
                <p>Alternatively, Hi {props.userNameInTwo} from componentTwo</p>
        </>)
}

export default ComponentTwo;