const Storage = () => {

    const handleSave = () => {
        localStorage.setItem("name","hello");
    }
    const handleSession = () => {
        sessionStorage.setItem("name","hello");
    }

    const handleCokkies = () => {
       document.cookie = "username=hitesh";
       getLocation()
    }

const showPosition = (position) => {
console.log(position)
}

    const getLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    }

    return (
        <>
        <button onClick={handleSave}>LS</button>
        <button onClick={handleSession}>SS</button>
        <button onClick={handleCokkies}>Cokkies</button>
        </>
    )

}

export default Storage;