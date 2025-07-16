import { createContext } from "react";

export interface MyCustomContext {
    nombreProgramador: string
    webAppProyect: string
    setContextValues: (values: Partial<Omit<MyCustomContext, "setContextValues">>) => void
}

export const MyGlobalAppContext: React.Context<MyCustomContext> = createContext<MyCustomContext>({
    nombreProgramador: "ivan",
    webAppProyect: "aprendiendo react",
    setContextValues: () => {}
});
