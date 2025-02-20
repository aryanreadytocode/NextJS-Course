import Link from "next/link";

export default function StudentList() {
  return (
    <div style={{ margin: "20px" }}>
      <h1>Student List</h1>
      <ul style={{ margin: "20px" }}>
        <li>
          <Link href={"/studentlist/rahul"}>Rahul kumar </Link>
        </li>
        <li>
          <Link href={"/studentlist/chhotu"}>Chhotu kumar </Link>
        </li>
        <li>
          <Link href={"/studentlist/ganesh"}>Ganesh Pandit</Link>
        </li>
      </ul>
    </div>
  );
}
