import ContextOne from "./ContextOne";
import { useContext } from "react";

function ComponentFour(props) {

    const iName = useContext(ContextOne);

    return (
        <>
            <p> Hi {props.userNameInFour} from componentFour Finaly</p>
            <br></br>
            <p> Hi {iName} form ContextOne!</p>
        </>
    )


}

export default ComponentFour;