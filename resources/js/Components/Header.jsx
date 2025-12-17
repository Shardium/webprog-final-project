import { Link, usePage } from '@inertiajs/react';

import Button from '@/Components/button';

export default function Header() {
    const { url } = usePage();
    const isActive = (path) => url === path;

    const NavLink = ({ href, children }) => (
        <Link
            href={href}
            className={`h-full flex items-end font-poppins text-xl font-bold transition-all ${
                isActive(href)
                    ? 'border-b-6 border-[#087592]'
                    : 'border-b-6 border-transparent hover:border-white hover:border-opacity-50'
            }`}
        >
            <span className='pb-2'>{children}</span>
        </Link>
    )

    return (
        <header className="w-full bg-[#22B6DB] text-white px-10 flex justify-between items-stretch">
            {/* Logo & Navigation */}
            <div className='flex items-center gap-24 py-1'>
                <Link href="/" className="font-fredoka text-[40px] font-bold">
                    WaterQuest
                </Link>

                <nav className="h-full flex items-center gap-6">
                    <NavLink href="/tasks">Tasks</NavLink>
                    <NavLink href="/inventory">Inventory</NavLink>
                </nav>
            </div>

            {/* Navigation */}
            <Button variant="secondary" size="not-full" className="font-medium px-4 self-center">Log Out</Button>
        </header>
    );
}
