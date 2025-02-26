import custom from './custom.module.css'


export default function Home() {
    return(
      <main>
        <h1 className={custom.main}>CSS module with Next Js</h1>
        <h2 className="main">module 2</h2>
        <p className="main">This is paragraph</p>
      </main>
    )
}