class Renderer {
  constructor() {}

  renderPosts(posts) {
    const postsTag = document.getElementById("posts");
    postsTag.innerHTML = "";

    posts.forEach((post) => {
      const $post = $("<div>").addClass("post").attr("data-id", post.id);
      const $postText = $("<div>").addClass("post-text").text(post.text);
      const $deletePost = $("<div>")
        .addClass("delete")
        .attr("data-id", post.id)
        .text("Delete Post");
      const $comments = $("<div>").addClass("comments");
      $post.append($postText, $comments);
      post.comments.forEach((comment) => {
        const $commentLine = $("<div>").addClass("comment-line"); // wrapper for alignment
        const $comment = $("<div>")
        .addClass("comment")
        .attr("data-id", comment.id)
        .text(comment.text);
        const $deleteComment = $("<div>").addClass("delete-comment").text("X");
        $commentLine.append($deleteComment, $comment);
        $comments.append($commentLine);
      });
      const $postComment = $("<div>").addClass("post-comment");
      const $input = $("<input>")
      .addClass("comments-input")
      .attr("placeholder", "Got something to say?");
      const $button = $("<button>").addClass("comment-button").text("Comment");
      $postComment.append($input, $button);
      $post.append($postComment, $deletePost);
      $("#posts").append($post);
    });
  }
}
export default Renderer;
