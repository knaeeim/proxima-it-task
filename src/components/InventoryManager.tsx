"use client";

import { useState, useMemo } from "react";
import { Vehicle } from "@/types";
import { VehicleCard } from "@/components/vehicleCard";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function InventoryManager({ initialVehicles }: { initialVehicles: Vehicle[] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState<string>("default");

    // Filtering and sorting based on the user's input and selction
    const filteredAndSortedVehicles = useMemo(() => {
        let result = [...initialVehicles];

        // Filter by Title
        if (searchQuery) {
            result = result.filter((v) =>
                v.title.toLowerCase().includes(searchQuery.toLowerCase()),
            );
        }

        // Sort by Price
        if (sortOrder === "low-to-high") {
            result.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "high-to-low") {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [initialVehicles, searchQuery, sortOrder]);

    return (
        <section>
            <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between">
                {/* Search Bar */}
                <Input
                    placeholder="Search vehicles..."
                    className="max-w-sm  border-zinc-800"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* Sort Dropdown */}
                <Select onValueChange={(value) => setSortOrder(value)}>
                    <SelectTrigger className="w-45 border-zinc-800">
                        <SelectValue placeholder="Sort by Price" />
                    </SelectTrigger>
                    <SelectContent className="border-zinc-800">
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="low-to-high">Price: Low to High</SelectItem>
                        <SelectItem value="high-to-low">Price: High to Low</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* The Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-100 min-w-250">
                {filteredAndSortedVehicles.length > 0 ? (
                    <>
                        {filteredAndSortedVehicles.map((vehicle) => (
                            <VehicleCard key={vehicle.id} vehicle={vehicle} />
                        ))}
                    </>
                ) : (
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col items-center justify-center py-20 text-zinc-500 border border-dashed border-zinc-800 rounded-xl bg-zinc-950/50">
                        <p className="text-lg font-medium text-zinc-400">No vehicles found</p>
                        <p className="text-sm">Try adjusting your search or filters.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
