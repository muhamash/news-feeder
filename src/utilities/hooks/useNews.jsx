import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

export const useNews = () =>
{
    const context = useContext( NewsContext );

    if ( !context )
    {
        throw new Error( "useNews context is not using anymore!" );
    }
};