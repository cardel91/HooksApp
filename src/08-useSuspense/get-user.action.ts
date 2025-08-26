export interface User {
    id: number;
    name: string;
    location: string;
    role: string
}

export const getUserAction = async (id: number) => {


    await new Promise<User>(res => setTimeout(res, 2000));

    return {
        id: id,
        name: "Usuario Generico",
        location: "Managua",
        role: "dev"
    }
}