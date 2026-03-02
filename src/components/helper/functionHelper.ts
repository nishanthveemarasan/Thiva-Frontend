export const initial = (title: string, sliceIndex:number) => {
    return title.split(" ").slice(0,sliceIndex).map((n) => n[0]).join("");
}