
export class FilterDefaultModel {
    search: string | undefined;
    id: number | undefined;
    code: number | undefined;
    classId: number | undefined;
    typeId: number | undefined;
    technicalNotebookId: number | undefined;
    public constructor(init?: Partial<FilterDefaultModel>) {
        Object.assign(this, init);
    }

    static fromJson(jsonData: any): FilterDefaultModel {
        return Object.assign(new FilterDefaultModel(), jsonData);
    }
}
