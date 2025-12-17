import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import ItemCard from '@/Components/itemCard';

const collectibles = [
    { id: 1, name: 'Smiley', rarity: '★', image: '😀' },
    { id: 2, name: 'Laughing', rarity: '★', image: '😆' },
    { id: 3, name: '???', rarity: '★★' },
    { id: 4, name: 'Cold Face', rarity: '★★★', image: '🥶' },
    { id: 5, name: 'Skull', rarity: '★★★', image: '💀' },
    { id: 6, name: '???', rarity: '★★' },
    { id: 7, name: '???', rarity: '★★' },
    { id: 8, name: '???', rarity: '★★' },
    { id: 9, name: '???', rarity: '★★' },
    { id: 10, name: '???', rarity: '★★' },
    { id: 11, name: '???', rarity: '★★' },
    { id: 12, name: '???', rarity: '★★' },
    { id: 13, name: '???', rarity: '★★' },
];

export default function Inventory() {
    return (
        <MainLayout>
            <Head title="Inventory" />

            {/* background */}
            <div className="min-h-screen bg-[#087592]">
                <div className="flex justify-center">
                    {/* foreground */}
                    <div className="w-[80%] max-w-[1600px] min-h-screen flex justify-center p-16 bg-[#F9FEFF] backdrop-blur-sm border border-white/20 shadow-2xl">
                        {/* inventory panel */}
                        <div className="w-full self-center p-8 pt-4 bg-[#C0DEE5] rounded-sm">
                            <h1 className="text-2xl font-poppins font-semibold text-gray-800 text-center pb-4">Inventory</h1>
                            {/* grid layout */}
                            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                                {collectibles.map((item) => (
                                    <ItemCard key={item.id} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
