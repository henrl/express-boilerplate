import { Author } from "../types/author";

const listOfAuthors = [
    { id: 1, name: "Ernest Hemingway" },
    { id: 2, name: "Robert Ludlum" },
    { id: 3, name: "Ursula Le Guin" },
];

export const getAuthorById = async (authorId: number): Promise<Author | undefined> => {
    return listOfAuthors.find(author => author.id === authorId);
};

export const getAuthors = async (): Promise<Author[]> => {
    return listOfAuthors;
};

export const addAuthor = async ({ name }: {name: string}): Promise<void> => {
    const nextId = Math.max(...listOfAuthors.map(author => author.id)) + 1;
    listOfAuthors.push({ id: nextId, name });
    return;
}
