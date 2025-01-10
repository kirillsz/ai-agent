import Social from "./Social";


const SOCIALS = [
    {
        href: "/",
        img: "/socials/dextools.svg"
    },{
        href: "/",
        img: "/socials/dexscreener.svg"
    },{
        href: "/",
        img: "/socials/doc.svg"
    },{
        href: "/",
        img: "/socials/telegram.svg"
    },
    {
        href: "/",
        img: "/socials/twitter.svg"
    },
]
const Header = () => {
    return (<header>
        <nav className="flex items-center justify-start gap-2 pt-8">
         {SOCIALS.map((social,index) => <Social key={index} {...social}/>)}
        </nav>
    </header>);
}
 
export default Header;