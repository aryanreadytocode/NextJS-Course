import getUsers from "../../../../services/getUsers";


export default async function Page({params}) {
    const getUserList = getUsers();
    const users = await getUserList;
    const currentId = params.userId;
    const userData = users[currentId-1];
    return(
        <div style={{marginLeft:20}}>
            <h1>
                User Details Page
            </h1>
            <h2>Name: {userData.name}</h2>
            <h2>website: {userData.website}</h2>
        </div>
    )
}

export async function generateStaticParams() {
    const getUserList = getUsers();
    const users = await getUserList;
    console.log(users)
    return users.map((user) => {
        userId:(user.id)
    })

}