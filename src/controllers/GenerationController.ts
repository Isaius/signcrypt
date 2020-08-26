import crypto from 'crypto'
import { Request, Response } from 'express';

class GenerationController {
    async new(req: Request, res: Response) {
        console.log('generating new keys')
        const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
        });

        const pubkey = publicKey.export({ type:'pkcs1', format: 'pem' })
        const privKey = privateKey.export({ type: 'pkcs1', format: 'pem' })
        
        res.json({ privateKey: privKey, publicKey: pubkey }).send()
    }
}

export default new GenerationController()