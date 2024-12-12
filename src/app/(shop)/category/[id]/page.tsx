import { notFound } from "next/navigation";

interface Props {
  params:{
    id:String
  }

}
export default function ({params}:Props) {

  const {id} = params
  if(id==='kids'){
    notFound();
  }
  return (
    <div>
      <h1>Category Page {id} </h1>
    </div>
  );
}