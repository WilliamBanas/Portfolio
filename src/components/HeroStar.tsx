"use client";

import StarMark from "./StarMark";

export default function HeroStar() {
	return (
			<div className="-z-10 absolute h-[26rem] w-[26rem] select-none text-[#0c0c0e] sm:-right-10 sm:h-[34rem] sm:w-[34rem]">
				<StarMark className="block h-full w-full" />
			</div>
	);
}
