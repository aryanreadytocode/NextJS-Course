import Image from "next/image"
import Profile from '../../public/next.svg'

export default function Home() {
  console.log(Profile)
    return(
      <main>
        <h1>Image optimization in Next</h1>
        {/* <Image src={Profile} alt="Image"/> */}
        {/* <img src={Profile.src}/> */}

        <Image 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
        alt="Image"
        width={1800}
        height={1800}/>

      </main>
    )
}