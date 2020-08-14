import crypto from 'crypto'
import { Request, Response } from 'express';

class EncryptController {
    async encrypt(req: Request, res: Response) {
        console.log(req.body.key)
        const { plainText, key, typeKey } = req.body
        var cypherText = ''

        if(typeKey == 'public') {
            cypherText = crypto.publicEncrypt({
                key,
                padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
                oaepHash: 'SHA256'
            }, Buffer.from(plainText)).toString('base64')
        } else if( typeKey == 'private'){
            cypherText = crypto.privateEncrypt({
                key,
                padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
                oaepHash: 'SHA256'
            }, Buffer.from(plainText)).toString()
        }

        res.json({ cypherText }).send()
    }
}

export default new EncryptController()