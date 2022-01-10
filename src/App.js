import './App.css';

function App() {

function User (props){
  return <li>
   firstName: {props.item.firstName},
   lastName: {props.item.lastName},
   fullName: {props.item.fullName=props.item.firstName +" "+ props.item.lastName},
   age: {props.item.age + 5},
   job: {props.item.job}
  </li>
}

function UserList(){
  let users = [
    { id: 1, firstName: "John", lastName: "Doe", age: 24, job: "Developer"},
    { id: 2, firstName: "Kate", lastName: "Reton", age: 22, job: "Chef"},
    { id: 3, firstName: "Melissa", lastName: "Lout", age: 41, job: "Developer"},
    { id: 4, firstName: "Ann", lastName: "Willington", age: 23, job: "Driver"},
    { id: 5, firstName: "Michel", lastName: "Plank", age: 55, job: "Developer"},
    { id: 6, firstName: "Bob", lastName: "Palanski", age: 32, job: "Waiter"},
    { id: 7, firstName: "Jack", lastName: "Daniels", age: 23, job: "Developer"},
    { id: 8, firstName: "Poul", lastName: "Torn", age: 65, job: "Cashier"},
  ];
return (
  <ol>
    {users.map((item)=><User key={item.id} item={item}/>)}
  </ol>
  )
}
return (
  <div className="App">
    <UserList/>
  </div>)
}

export default App;
