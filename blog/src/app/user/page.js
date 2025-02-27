async function userList() {
    let data = await fetch("https://dummyjson.com/users")
    data = await data.json();
    return data.users;
}

export default async function User() {
    let users = await userList();
    console.log(users)
    return(
        <div>
            <h1>User Name List</h1>
            <ol>
            {
                users.map((it, index) => {
                    console.log("user: "+it)
                   return <li key={index}>FirstName: {it.firstName} LastName: {it.lastName}</li> 
                })
            }
            </ol>
        </div>
    )
}