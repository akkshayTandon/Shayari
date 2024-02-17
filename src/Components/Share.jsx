export default function Share({ quote }) {

    function handleClick() {
        if (navigator.share) {
            navigator.share({
                text:quote,
                url:"",
            }).then(()=>{
                console.log("Thanks")
            }).catch((err)=>{
                console.log(err)
            })
        }
        else {
            alert("Not support")
        }
    }
    return (
        <>
            <span className="share m-1 d-none d-lg-block" onClick={handleClick}>
                <img src="/share.svg" alt="share" />
            </span>
        </>
    )
}