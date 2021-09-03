import Image from 'next/image'
import FundingProgressBar from './FundingProgressBar'

export default function PastProjectDetails({ details }) {
    return (
        <div className="bg-white shadow-2xl z-20 grid h-auto rounded-lg overflow-hidden relative">
            <div className="absolute left-4 top-4 z-30 bg-green-secondary text-white font-bold rounded-3xl py-1.5 px-5 uppercase">Funded</div>
            <div className="w-full h-[250px] sm:h-[400px] md:h-[250px] relative"><Image src={details.imgSrc} layout="fill" objectFit="fill"/></div>
            <div className="p-6 md:p-8 lg:p-12 grid gap-4">
                <p className="text-3xl font-bold text-left">{details.name}</p>
                <span className="flex items-center gap-2">
                    <Image src="/assets/location.svg" width="20" height="20" />
                    {details.location}
                </span>
                <div className="grid grid-flow-col grid-cols-custom gap-5 items-center">
                    <FundingProgressBar funding={details.funding} />
                </div>
                <div className="grid grid-flow-col grid-rows-5 gap-y-2 text-sm">
                    <p className="border-b pb-2"><span className="float-left">Area</span><span className="font-bold float-right">{details.area}</span></p>
                    <p className="border-b pb-2"><span className="float-left">Price psf</span><span className="font-bold float-right">₹{details.price}</span></p>
                    <p className="border-b pb-2"><span className="float-left">Yield</span><span className="font-bold float-right">{details.yield}%</span></p>
                    <p className="border-b pb-2"><span className="float-left">Return Target</span><span className="font-bold float-right">{details.returnTarget}%</span></p>
                    <p className="border-b pb-2"><span className="float-left">Funding Status</span><span className="font-bold float-right">{details.fundingStatus}%</span></p>
                </div>
                <button className="flex justify-center items-center gap-3 bg-green-secondary text-white font-medium justify-self-start rounded-lg py-4 w-full">
                    <span>View Opportunity</span>
                    <Image src="/assets/arrow-right.svg" width="15" height="15" />
                </button>
            </div>
        </div>
    )
}