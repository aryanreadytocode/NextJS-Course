export default function User() {
    return(
        <div>
            <h1>This is user page</h1>
        </div>
    )
}

export function generateMetadata({param}) {
    return{
        title:"User hai ji",
        description:"user page description"
    }
}