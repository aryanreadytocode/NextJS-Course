import { API_BASE_URL } from "@/constants/constants"

export default function Home() {
  console.log(process.env.SERVER_PASSWORD)
    return(
      <main>
        {
          process.env.NODE_ENV === "development" ? (
            <h1>Youre in development mode</h1>
          ) : (
            <h1>Youre in production mode</h1>
          )
        }
        <h1>Environment variables in Next</h1>
        {API_BASE_URL}
      </main>
    )
}