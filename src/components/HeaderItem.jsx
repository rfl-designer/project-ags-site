import logo from '../assets/svg/logo-agd.svg';
import menuIcon from '../assets/svg/icon-menu.svg';
import facebookIcon from '../assets/svg/icon-facebook.svg';
import instagramIcon from '../assets/svg/icon-instagram.svg';

export const HeaderItem = () => {
    return(
        <header>
            <nav className="container flex items-center justify-between m-auto">
                <div className="">
                    <a href="#"><img src={logo} className="w-48" alt="logo" /></a>
                </div>
                
                <div className="hidden  md:block justify-between text-amarelo-base">
                    <li className="inline-block px-4 "><a href="#">Home</a></li>
                    <li className="inline-block px-4"><a href="#">Sobre</a></li>
                    <li className="inline-block px-4"><a href="#">Serviços</a></li>
                    <li className="inline-block px-4"><a href="#">Portfólio</a></li>               
                    <li className="inline-block px-4"><a href="#">Contato</a></li>               
                </div>
                <div className="flex gap-4">
                    <a className="fill-currente text-amarelo-base"  href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3663 9.24445C10.646 9.24445 9.2421 10.6484 9.2421 12.3687C9.2421 14.089 10.646 15.4929 12.3663 15.4929C14.0866 15.4929 15.4905 14.089 15.4905 12.3687C15.4905 10.6484 14.0866 9.24445 12.3663 9.24445ZM21.7366 12.3687C21.7366 11.0749 21.7484 9.79288 21.6757 8.50148C21.603 7.00148 21.2609 5.67023 20.164 4.57335C19.0648 3.47413 17.7359 3.13429 16.2359 3.06163C14.9421 2.98898 13.6601 3.0007 12.3687 3.0007C11.0749 3.0007 9.79288 2.98898 8.50148 3.06163C7.00148 3.13429 5.67023 3.47648 4.57335 4.57335C3.47413 5.67257 3.13429 7.00148 3.06163 8.50148C2.98898 9.79523 3.0007 11.0773 3.0007 12.3687C3.0007 13.6601 2.98898 14.9444 3.06163 16.2359C3.13429 17.7359 3.47648 19.0671 4.57335 20.164C5.67257 21.2632 7.00148 21.603 8.50148 21.6757C9.79523 21.7484 11.0773 21.7366 12.3687 21.7366C13.6624 21.7366 14.9444 21.7484 16.2359 21.6757C17.7359 21.603 19.0671 21.2609 20.164 20.164C21.2632 19.0648 21.603 17.7359 21.6757 16.2359C21.7507 14.9444 21.7366 13.6624 21.7366 12.3687ZM12.3663 17.1757C9.70616 17.1757 7.55929 15.0288 7.55929 12.3687C7.55929 9.70851 9.70616 7.56163 12.3663 7.56163C15.0265 7.56163 17.1734 9.70851 17.1734 12.3687C17.1734 15.0288 15.0265 17.1757 12.3663 17.1757ZM17.3702 8.48742C16.7491 8.48742 16.2476 7.98585 16.2476 7.36476C16.2476 6.74367 16.7491 6.2421 17.3702 6.2421C17.9913 6.2421 18.4929 6.74367 18.4929 7.36476C18.4931 7.51224 18.4642 7.65831 18.4078 7.7946C18.3515 7.93089 18.2688 8.05473 18.1645 8.15901C18.0602 8.2633 17.9364 8.34598 17.8001 8.40234C17.6638 8.45869 17.5177 8.4876 17.3702 8.48742Z" fill="currentColor"/>
                    </svg>
                    </a>
                    <a className="fill-currente text-amarelo-base" href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.4218 3C4.52628 3 3 4.52628 3 6.4218V18.3182C3 20.2137 4.52628 21.74 6.4218 21.74H12.8695V14.4138H10.9323V11.7762H12.8695V9.52269C12.8695 7.75223 14.0141 6.12665 16.6509 6.12665C17.7185 6.12665 18.5079 6.22914 18.5079 6.22914L18.4458 8.69228C18.4458 8.69228 17.6407 8.68467 16.7622 8.68467C15.8113 8.68467 15.6588 9.12278 15.6588 9.85007V11.7762H18.5214L18.3966 14.4138H15.6588V21.74H18.3182C20.2137 21.74 21.74 20.2137 21.74 18.3182V6.42182C21.74 4.5263 20.2137 3.00002 18.3182 3.00002H6.42179L6.4218 3Z" fill="currentColor"/>
                    </svg>
                    </a>
                </div>

                <div className=" md:hidden fill-current text-amarelo-base">
                {/* <a href="#" className="md:hidden"><img className="text-amarelo-base" src={menuIcon} alt="" /></a> */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.05 11H3.95C3.42533 11 3 11.4253 3 11.95V12.05C3 12.5747 3.42533 13 3.95 13H20.05C20.5747 13 21 12.5747 21 12.05V11.95C21 11.4253 20.5747 11 20.05 11Z" fill="currentColor"/>
                <path d="M20.05 16H3.95C3.42533 16 3 16.4253 3 16.95V17.05C3 17.5747 3.42533 18 3.95 18H20.05C20.5747 18 21 17.5747 21 17.05V16.95C21 16.4253 20.5747 16 20.05 16Z" fill="currentColor"/>
                <path d="M20.05 6H3.95C3.42533 6 3 6.42533 3 6.95V7.05C3 7.57467 3.42533 8 3.95 8H20.05C20.5747 8 21 7.57467 21 7.05V6.95C21 6.42533 20.5747 6 20.05 6Z" fill="currentColor"/>
                </svg>

                </div>
            </nav>
        </header>
    )
}