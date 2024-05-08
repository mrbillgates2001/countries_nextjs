import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

const CountryDetails = ({
	params,
}: {
	params: {
		CountryDetails: string;
	};
}) => {
	return (
		<div
			className="bg-white dark:bg-bodyBackground dark:text-white container mx-auto p-4 h-screen"
			style={{ paddingTop: "110px" }}>
			<div>
				<Link
				className="dark:bg-slate-600"
					href="/countries"
					style={{
						borderColor: "#000000",
						border: "1px solid #000000",
						borderRadius: "12px",
						padding: "3px 20px",
					}}>
					⬅️ Back
				</Link>
			</div>

			<div className="flex gap-10 py-3 flex-wrap">
				<div>
					<img
						src="/belgium.png"
						alt=""
						style={{
							width: "600px",
						}}
					/>
				</div>
				<div className="flex flex-col justify-center">
					<h1 className="text-lg font-extrabold text-24">Belgium</h1>
					<p className="text-14">Native Name: België </p>
					<div className="flex gap-10">
						<div>
							<p className="text-14">Population: 11,319,511</p>
							<p className="text-14">Region: Europe</p>
							<p className="text-14">Sub Region: Western Europe</p>
						</div>
						<div>
							<p className="text-14">Top Level Domain: .be</p>
							<p className="text-14">Currencies: Euro</p>
							<p className="text-14">Languages: Dutch, French, German</p>
						</div>
					</div>
					<p className="text-14">Capital: Brussels Belgium</p>
					<p className="text-14">
						Border Countries: France Germany Netherlands
					</p>
				</div>
			</div>
		</div>
	);
};

export default CountryDetails;
