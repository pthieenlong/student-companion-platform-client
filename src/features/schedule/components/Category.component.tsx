import { Checkbox } from "@/components"; 
type CategoryProps = {
  name: string;
  id: string;
  color: string;
  checked?: boolean;
  title: string;
}
const CategoryComponent = (props: CategoryProps) => {
  console.log(props.color);
  
  return (
    <div>
      <Checkbox color={props.color} title={props.title} id={props.id}/>
    </div>
  )
}

export default CategoryComponent