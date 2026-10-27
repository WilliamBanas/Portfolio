"use client";

import StarMark from "./StarMark";

export default function HeroStar() {
	return (
			<div className="-z-10 absolute h-104 w-104 select-none text-white opacity-5 sm:-right-10 sm:h-136 sm:w-136">
				<StarMark className="block h-full w-full" />
			</div>
	);
}
