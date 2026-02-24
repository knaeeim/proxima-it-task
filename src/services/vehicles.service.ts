/* eslint-disable @typescript-eslint/no-explicit-any */
export const vehicles = {
    getAllVehicles: async () => {
        try {
            const response = await fetch("https://dummyjson.com/products/category/vehicle")
            if (response.ok) {
                return response.json()
            }
            throw new Error("Failed to fetch vehicles")
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}