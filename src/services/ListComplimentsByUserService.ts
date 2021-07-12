import { getCustomRepository } from "typeorm"
import { ElogiosRepositories } from "../repositories/ElogiosRepositories"


const elogiosRepositories = getCustomRepository(ElogiosRepositories)

class ListComplimentsByUserService{
    
    async listReceivedElogios(user_id: string){
        
        const elogios = await elogiosRepositories.find({
            where: {
                user_receiver: user_id
            }
        })

        return elogios    

    }


    async listSentElogios(user_id: string){
        const elogios = await elogiosRepositories.find({
            where: {
                user_sender: user_id
            }
        })

        return elogios    
    }
}

export { ListComplimentsByUserService }