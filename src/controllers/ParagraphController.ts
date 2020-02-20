/**
 * @file Dispatcher for paragraph related requests.
 */

import express, { request } from "express";
import ParagraphService from "../services/ParagraphService";
import { ArgumentError } from "../contracts/errors";

class ParagraphController {
    public async getAll(req: express.Request, res: express.Response) {
        try {
            const data = await ParagraphService.getAll();

            res.send({ data });
        } catch (error) {
            res.status(500).send({ error });
        }
    }

    public async create(req: express.Request, res: express.Response) {
        try {
            const paragraph = req.body;
            const result = await ParagraphService.create(paragraph);

            res.status(201).send({ data: result });
        } catch (error) {
            if (error instanceof ArgumentError) {
                res.status(400).send({ error });
            }
            res.status(500).send({ error });
        }
    }

    public async delete(req: express.Request, res: express.Response) {
        try {
            const id = req.params.id;

            await ParagraphService.delete(id);

            res.status(200).send({ success: true });
        } catch (error) {
            res.status(500).send({ error });
        }
    }
}

export default new ParagraphController();