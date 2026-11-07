import { tweetsData } from './data.js';
const tweetInput = document.getElementById('tweet-input');
const tweetBtn = document.getElementById('tweet-btn');

console.log(tweetsData);

tweetBtn.addEventListener('click', function() {
})

function getFeedHtml() {
    let feedHtml = ``;

    

    tweetsData.forEach(function(tweet) {
        feedHtml += `
            <div class="tweet">
            <div class="tweet-inner">
                <img src="${tweet.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            <i class="fa-regular fa-comment-dots" data-action="reply"></i>
                            ${tweet.replies.length}
                        </span>
                    <span class="tweet-detail">
                        <i class="fa-regular fa-heart" data-action="like"></i>
                        ${tweet.likes}
                    </span>
                    <span class="tweet-detail">
                        <i class="fa-solid fa-retweet" data-action="retweet"></i>
                        ${tweet.retweets}
                    </span>
                </div>   
            </div>            
        </div>
    </div>
    `
    })
    return feedHtml;
}

function render() {
    document.getElementById('feed').innerHTML = getFeedHtml();
}

render();