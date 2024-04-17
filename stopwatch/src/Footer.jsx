let x = new Date().getTime();

function F()
{
    return (
        <p> {new Date(x).toLocaleTimeString()} </p>
    );
}

export default F;