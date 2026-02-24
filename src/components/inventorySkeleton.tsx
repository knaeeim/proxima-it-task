import { VehicleSkeleton } from "./vehicleSkelton";

export function InventorySkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-w-250">
            {Array.from({ length: 6 }).map((_, i) => (
                <VehicleSkeleton key={i} />
            ))}
        </div>
    );
}
