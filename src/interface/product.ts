export interface Product{
    name: string,
    supplierId: number,
    categoryId: number,
    quantityPerUnit: number,
    unitPrice: number,
    unitsInStock: number,
    unitsOnOrder: number,
    reorderLevel: number,
    discontinued: boolean
}