/**
 * @file Defines all paragraph related business logic.
 */

import { Document, Query } from "mongoose";

import Paragraph from "../models/Paragraph";
import { ArgumentError, NotFoundError } from "../contracts/errors";

class ParagraphService {
    /**
     * Returns an array of paragraphs from database.
     */
    public async getAll(): Promise<Document[]> {
        return await Paragraph.find();
    }

    /**
     * Returns a random paragraph from database.
     */
    public async getRandom(): Promise<Document> {
        return await Paragraph.findOne();
    }

    /**
     * Inserts a paragraph into database.
     * @param paragraph Paragraph that needs to be inserted.
     */
    public async create(paragraph: any): Promise<Document> {
        this.verifyParagraph(paragraph);

        return await Paragraph.create(paragraph);
    }

    /**
     * Updates data of a given paragraph
     * @param paragraph Pargraph object with new data.
     */
    public async update(paragraph: any): Promise<Query<any>> {
        return await Paragraph.updateOne(
            { _id: paragraph.id },
            { $set: paragraph }
        );
    }

    /**
     * Removes a specific paragraph from the database.
     * @param id Id of the paragraph that needs to be removed.
     */
    public async delete(id: string): Promise<void> {
        await Paragraph.findByIdAndRemove(id);
    }

    /**
     * Verifies if given paragraph fields are correct.
     * @param paragraph Paragraph object which needs to be be validated.
     */
    private verifyParagraph(paragraph: any) {
        if (!paragraph.text) {
             throw new ArgumentError("Paragraph cannot be empty.");
        }
        if (paragraph.text.length <= 10) {
            throw new ArgumentError("Paragraph length must be longer than 10 characters.");
        }
        if (paragraph.text.length > 500) {
            throw new ArgumentError("Paragraph length cannot exceed 500 characters.");
        }
    }
}

export default new ParagraphService();