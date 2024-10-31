import { assert } from "chai";
import { streamingServiceSelector } from "../streamingServiceSelector.js";

describe('Test for streamingServiceSelector', () => {
    describe('Test selectingContent', () => {
        it('Should throw error on not supported type', () => {
            assert.throws(() => streamingServiceSelector.selectingContent('Sitcom', 'TV', 'Action'), `We currently only support 'Movie' or 'TV Show' types.`);
        });

        it('Should throw error on not supported genre', () => {
            const supportedGenres = ["Action", "Comedy", "Drama", "Thriller", "Horror", "Romance", "Sci-Fi"];
            assert.throws(() => streamingServiceSelector.selectingContent('Movie', 'TV', 'Wrong'), `We currently support these genres: ${supportedGenres.join(", ")}.`);
        });

        it('Should return what you can watch', () => {
            const actual = streamingServiceSelector.selectingContent('Movie', 'TV', 'Action');
            const expected = `You can watch this ${'Action'} ${'Movie'} on ${'TV'}. Enjoy your ${'Action'}-filled experience!`;

            assert.equal(actual, expected);
        });
    });

    describe('Test availablePlatforms', () => {
        it('Should throw error on invalid platform input', () => {
            assert.throws(() => streamingServiceSelector.availablePlatforms('TV', 0), 'Invalid platform selection.');
            assert.throws(() => streamingServiceSelector.availablePlatforms(['TV', 'Netflix'], 1.5), 'Invalid platform selection.');
            assert.throws(() => streamingServiceSelector.availablePlatforms(['TV', 'Netflix'], -1), 'Invalid platform selection.');
            assert.throws(() => streamingServiceSelector.availablePlatforms(['TV', 'Netflix'], 2), 'Invalid platform selection.');
        });

        it('Should return available platforms', () => {
            const actual = streamingServiceSelector.availablePlatforms(['TV', 'Netflix', 'Nova'], 0);
            const expected = `Other available platforms are: Netflix, Nova.`;

            assert.equal(actual, expected);
        });
    });

    describe('Test contentRating', () => {
        it('Should throw erro on invalid runtime or rating', () => {
            assert.throws(() => streamingServiceSelector.contentRating('2', 2), 'Invalid runtime or rating.');
            assert.throws(() => streamingServiceSelector.contentRating(0, 2), 'Invalid runtime or rating.');
            assert.throws(() => streamingServiceSelector.contentRating(-1, 2), 'Invalid runtime or rating.');
            assert.throws(() => streamingServiceSelector.contentRating(2, -1), 'Invalid runtime or rating.');
            assert.throws(() => streamingServiceSelector.contentRating(2, 11), 'Invalid runtime or rating.');
            assert.throws(() => streamingServiceSelector.contentRating(2, '2'), 'Invalid runtime or rating.');
        });

        it('Should return highly rated content', () => {
            const actual = streamingServiceSelector.contentRating(120, 7);
            const expected = `This content is highly rated (7/10) and has a runtime of 2.00 hours. Enjoy your watch!`;

            assert.equal(actual, expected);
        });

        it('Should return low rated content', () => {
            const actual = streamingServiceSelector.contentRating(120, 6);
            const expected = `This content has a lower rating (6/10) and runs for 2.00 hours. You might want to check reviews first.`;

            assert.equal(actual, expected);
        });
    });
});
