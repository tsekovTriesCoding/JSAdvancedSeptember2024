function getArticleGenerator(articles) {
    return function () {
        const contentDiv = document.getElementById('content');
       
        if(articles.length > 0) {
            const article = document.createElement('article');
            article.textContent = articles.shift();
    
            contentDiv.append(article);
        }
    }

}
