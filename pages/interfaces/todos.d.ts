export interface ITodo {
    _id: string;
    label?: string;
    description: string;
    createdAt: Date;
    updatedAt?: Date;
    state: "validate" | "in-progess" | "blocked" | "invalidate";
}