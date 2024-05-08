import { Card, Select } from "flowbite-react";
import Link from "next/link";
import React from "react";

const Countries = () => {
	return (
		<div
			className=" bg-white dark:bg-bodyBackground dark:text-white container mx-auto p-4 "
			style={{ paddingTop: "100px" }}>
			<div className="flex items-center justify-between flex-wrap gap-3">
				<input
					className="bg-white dark:bg-navBackground dark:text-white rounded-lg"
					type="search"
					placeholder="🔍 Search..."
				/>
				<Select name="regions" id="regions" className="w-25 text-14">
					<option value="Filter by region" className="text-18">
						Filter by region
					</option>
					<option value="Africa" className="text-18">
						Africa
					</option>
					<option value="Europe" className="text-18">
						Europe
					</option>
					<option value="America" className="text-18">
						America
					</option>
					<option value="Asia" className="text-18">
						Asia
					</option>
					<option value="Oceania" className="text-18">
						Oceania
					</option>
				</Select>
			</div>

			<div className="flex items-center justify-between py-5 flex-wrap gap-5">
				<Link href="/countries/countryDetails">
					<Card
						className="w-cardWidth h-cardHeight bg-white dark:bg-navBackground dark:text-white hover:shadow-2xl hover:transition-shadow hover:shadow-gray-950 cursor-pointer "
						imgAlt="Meaningful alt text for an image that is not purely decorative"
						imgSrc="germany.png">
						<h5 className="text-18 font-bold tracking-tight text-gray-900 dark:text-white">
							Germany
						</h5>
						<p className="text-gray-700 text-14 dark:text-gray-400">
							<strong>Population:</strong> 81,770,900 <br />
							<strong>Region:</strong> Europe <br />
							<strong>Capital:</strong> Berlin
						</p>
					</Card>
				</Link>

				<Link href="/countries/countryDetails">
					<Card
						className="w-cardWidth h-cardHeight bg-white dark:bg-navBackground dark:text-white hover:shadow-2xl hover:transition-shadow hover:shadow-gray-950 cursor-pointer "
						imgAlt="Meaningful alt text for an image that is not purely decorative"
						imgSrc="/usa.png">
						<h5 className="text-18 font-bold tracking-tight text-gray-900 dark:text-white">
							Germany
						</h5>
						<p className="text-gray-700 text-14 dark:text-gray-400">
							<strong>Population:</strong> 81,770,900 <br />
							<strong>Region:</strong> Europe <br />
							<strong>Capital:</strong> Berlin
						</p>
					</Card>
				</Link>

				<Link href="/countries/countryDetails">
					<Card
						className="w-cardWidth h-cardHeight bg-white dark:bg-navBackground dark:text-white hover:shadow-2xl hover:transition-shadow hover:shadow-gray-950 cursor-pointer "
						imgAlt="Meaningful alt text for an image that is not purely decorative"
						imgSrc="/brazil.png">
						<h5 className="text-18 font-bold tracking-tight text-gray-900 dark:text-white">
							Germany
						</h5>
						<p className="text-gray-700 text-14 dark:text-gray-400">
							<strong>Population:</strong> 81,770,900 <br />
							<strong>Region:</strong> Europe <br />
							<strong>Capital:</strong> Berlin
						</p>
					</Card>
				</Link>

				<Link href="/countries/countryDetails">
					<Card
						className="w-cardWidth h-cardHeight bg-white dark:bg-navBackground dark:text-white hover:shadow-2xl hover:transition-shadow hover:shadow-gray-950 cursor-pointer "
						imgAlt="Meaningful alt text for an image that is not purely decorative"
						imgSrc="/iceland.png">
						<h5 className="text-18 font-bold tracking-tight text-gray-900 dark:text-white">
							Germany
						</h5>
						<p className="text-gray-700 text-14 dark:text-gray-400">
							<strong>Population:</strong> 81,770,900 <br />
							<strong>Region:</strong> Europe <br />
							<strong>Capital:</strong> Berlin
						</p>
					</Card>
				</Link>

				<Link href="/countries/countryDetails">
					<Card
						className="w-cardWidth h-cardHeight bg-white dark:bg-navBackground dark:text-white hover:shadow-2xl hover:transition-shadow hover:shadow-gray-950 cursor-pointer "
						imgAlt="Meaningful alt text for an image that is not purely decorative"
						imgSrc="/afghanistan.png">
						<h5 className="text-18 font-bold tracking-tight text-gray-900 dark:text-white">
							Germany
						</h5>
						<p className="text-gray-700 text-14 dark:text-gray-400">
							<strong>Population:</strong> 81,770,900 <br />
							<strong>Region:</strong> Europe <br />
							<strong>Capital:</strong> Berlin
						</p>
					</Card>
				</Link>

				<Link href="/countries/countryDetails">
					<Card
						className="w-cardWidth h-cardHeight bg-white dark:bg-navBackground dark:text-white hover:shadow-2xl hover:transition-shadow hover:shadow-gray-950 cursor-pointer "
						imgAlt="Meaningful alt text for an image that is not purely decorative"
						imgSrc="/aland-island.png">
						<h5 className="text-18 font-bold tracking-tight text-gray-900 dark:text-white">
							Germany
						</h5>
						<p className="text-gray-700 text-14 dark:text-gray-400">
							<strong>Population:</strong> 81,770,900 <br />
							<strong>Region:</strong> Europe <br />
							<strong>Capital:</strong> Berlin
						</p>
					</Card>
				</Link>

				<Link href="/countries/countryDetails">
					<Card
						className="w-cardWidth h-cardHeight bg-white dark:bg-navBackground dark:text-white hover:shadow-2xl hover:transition-shadow hover:shadow-gray-950 cursor-pointer "
						imgAlt="Meaningful alt text for an image that is not purely decorative"
						imgSrc="/albania.png">
						<h5 className="text-18 font-bold tracking-tight text-gray-900 dark:text-white">
							Germany
						</h5>
						<p className="text-gray-700 text-14 dark:text-gray-400">
							<strong>Population:</strong> 81,770,900 <br />
							<strong>Region:</strong> Europe <br />
							<strong>Capital:</strong> Berlin
						</p>
					</Card>
				</Link>

				<Link href="/countries/countryDetails">
					<Card
						className="w-cardWidth h-cardHeight bg-white dark:bg-navBackground dark:text-white hover:shadow-2xl hover:transition-shadow hover:shadow-gray-950 cursor-pointer "
						imgAlt="Meaningful alt text for an image that is not purely decorative"
						imgSrc="/algeria.png">
						<h5 className="text-18 font-bold tracking-tight text-gray-900 dark:text-white">
							Germany
						</h5>
						<p className="text-gray-700 text-14 dark:text-gray-400">
							<strong>Population:</strong> 81,770,900 <br />
							<strong>Region:</strong> Europe <br />
							<strong>Capital:</strong> Berlin
						</p>
					</Card>
				</Link>
			</div>
		</div>
	);
};

export default Countries;
