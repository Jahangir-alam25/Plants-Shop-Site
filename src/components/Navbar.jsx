"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
 const { data: session, status } = useSession();
  console.log(session);
    const navMenu = () => {
        return (
            <>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/products"}>Products</Link>
                </li>{" "}

                <li>
                    <Link href={"/dashboard/add-product"}>Dashboard</Link>
                </li>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>

                <li>
                    <Link href={"/offers"}>Offers</Link>
                </li>{" "}

            </>
        );
    };

    return (
        <div className="bg-green-300">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {navMenu()}
                        </ul>
                    </div>
                    <Link href={"/"} className="text-xl flex items-center text-white font-bold">
                        <Image
                            src={"/assets/plants-logo.jpg"}
                            className="rounded-full border-2"
                            width={50}
                            height={50}
                            alt="brand logo"
                        />
                        Plants
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
                </div>
                <div className="navbar-end space-x-2">
                     <ul className="menu menu-horizontal px-1">
            {status == "authenticated" ? (
              <>
                <li>
                  <Image
                    src={session?.user?.image}
                    width={50}
                    height={50}
                    alt="user-logo"
                  />
                </li>
                <li onClick={() => signOut()}>Log Out</li>
              </>
            ) : (
              <>
                <li>
                  <Link href={"/register"}>Register</Link>
                </li>
                <li>
                  <Link href={"/login"}>Login</Link>
                </li>
              </>
            )}
          </ul>
                    <div className="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        <span id="cart-total" className="badge badge-sm indicator-item">0</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

