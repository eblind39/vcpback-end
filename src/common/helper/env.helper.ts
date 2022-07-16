import {existsSync} from 'fs'
import {resolve} from 'path'

const getEnvPath = (dest: string): string[] => {
    const env: string | undefined = process.env.NODE_ENV

    const fallback: string = resolve(`${dest}/.env`)
    const filename: string = env ? `.env.${env}` : `.env.development`
    let filePath: string = resolve(`${dest}/${filename}`)

    const rootEnv: string = filename

    if (!existsSync(filePath)) {
        filePath = fallback
    }

    return [filePath, rootEnv]
}

export {getEnvPath}
