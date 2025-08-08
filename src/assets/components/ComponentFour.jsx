function ComponentFour(props) {
    const [iName] = userContext(userContext);

    return (
        <>
            <p> Hi {props.userNameInFour} from componentFour Finaly</p>
            <br></br>
            <p> Hi {iName} form UserContext!</p>
        </>
    )


}

export default ComponentFour;