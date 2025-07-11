
export default function IconLinks({img_url,title,link}:{img_url:string,title:string,link:string}){
    return <>
    <div>
        <a href={link} target="_blank" >
            <div className="m-6 max-w-28 cursor-pointer p-2 flex flex-col items-center hover:scale-120 transition-transform duration-400 ease-in-out" >
                <img className="" src={img_url} alt="icon" width={80} height={80}/>
                <div className="text-center p-2 font-semibold text-shadow-xs">{title}</div>
            </div>
        </a>
    </div>
    </>
}