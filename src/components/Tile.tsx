export default function Tile({title}:{title:string}){
    return <>
        <div className="p-2  shadow-xl/10 border bg-white m-2 rounded-xl" >
            <div>
                {title}
            </div>
        </div>
    </>
}