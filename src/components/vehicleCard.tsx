// src/components/inventory/VehicleCard.tsx
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Vehicle } from "@/types";

interface VehicleCardProps {
    vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
    return (
        <Card className="overflow-hidden bg-zinc-950 border-zinc-800 group hover:border-zinc-700 transition-all duration-300">
            <CardContent className="p-0 relative aspect-16/10 overflow-hidden">
                {/* Availability Badge */}
                <Badge
                    className={`absolute top-3 left-3 z-10 backdrop-blur-md text-zinc-800 border-zinc-700 font-light ${
                        vehicle.availabilityStatus === "In Stock"
                            ? "bg-green-100"
                            : "bg-red-100"
                    }`}>
                    {vehicle.availabilityStatus}
                </Badge>

                {/* Vehicle Image */}
                <Image
                    src={vehicle.thumbnail}
                    alt={vehicle.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </CardContent>

            <CardFooter className="flex flex-col items-start p-5 gap-1">
                <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                    {vehicle.brand}
                </p>
                <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">
                        {vehicle.title.split(" ").slice(0, 2).join(" ")}
                    </h3>
                    <p className="text-lg font-bold text-zinc-100">
                        ${vehicle.price.toLocaleString()}
                    </p>
                </div>
            </CardFooter>
        </Card>
    );
}
