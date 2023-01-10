export interface ITodo {
    _id: string;
    label: string | undefined;
    description: string;
    createdAt: Date;
    updatedAt: Date | undefined;
    state: "validate" | "in-progess" | "blocked" | "todo";
}