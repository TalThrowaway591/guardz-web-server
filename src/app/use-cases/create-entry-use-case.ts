import Joi from 'joi';
import { EntryEntity } from '../entities/entry-entity';

type Input = {
    title: string;
    body: string;
    ip: string;
}

type Config = {
    entryEntityGateway: EntryEntityGateway
}

const INPUT_VALIDATION_SCHEMA = Joi.object<Input>({
    title: Joi.string(),
    body: Joi.string(),
    ip: Joi.string(),
})

class CreateEntryUseCase {
    protected input: Input;

    public constructor(config: Config)

    protected readonly getJoiSchema = (): Joi.AnySchema<any> | null => {
        return INPUT_VALIDATION_SCHEMA;
    };

    protected readonly doExecute = async (): Promise<void> => {
        const { title, body, ip } = this.input;

        const timestamp = Date.now();

        const entryEntity = new EntryEntity();

        entryEntity.setTitle(title);
        entryEntity.setBody(body);
        entryEntity.setIP(ip);
        entryEntity.setActive(true)
        entryEntity.setCreatedTimestamp(timestamp)

        entryEntity.setCreatedTimestamp(timestamp)

    }
}