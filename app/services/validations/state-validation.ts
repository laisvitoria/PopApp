import * as yup from "yup";

const stateSchema = yup.array().of(
    yup.object({
        id: yup.number().required(),
        nome: yup.string().required(),
        sigla: yup.string().max(2).required(),
    }).shape({
        regiao: yup.object({
            id: yup.number().required(),
            nome: yup.string().required(),
            sigla: yup.string().max(2).required(),
        })
    })
)

async function ValidationStateSchema(schema) {
    await stateSchema.validate(schema, {abortEarly: false})
    .then((res) => {
        console.log("Validado: ", res)
    })
    .catch((err) => {
        console.log("Tipo do erro: ", err.name)
        console.log("Motivo do erro: ", err.errors)
    })
}

export default ValidationStateSchema