import { assert } from "chai";
import { artGallery } from "../artGallery.js";

describe('ArtGallery', () => {

    describe('Test addArtwork', () => {
        it('Should throw exception on title different than string', () => {
            assert.throws(() => artGallery.addArtwork(1, '30 x 40', 'str'), 'Invalid Information!');
        });

        it('Should throw exception on artist different than string', () => {
            assert.throws(() => artGallery.addArtwork('str', '30 x 40', 1), 'Invalid Information!');
        });

        it('Should throw exception on invalid dimensions', () => {
            assert.throws(() => artGallery.addArtwork('str', 1, 'str'), 'Invalid Dimensions!');
            assert.throws(() => artGallery.addArtwork('str', '-20 x -10', 'str'), 'Invalid Dimensions!');
        });

        it('Should throw exception on invalid artist', () => {
            assert.throws(() => artGallery.addArtwork('str', '30 x 40', 'Mozart'), 'This artist is not allowed in the gallery!');
        });

        it('Should add artwork', () => {
            const expectedMessage = `Artwork added successfully: '${'something'}' by ${'Monet'} with dimensions ${'30 x 40'}.`;
            const actualMessage = artGallery.addArtwork('something', '30 x 40', 'Monet');

            assert.equal(expectedMessage, actualMessage);
        });

    });

    describe('Test calculateCosts', () => {
        it('Should throw exception on invalid exhibition costs', () => {
            assert.throws(() => artGallery.calculateCosts('1', 1, false), 'Invalid Information!');
            assert.throws(() => artGallery.calculateCosts(-1, 1, false), 'Invalid Information!');
        });

        it('Should throw exception on invalid insurance costs', () => {
            assert.throws(() => artGallery.calculateCosts(1, '1', false), 'Invalid Information!');
            assert.throws(() => artGallery.calculateCosts(1, -1, false), 'Invalid Information!');
        });

        it('Should throw exception on invalid sponsor', () => {
            assert.throws(() => artGallery.calculateCosts(1, 1, 1), 'Invalid Information!');
        });

        it('Should calculate costs without sponsor', () => {
            const expectedMessage = `Exhibition and insurance costs are ${100}$.`;
            const actualMessage = artGallery.calculateCosts(50, 50, false);

            assert.equal(expectedMessage, actualMessage);
        });

        it('Should calculate costs with sponsor', () => {
            const expectedMessage = `Exhibition and insurance costs are ${90}$, reduced by 10% with the help of a donation from your sponsor.`;
            const actualMessage = artGallery.calculateCosts(50, 50, true);

            assert.equal(expectedMessage, actualMessage);
        });
    });

    describe('Test organizeExhibits', () => {
        it('Should throw exception on invalid artworks count', () => {
            assert.throws(() => artGallery.organizeExhibits('1', 1), 'Invalid Information!');
            assert.throws(() => artGallery.organizeExhibits(0, 1), 'Invalid Information!');
            assert.throws(() => artGallery.organizeExhibits(-1, 1), 'Invalid Information!');
        });

        it('Should throw exception on invalid display spaces count', () => {
            assert.throws(() => artGallery.organizeExhibits(1, '1'), 'Invalid Information!');
            assert.throws(() => artGallery.organizeExhibits(1, 0), 'Invalid Information!');
            assert.throws(() => artGallery.organizeExhibits(1, -1), 'Invalid Information!');
        });

        it('Should organize exhibits with artworks per space < 5', () => {
            const expectedMessage = `There are only ${2} artworks in each display space, you can add more artworks.`;
            const actualMessage = artGallery.organizeExhibits(10, 5);

            assert.equal(expectedMessage, actualMessage);
        });

        it('Should organize exhibits with artworks per space >= 5', () => {
            const expectedMessage = `You have ${10} display spaces with ${10} artworks in each space.`;
            const actualMessage = artGallery.organizeExhibits(100, 10);

            assert.equal(expectedMessage, actualMessage);
        });
    });
}); 