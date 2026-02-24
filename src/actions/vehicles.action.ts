import { vehicles } from "@/services/vehicles.service"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllVehicles = async () => {
    try {
        const response = await vehicles.getAllVehicles();
        return response;
    } catch (error: any) {
        throw new Error(error.message)
    }
}