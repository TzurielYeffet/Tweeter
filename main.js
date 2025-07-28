import Tweeter from "./model.js";
import Renderer from "./render.js";

const tweeter = new Tweeter();
const renderer = new Renderer();

renderer.renderPosts(tweeter.getPosts());


$("#posts").on("click",".comment-button",function(){
    const input = $(this).siblings(".comments-input").val();
    const postId = $(this).closest(".post").attr("data-id");
    if(input){
        tweeter.addComment(postId,input);
        renderer.renderPosts(tweeter.getPosts());
    }
});

$("#twt").on("click","#twt-btn",function(){
    const input = $(this).siblings("#twt-input").val();
    if(input){
        tweeter.addPost(input);
        renderer.renderPosts(tweeter.getPosts());
    }
})




$("#posts").on("click", ".delete", function () {
  const postId = $(this).attr("data-id");
  console.log(postId);
  tweeter.removePost(postId);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".delete-comment", function () {
  const commentId = $(this).siblings(".comment").attr("data-id");
  const postId = $(this).closest(".post").attr("data-id");
  if (commentId) {
    tweeter.removeComment(postId, commentId);
    renderer.renderPosts(tweeter.getPosts());
  }
});
