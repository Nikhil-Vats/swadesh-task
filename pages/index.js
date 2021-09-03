import Head from 'next/head'
import Image from 'next/image'
import FeaturedProjectDetails from '../components/FeaturedProjectDetails'
import PastProjectDetails from '../components/PastProjectDetails'

export default function Home({ data }) {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<Head>
				<title>Swadesh</title>
				<link rel="icon" href="/assets/favicon.png" />
			</Head>
			<div className="bg-green-primary absolute w-full h-[600px] top-0 p-8 md:p-16 lg:p-20">
			<div className="absolute top-36 -left-48"><Image src="/assets/circles.svg" width="531" height="531" /></div>
				<div className="z-10 relative">
				    <div className="max-w-max"><Image src="/assets/logo.svg" width="170" height="53" /></div>
				    <h1 className="mt-28 text-left text-white text-5xl font-bold">All properties</h1>
				</div>
			</div>
			<main className="flex flex-col w-full flex-1 text-center bg-yellow-faded z-20 mt-[600px] px-8 pb-8 md:px-16 md:pb-16 lg:px-20 lg:pb-20">
				<div className="mt-[-250px]">
					<FeaturedProjectDetails details={data.featured}/>
					<div className="z-20">
					    <p className="text-left my-10 text-red text-5xl font-bold">Past properties</p>
					    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-6">
						{data.past.map((val, index) => <PastProjectDetails key={index} details={val} />)}
					    </div>
					</div>
				</div>
			</main>
		</div>
	)
}

/* I used getServerSideProps because although the data here is static, in the actual app
this data will update frequently and therefore should be fetched at each request.

For this sample app, getStaticProps would have given better performance
*/
export async function getServerSideProps(context) {
  const res = await fetch(`https://swadesh-task-94tzpgg9z-nikhil-vats.vercel.app/api/getData`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }
  }
}
