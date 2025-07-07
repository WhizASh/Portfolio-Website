export default function ImageBox({img_url,desc}:{img_url:string,desc:string}){
    return <div className="m-2 border rounded-md">
        <img className="rounded-md w-full" src={img_url} alt="img" />
        <div className="text-gray-700 ml-1 font-extralight">{desc}</div>
    </div>
}