export interface Dream {
    id: number,
    name: string,
    theme: string,
    checked: boolean
}

export function storeDream(dream: Dream) {
   const dreamAsString = JSON.stringify(dream);
    localStorage.setItem("dream", dreamAsString);
}


