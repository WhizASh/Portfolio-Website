
export default function PageIcons({onclick,img_url,title}:{onclick:()=>void,img_url:string,title:string}){
    return <>
        <div onClick={onclick} className="m-6 max-w-28 cursor-pointer" >
            <img src={img_url} alt="icon" width={100} height={100}/>
            <div className="text-center p-2 font-semibold text-shadow-2xs">{title}</div>
        </div>
    </>
}