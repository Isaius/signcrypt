import crypto from 'crypto'
import { Request, Response } from 'express';

class DecryptController {
    async decrypt(req: Request, res: Response) {
        // const { privateKey } = req.query
        const { privateKey, cypherText} = req.body
        var plainText = ''
        
        // const key = crypto.createPrivateKey({
        //     key: privateKey.toString(),
        //     format: 'pem',
        // })
        // console.log(key)

        plainText = crypto.privateDecrypt({
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: 'SHA256'
        }, Buffer.from(cypherText)).toString('utf-8')

        console.log(plainText)
        res.json({ plainText }).send()
    }    
}

export default new DecryptController()