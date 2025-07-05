
export default function PageIcons({onclick,img_url,title,isMobile}:{onclick?:()=>void,img_url:string,title:string,isMobile?:boolean}){

    return <>
        {isMobile ? <div>
            <div onClick={onclick} className="m-6 max-w-28  cursor-pointer " >
                <img className="border-2 p-2 rounded-xl bg-gray-50 " src={img_url} alt="icon" width={80} height={80}/>
                <div className="text-center p-2 font-semibold text-shadow-xs">{title}</div>
            </div>
        </div> 
        :
        <div>
            <div onClick={onclick} className="m-6 max-w-28 cursor-pointer " >
                <img className="" src={img_url} alt="icon" width={80} height={80}/>
                <div className="text-center p-2 font-semibold text-shadow-xs">{title}</div>
            </div>
        </div>}
    </>
}