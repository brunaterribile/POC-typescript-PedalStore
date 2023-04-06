export type PedalEntity = {
    id: number,
    model: string,
    brand: string,
    value: number,
    quantity: number
}

export type Pedal = Omit<PedalEntity, "id">