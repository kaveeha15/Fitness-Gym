import MemberDetails from "./MemberDetails";
const UserDeatails =async ({params}) => {
    const {id}=await params
    return (
        <div className="flex flex-col">
           <MemberDetails id={id}/>
        </div>
      );
}
 
export default UserDeatails;