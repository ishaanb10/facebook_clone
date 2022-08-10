package facebookclone.facebook.Entity;

import lombok.extern.java.Log;
import org.springframework.data.annotation.Id;

import java.util.UUID;

@Log
public class Comment {
    //commentid(uuid) postid(uuid) userid(string) username(string) userImage(string url)
    @Id
    private UUID commentId;
    private UUID postId;
    private String userId;
    private String userName;
    private String userImage;

    public UUID getCommentId() {
        return commentId;
    }

    public UUID getPostId() {
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

    public void setCommentId(UUID commentId) {
        this.commentId = commentId;
    }

    public void setPostId(UUID postId) {
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

    public Comment(UUID commentId, UUID postId, String userId, String userName, String userImage) {
        this.commentId = commentId;
        this.postId = postId;
        this.userId = userId;
        this.userName = userName;
        this.userImage = userImage;
    }
}
