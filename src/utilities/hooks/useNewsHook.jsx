import { useContext } from "react";
import { NewsContext } from "../context/NewsProvider";

export const useNewsHook = () =>
{
    const context = useContext( NewsContext );
    console.log("usenewshook")

    if ( !context )
    {
        throw new Error( "useNews context is not using anymore!" );
    }

    return context;
};