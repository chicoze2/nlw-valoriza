import { Request, Response, NextFunction } from "express";


export function verificarAdmin(request: Request, response: Response, next: NextFunction){
//verificar se o usuário é ademe

    const admin = true;


    if(admin){
        return next();
    }

    //else
    return response.status(401).json({ 
        erro: "Você não tem permissão para essa ação"
    })
    
}