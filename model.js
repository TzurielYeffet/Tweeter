class Tweeter {
  #_postIdCounter = 2;
  #_commentIdCounter = 6;
  constructor() {
    this.posts = [
      {
        text: "First post!",
        id: "p1",
        comments: [
          { id: "c1", text: "First comment on first post!" },
          { id: "c2", text: "Second comment on first post!!" },
          { id: "c3", text: "Third comment on first post!!!" },
        ],
      },
      {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
          {
            id: "c4",
            text: "Don't worry second poster, you'll be first one day.",
          },
          { id: "c5", text: "Yeah, believe in yourself!" },
          { id: "c6", text: "Haha second place what a joke." },
        ],
      },
    ];
  }

  getPosts() {
    return this.posts;
  }
  addPost(text) {
    this.#_postIdCounter++;
    const post = new Post(this.#_postIdCounter, text);
    this.posts.push(post);
  }
  removePost(postID) {
    for (let postIndex in this.posts) {
      if (this.posts[postIndex].id === postID) {
        this.posts.splice(postIndex, 1);
        this.#_postIdCounter--;
        console.log("removePost -Post removed!");
        return true;
      }
    }
    console.log("removePost: No such post");
    return false;
  }
  addComment(postID, text) {
    this.#_commentIdCounter++;
    let comment = new Comment(this.#_commentIdCounter, text);
    for (let post of this.posts) {
      if (post.id === postID) {
        post.comments.push(comment);
        console.log(`Comment added successfully`);
        return true;
      }
    }
    console.log(`No such comment`);
    return false;
  }
  removeComment(postID, commentID) {
    this.#_commentIdCounter--;
    for (let post of this.posts) {
      if (post.id === postID) {
        for (let commentIndex in post.comments) {
          if (post.comments[commentIndex].id === commentID) {
            post.comments.splice(commentIndex, 1);
            console.log("removeComment -Comment removed!");
            return true;
          }
        }
        console.log("removeComment - No such comment");
        return false;
      }
    }
    console.log("removeComment: No such post");
    return false;
  }
}

class Post {
  //    #counter = 0;
  constructor(counter, text) {
    this.id = "p" + counter;
    this.text = text;
    this.comments = [];
  }
}

class Comment {
  //    #counter = 0;
  constructor(counter, text) {
    this.id = "c" + counter;
    this.text = text;
  }
}

export default Tweeter;
