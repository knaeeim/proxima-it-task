/* eslint-disable @typescript-eslint/no-explicit-any */
export const vehicles = {
    getAllVehicles: async () => {
        try {
            const response = await fetch("https://dummyjson.com/products/category/vehicle", {
                next: {
                    revalidate: 300, // Revalidate data every 5 minutes
                    tags: ["vehicles"], // Tag for cache invalidation
                }
            })
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            return await response.json()
        } catch (error: any) {
            throw new Error("Unable to load luxury inventory. Please try again.", error)
        }
    }
}