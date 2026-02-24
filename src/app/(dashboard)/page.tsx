import InventoryManager from "@/components/InventoryManager";
import { vehicles } from "@/services/vehicles.service";
import { Vehicle } from "@/types";

export default async function Home() {
    const data = await vehicles.getAllVehicles();
    const allVehicles: Vehicle[] = data.products;

    return (
        <main className="w-[90%] mx-auto mt-10 my-20">
            <header className="mb-10 flex flex-col justify-center items-center md:block">
                <h1 className="text-3xl font-bold tracking-tight">Current Inventory</h1>
                <p className="text-zinc-500">Explore our curated collection.</p>
            </header>

            <InventoryManager initialVehicles={allVehicles} />
        </main>
    );
}
