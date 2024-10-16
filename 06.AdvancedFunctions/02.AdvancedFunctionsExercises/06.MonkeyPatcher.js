function solution(option) {
    let that = this;

    switch (option) {
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            return getScore() // or return getScore.bind(this);
    }

    function getScore() {
        let totalScore = that.upvotes - that.downvotes;
        let totalVotes = that.upvotes + that.downvotes;
        let upvotesToReport = that.upvotes;
        let downvotesToReport = that.downvotes;

        if (totalVotes > 50) {
            const numberToAdd = Math.ceil(Math.max(that.upvotes, that.downvotes) * 0.25);
            upvotesToReport += numberToAdd;
            downvotesToReport += numberToAdd;
        }

        let postRating = 'new';

        if (totalVotes < 10) {
            postRating = 'new';
        } else if (that.upvotes > 0.66 * totalVotes) {
            postRating = 'hot';
        } else if (totalScore >= 0 && totalVotes > 100) {
            postRating = 'controversial';
        } else if (totalScore < 0) {
            postRating = 'unpopular';
        }

        return [upvotesToReport, downvotesToReport, totalScore, postRating];
    }
}

// let post = {
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 100,
//     downvotes: 100
// };

// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// console.log(score);

// solution.call(post, 'downvote');         // (executed 50 times)
// score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
// console.log(score);

// var forumPost = {
//     id: '1',
//     author: 'pesho',
//     content: 'hi guys',
//     upvotes: 0,
//     downvotes: 0
// };

// solution.call(forumPost, 'upvote');
// var answer = solution.call(forumPost, 'score');
// var expected = [1, 0, 1, 'new'];
// console.log(answer);

