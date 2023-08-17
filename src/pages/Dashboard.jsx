import Part from "../components/Part";

const Dashboard = () => {
  return (
    <div className=''>
      <h2 className="font-medium text-3xl">Dashboard</h2>
      <p>Welcome to Learning Management Dashboard</p>
      <Part title="Instructors">
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
      </Part>
    </div>
  );
};

export default Dashboard;

const Instructors = [
  {
    instructorName: "Abu Bun Ishak",
    Emailaddress: "info@binshak.com",
    Reviewstars: '',
    Reviewcount: '',
    Description: '',
    Phone: '',
    Status: ''
  },
  {
    instructorName: "Ashley Lawson",
    Emailaddress: 'Ashley@sailInfo.co',
    Reviewstars: '',
    Reviewcount: '',
    Description: '',
    Phone: '',
    Status: ''
  },
  {
    instructorName: "Abu Bun Ishak",
    Emailaddress: "info@binshak.com",
    Reviewstars: '',
    Reviewcount: '',
    Description: '',
    Phone: '',
    Status: ''
  },
  {
    instructorName: "Ashley Lawson",
    Emailaddress: 'Ashley@sailInfo.co',
    Reviewstars: '',
    Reviewcount: '',
    Description: '',
    Phone: '',
    Status: ''
  },
];
const Request = [
  {
    name: 'Vincent Lopez',
    Message: 'Thanks for your contact with issues'
  },
  {
    name: 'Daniel Moore',
    Message: 'Thanks for your contact with issues'
  }
]
