//do not want to put "use client" here because many doesn't have to be client side. (take advantage of server-side render)
//therefore make a new component "NavLink"
// 'use client';

import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackground from "./main-header-background";
//import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

export default function MainHeader() {
    //const path = usePathname();
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="A plate with food on it" />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href={'/meals'}>Brows Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href={'/community'}>Foodies Community</NavLink>                        
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}