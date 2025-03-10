import Link from "next/link";

async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  // console.log(data);
  return data;
}

export default async function Page() {
  const userData = await getUsers();
  // console.log(userData)
  return (
    <div>
      <h1>User List</h1>
      {userData.map((user) => {
        return (
          <div key={user.id}>
            <span style={{ width: 200 }}>
              <Link href={`users/${user.id}`}>
                {user.name}
              </Link>
            </span>
            <span>
              <Link
                style={{ width: 100, marginLeft: 30 }}
                href={`users/${user.id}/update`}>
                Edit
              </Link>
            </span>
          </div>
        );
      })}
    </div>
  );
}
