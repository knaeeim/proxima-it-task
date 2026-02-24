// src/app/(dashboard)/page.tsx
import { VehicleCard } from "@/components/vehicleCard";
import { vehicles } from "@/services/vehicles.service";
import { Vehicle } from "@/types";

export default async function Home() {
    const data = await vehicles.getAllVehicles();
    const allVehicles: Vehicle[] = data.products;

    return (
        <main className="p-6 lg:p-10 max-w-7xl mx-auto">
            <header className="mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-zinc-100 tracking-tight">
                        Current Inventory
                    </h1>
                    <p className="text-zinc-500">
                        Explore our curated collection of luxury vehicles.
                    </p>
                </div>

                <div>
                    
                </div>
            </header>

            {/* The Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allVehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
            </div>
        </main>
    );
}
