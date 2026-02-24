import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function VehicleSkeleton() {
    return (
        <Card className="overflow-hidden bg-zinc-950 border-zinc-800">
            <CardContent className="p-0 aspect-16/10">
                {/* Image Placeholder */}
                <Skeleton className="h-full w-full rounded-none bg-zinc-900" />
            </CardContent>

            <CardFooter className="flex flex-col items-start p-5 gap-3">
                {/* Brand Placeholder */}
                <Skeleton className="h-3 w-16 bg-zinc-900" />

                <div className="flex justify-between items-center w-full">
                    {/* Title Placeholder */}
                    <Skeleton className="h-5 w-32 bg-zinc-900" />
                    {/* Price Placeholder */}
                    <Skeleton className="h-5 w-16 bg-zinc-900" />
                </div>
            </CardFooter>
        </Card>
    );
}
