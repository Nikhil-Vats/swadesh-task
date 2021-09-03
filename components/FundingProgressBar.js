export default function FundingProgressBar({ funding }) {
    return (
        <>
            <div className="relative">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-green-faded">
                <div style={{ width: funding + "%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-secondary"></div>
            </div>
            </div>
            <p className="text-green-secondary font-bold text-left">{funding}% funded</p>
        </>
    )
}