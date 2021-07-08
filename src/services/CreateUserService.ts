import { UsersRepositories } from "../repositories/UserRepositories"
import {getCustomRepository} from "typeorm"; 
 
interface IUserRequest{
    name : string;
    email : string;
    admin?: boolean;

}

class CreateUserService{

    async execute({name, email, admin}) {
        const usersRepository =  getCustomRepository(UsersRepositories);

        if(!email){ //verificar se foi passado um email
            throw new Error("Email incorreto")
        }

        const userAlreadyExists = await usersRepository.findOne({ //pesquisar se já existe esse email cadastrado no banco de dados
            email
        });

        if(userAlreadyExists){  // Verificar se o ususario já existe
            throw new Error("User already exists");
        }

        const user = usersRepository.create({ //criar usuario
            name,
            email,
            admin
        })

        await usersRepository.save(user); //commitar

        return user; 
    }
}

export {CreateUserService}
