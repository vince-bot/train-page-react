import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineUser } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {

	const router = useRouter();

	const [showNav, setShowNav] = useState(false);

	const menuItems = [
		{
			title: "Home",
			url: "/",
		},
		{
			title: "About Us",
			url: "/about-us",
		},
		{
			title: "Our Programs",
			url: "/our-programs",
		},
		{
			title: "News",
			url: "/news"
		},
		{
			title: "Contact Us",
			url: "/contact-us",
		},
	];

	return (
		<>
			<div className="md:flex justify-between items-center text-md sticky top-0 z-20 transition-down bg-white">
				<div className='flex w-full max-w-[1240px] m-auto justify-between px-8 xl:px-0'>
					<div className="flex items-center justify-between h-[100px] w-full lg:w-auto">
						<div className="flex justify-between w-full">
							<Image
								src="/img/logo.png"
								width={200}
								height={50}
								alt="logo"
							/>
							<div className="flex items-center gap-3">
								{showNav ? (
									<HiOutlineMenuAlt3 onClick={() => setShowNav(!showNav)} className="lg:hidden block w-10 h-10 p-2 cursor-pointer text-black bg-default-purple rounded-full" />
								) : (
									<HiOutlineMenuAlt2 onClick={() => setShowNav(!showNav)} className="lg:hidden block w-10 h-10 p-2 cursor-pointer text-black bg-default-purple rounded-full" />
								)}
							</div>
						</div>
					</div>
					<div className='flex items-center'>
						<ul className={(showNav ? "left-0 flex flex-col justify-center text-white transition-right ease-out duration-200" : "left-[-100vw] ") + " left-0 top-[100px] lg:static fixed bottom-0 lg:flex lg:space-x-7 items-center lg:bg-transparent  bg-[#0E4509] lg:w-auto w-full text-white lg:space-y-0 space-y-5 p-3 transition-left"}>
							{menuItems.map((item, index) => {
								return (
									<li
										key={index}
									>
										<Link
											href={item.url}
											className={`cursor-pointer transition-all hover:text-primary-green 
											${router.pathname === item.url
												? "text-primary-green " : "text-black"}`}
										>
											{item.title}
										</Link>
									</li>
								);
							})}
							<div className="">	
								<ul className='flex gap-3'>
									<li>
										<AiFillInstagram size={24} className="text-primary-green " />
									</li>
									<li>
										<BsFacebook size={21} className="text-primary-green " />
									</li>
									<li>
										<AiFillTwitterCircle size={24} className="text-primary-green " />
									</li>
								</ul>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar