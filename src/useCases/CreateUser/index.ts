import { MailTrapMailProvider } from "../../providers/Implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/Implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapMailProvider = new MailTrapMailProvider()

const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailTrapMailProvider,
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController}