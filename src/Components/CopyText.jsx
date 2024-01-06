import { useState } from "react";

export default function Copytext({quote}){
    const [isCopied, setIsCopied] = useState(false); 

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
          return await navigator.clipboard.writeText(text);
        } else {
          return document.execCommand('copy', true, text);
        }
      }


    const handleCopyClick = () => {

        copyTextToClipboard(quote)
          .then(() => {
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
          });
      }
return (
<>
<span onClick={handleCopyClick} className="share m-1"> <img src="/clipboard-outline.svg" alt="" />
<span className="fs-5">{isCopied ? 'Copied!' : null}</span>
</span>
</>
)
}