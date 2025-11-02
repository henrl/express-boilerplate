import { NextFunction, Request, Response } from "express";
import { validateAuthorId } from "../../src/middlewares/validateAuthorId";

describe('Author Id validation middleware', () => {
    it('should pass for author id of type number', () => {
        const testRequest = { params: { authorId: 10 } } as unknown as Request;
        const testResponse = {} as unknown as Response;
        const next = jest.fn() as NextFunction;

        validateAuthorId(testRequest, testResponse, next);
        expect(next).toHaveBeenCalled();
    });

    it('should throw error for invalid author id', () => {
        const errRequest = { params: { authorId: 'blah' } } as unknown as Request;
        const testResponse = {} as unknown as Response;
        const next = jest.fn() as NextFunction;

        expect(() => validateAuthorId(errRequest, testResponse, next)).toThrow('Author id must be a number');
    });
})
