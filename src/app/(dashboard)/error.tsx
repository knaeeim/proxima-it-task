"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
                <AlertTriangle className="h-10 w-10 text-red-500" />
            </div>

            <h2 className="mb-2 text-2xl font-bold tracking-tight text-zinc-100">
                Something went wrong
            </h2>

            <p className="mb-8 max-w-md text-zinc-500">
                We encountered an error while loading the vehicle database. This has been
                logged, and we are working to restore the connection.
            </p>

            <div className="flex gap-4">
                <Button
                    variant="default"
                    onClick={() => reset()}
                    className="bg-zinc-100 text-black hover:bg-zinc-300">
                    Try again
                </Button>
                <Button
                    variant="outline"
                    onClick={() => window.location.reload()}
                    className="border-zinc-800 text-zinc-400">
                    Reload Page
                </Button>
            </div>
        </div>
    );
}
