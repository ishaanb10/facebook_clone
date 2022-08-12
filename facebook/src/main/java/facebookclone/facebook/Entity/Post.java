package facebookclone.facebook.Entity;

import org.springframework.data.annotation.Id;


import java.sql.Timestamp;
import java.util.UUID;

public class Post {
    @Id
    private UUID postID;

    private String userID;
    private String userName;
    private String imageURL;

    private String description;


    private int likes;
//    private Timestamp dateTime;

    public UUID getPostID() {
        return postID;
    }

    public void setPostID(UUID postID) {
        this.postID = postID;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

//   // public Timestamp getDateTime() {
//        return dateTime;
//    }

//   // public void setDateTime(Timestamp dateTime) {
//        this.dateTime = dateTime;
//    }

    public Post(UUID postID, String userID, String userName, String imageURL, String description, int likes) {
        this.postID = postID;
        this.userID = userID;
        this.userName = userName;
        this.imageURL = imageURL;
        this.description = description;

        this.likes = likes;
       // this.dateTime = dateTime;
    }

}
