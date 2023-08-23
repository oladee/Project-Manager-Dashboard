import ActiveApp from "../components/Active";
import StatusApp from "../components/Status";
// import Part from "../components/Part";

const Dashboard = () => {
  return (
    <div className='' style={{
      backgroundColor : '',
      marginTop: '5rem',
      width: '80vw'
    }}>

    <div>
    <h2 className="font-semibold">Hi Dami</h2>
      <p>Welcome to Your Dashboard</p>
    </div>
      

      <div className="mt-[2rem]">

          <p className=" text-center font-semibold " 
          style={{ color: 'rgb(140,140,140)'}}>Take Quick Actions</p>

        <div className=" flex justify-center w-[100%] mt-4">

        <StatusApp/>

        </div>
        
      </div>





      {/* <Part title="Instructors">
        {Instructors.map((x) => {
          return (
            <div className=" py-3 border-t-2" key={x.Phone}>
              <h1 className=" font-medium">{x.instructorName}</h1>
              <p>{x.Emailaddress}</p>
            </div>
          );
        })}
      </Part> */}


      {/* <Part title="Instructors">
        {Instructors.map((x) => {
          return (
            <div className=" py-3 border-t-2" key={x.Phone}>
              <h1 className=" font-medium">{x.instructorName}</h1>
              <p>{x.Emailaddress}</p>
            </div>
          );
        })}
      </Part> */}


      {/* <Part title="Instructors">
        {Instructors.map((x) => {
          return (
            <div className=" py-3 border-t-2" key={x.Phone}>
              <h1 className=" font-medium">{x.instructorName}</h1>
              <p>{x.Emailaddress}</p>
            </div>
          );
        })}
      </Part>
      <Part title="Support Requests">
        {Request.map((x) => (
          <div>{x.name}</div>
        ))}
      </Part> */}


    </div>
  );
};

export default Dashboard;

// const Instructors = [
//   {
//     instructorName: "Abu Bun Ishak",
//     Emailaddress: "info@binshak.com",
//     Reviewstars: '',
//     Reviewcount: '',
//     Description: '',
//     Phone: '',
//     Status: ''
//   },
//   {
//     instructorName: "Ashley Lawson",
//     Emailaddress: 'Ashley@sailInfo.co',
//     Reviewstars: '',
//     Reviewcount: '',
//     Description: '',
//     Phone: '',
//     Status: ''
//   },
//   {
//     instructorName: "Abu Bun Ishak",
//     Emailaddress: "info@binshak.com",
//     Reviewstars: '',
//     Reviewcount: '',
//     Description: '',
//     Phone: '',
//     Status: ''
//   },
//   {
//     instructorName: "Ashley Lawson",
//     Emailaddress: 'Ashley@sailInfo.co',
//     Reviewstars: '',
//     Reviewcount: '',
//     Description: '',
//     Phone: '',
//     Status: ''
//   },
// ];
// const Request = [
//   {
//     name: 'Vincent Lopez',
//     Message: 'Thanks for your contact with issues'
//   },
//   {
//     name: 'Daniel Moore',
//     Message: 'Thanks for your contact with issues'
//   }
// ]
