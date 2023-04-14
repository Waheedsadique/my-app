import Link from "next/link"

Link


const Mainpage = () => {
  return (
    <div className="flex flex-col items-center mt-12">
        <h1 className="text-2xl  md:text-4xl font-bold text-blue-500">PANAVERSE DAO</h1>
        <h1 className="text-2xl  md:text-4xl font-bold">Account Abstraction Assingment</h1>
        <div className="h-96 w-full bg-[rgb(36,36,36)] text-center m-6 to flex flex-col py-6">
            <Link href={"https://goerli.etherscan.io/tx/0x3d3faa020bcba108a6f8fd03d71af0ea746167ccdb8736cc86c514a8c152fc33"} target="_blank">
            <button className="border border-double border-black   p-2 m-2 rounded-md bg-blue-500 text-white text-2xl hover:bg-blue-900 hover:text-3xl">  Wallat Address</button>
            </Link>
            <Link href={"https://goerli.etherscan.io/tx/0x0394b527100e649be421a553b9012cbaac7b137eba396b179a0583dc82882f3c"} target="_blank">
            <button className="border  border-double border-black p-2 m-2 rounded-lg bg-blue-500 text-white text-2xl hover:bg-blue-900 hover:text-3xl">  Self Transfer </button>
            </Link>
            <Link href={"https://goerli.etherscan.io/tx/0x055507c9399bc3c4d3afbad7500980b08a03a9dcfd4eff1d619ecda16a41f811"} target="_blank">
            <button className="border border-double border-black p-2 m-2 rounded-lg bg-blue-500 text-white text-2xl hover:bg-blue-900 hover:text-3xl">  Batch Transfer</button>
            </Link>
            <Link href={"https://mumbai.polygonscan.com/tx/0xb7cd3de3511b7dc10bf6add3b8b2aa55a2b9e3289dac589fd3ce828dacad4bff"} target="_blank">
            <button className="border border-double border-black p-2 m-2 rounded-lg bg-blue-500 text-white text-2xl hover:bg-blue-900 hover:text-3xl">  NFT Mint ERC 721</button>
            </Link>
         </div>
<div><h2 className="text-2xl font-extrabold">© Copyright
by Muhammad Waheed</h2></div>


        </div>

  )
}

export default Mainpage