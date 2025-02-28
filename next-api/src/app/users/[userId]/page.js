async function getUser(userId) {
    let data = await fetch(`http://localhost:3000/api/users/${userId}`)
    data =  await data.json();
    return data.result;
}

export default async function Page({params}) {
    const user = await getUser(params.userId)
    return(
        <div>
            <h1>User details</h1>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
        </div>
    )
}