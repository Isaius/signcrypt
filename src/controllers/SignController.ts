import { Request, Response } from "express";
import crypto from 'crypto'

class SignController {
    async sign(req: Request, res: Response) {
        const { data } = req.body
        const { privateKey } = req.query

        const sign = crypto.createSign('SHA256');
        sign.write(data);
        sign.end();
        const signature = sign.sign(privateKey, 'hex');

        res.json(signature).send()
    }

    async verify(req: Request, res: Response) {
        const { publicKey, signature, content } = req.body

        const verify = crypto.createVerify('SHA256');
        verify.write(content);
        verify.end();
        const isLegit = verify.verify(publicKey, signature, 'hex');

        if(isLegit) {
            res.status(200).send()
        } else {
            res.status(400).send()
        }
    }
}

export default new SignController()