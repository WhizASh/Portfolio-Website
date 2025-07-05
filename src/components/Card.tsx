export default function Card({img_url,title,description,link}:{img_url:string,title:string,description:string,link:string}){
    return <>
    <div className="p-4 border-b rounded m-4 cursor-pointer">
        <a href={link} target="_blank" >
            <div className="grid grid-cols-3">
                <div className="col-span-1 p-2 flex items-center justify-center mr-4 ">
                    <img className="rounded h-24 w-60" src={img_url} alt="img" />
                </div>
                <div className="col-span-2">
                    <div>
                        <div className="text-xl text-shadow-2xs">
                            {title}
                        </div>
                        <div className="text-gray-700">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    </>
}