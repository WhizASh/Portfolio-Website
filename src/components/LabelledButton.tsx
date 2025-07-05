export default function LabelledButton({title,onclick}:{title:string,onclick?:()=>void}){
    return <>
            <div className="p-2 border m-4 rounded-xl  bg-amber-300 border-amber-600">
                <button className="cursor cursor-pointer" onClick={onclick}>{title}</button>
            </div>
    </>
}