export default function ImageBox({img_url,desc}:{img_url:string,desc:string}){
    return <div className="m-2 border-2 rounded-md">
        <img src={img_url} alt="img" />
        <div className="ml-1">{desc}</div>
    </div>
}