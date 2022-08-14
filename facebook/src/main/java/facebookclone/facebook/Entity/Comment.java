package facebookclone.facebook.Entity;

import lombok.extern.java.Log;
import org.springframework.data.annotation.Id;

import java.util.UUID;

@Log
public class Comment {
    //commentid(uuid) postid(uuid) userid(string) username(string) userImage(string url)
    @Id
    private String commentId;
    private String postId;
    private String userId;
    private String userName;
    private String userImage;

    public String getCommentId() {
        return commentId;
    }

    public String getPostId() {
        return postId;
    }

    public String getUserId() {
        return userId;
    }

    public String getUserName() {
        return userName;
    }

    public String getUserImage() {
        return userImage;
    }

    public void setCommentId(String commentId) {
        this.commentId = commentId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setUserImage(String userImage) {
        this.userImage = userImage;
    }

    public Comment(String commentId, String postId, String userId, String userName, String userImage) {
        this.commentId = commentId;
        this.postId = postId;
        this.userId = userId;
        this.userName = userName;
        this.userImage = userImage;
    }
}
