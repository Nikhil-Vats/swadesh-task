import Image from 'next/image'

export default function FeaturedProjectDetails({details}) {
    return (
        <div className="bg-white shadow-2xl z-20 grid md:grid-cols-10 h-auto rounded-lg overflow-hidden relative">
            <div className="absolute left-4 top-4  z-30 bg-yellow-primary text-white font-bold rounded-3xl py-1.5 px-5 object-left-top">ACTIVE</div>
            <div className="md:col-span-4 w-full h-[200px] md:h-full relative"><Image src={details.imgSrc} layout="fill" objectFit="fill"/></div>
            <div className="md:col-span-6 p-6 md:p-12 grid gap-4">
                <p className="text-3xl font-bold text-left">{details.name}</p>
                <span className="flex items-center gap-2">
                <Image src="/assets/location.svg" width="20" height="20" />
                {details.location}
                </span>
                <div className="grid grid-flow-col auto-cols-auto gap-8 items-center">
                <div className="relative">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-green-faded">
                    <div style={{ width: details.funding + "%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-secondary"></div>
                    </div>
                </div>
                <p className="text-green-secondary font-bold text-left">{details.funding}% funded</p>
                </div>
                <div className="grid grid-flow-col grid-rows-5 gap-y-2 md:grid-rows-3 md:grid-cols-2 md:gap-x-8 md:gap-y-6 text-sm">
                    <p className="border-b pb-2"><span className="float-left">Area</span><span className="font-bold float-right">{details.area}</span></p>
                    <p className="border-b pb-2"><span className="float-left">Price psf</span><span className="font-bold float-right">{details.price}</span></p>
                    <p className="border-b pb-2"><span className="float-left">Yield</span><span className="font-bold float-right">{details.yield}%</span></p>
                    <p className="border-b pb-2"><span className="float-left">Return Target</span><span className="font-bold float-right">{details.returnTarget}%</span></p>
                    <p className="border-b pb-2"><span className="float-left">Funding Status</span><span className="font-bold float-right">{details.fundingStatus}%</span></p>
                </div>
                <button className="flex justify-center items-center gap-3 bg-yellow-primary text-white font-medium justify-self-start rounded-lg py-4 w-full md:w-3/6 md:px-20">
                    <span>Invest now</span>
                    <Image src="/assets/arrow-right.svg" width="15" height="15" />
                </button>
            </div>
        </div>
    )
}