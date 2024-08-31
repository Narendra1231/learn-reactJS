function StudentList(){
    const studentData=[
        {
            id:1,
            name:"narendra",
            email:"kjjekd@gmail.com"
        },
        {
            id:2,
            name:"raman",
            email:"nmsdmd@gmail.com"
        },
        {
            id:3,
            name:"kamal",
            email:"kjje@gmail.com"
        }
    ];
    return(
        <>
        <h1>Student List</h1>
        <table>
            <thead>
            <tr>
                <th>id </th>
                <th>name </th>
                <th>email</th>
            </tr>
            </thead>
            <tbody>
            {studentData.map(data=><StudentInfo key={data.id} detail={data}/>)}
            </tbody>
        </table>
        </>
    );
}
//<ul>{studentData.map((data)=><StudentInfo key={data.id} detail={data} />)}</ul>
// <li>{props.detail.name} and {props.detail.email}</li>
function StudentInfo(props){
    return(
        <>
        <tr>
            <td>{props.detail.id}</td>
            <td>{props.detail.name}</td>
            <td>{props.detail.email}</td>
        </tr>
        </>
    );
  
}
export default StudentList;