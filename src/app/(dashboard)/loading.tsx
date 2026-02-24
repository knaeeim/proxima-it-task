import { InventorySkeleton } from "@/components/inventorySkeleton";

export default function Loading() {
    return (
        <main className="p-6 lg:p-10 max-w-7xl mx-auto">
            <header className="mb-10">
                <div className="h-10 w-48 bg-zinc-900 animate-pulse rounded-md mb-2" />
                <div className="h-5 w-64 bg-zinc-900 animate-pulse rounded-md" />
            </header>

            <InventorySkeleton />
        </main>
    );
}
