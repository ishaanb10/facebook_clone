package facebookclone.facebook.Entity;

import org.springframework.data.annotation.Id;


import java.sql.Timestamp;
import java.util.UUID;

public class Status {
    @Id
    private UUID statusID;
    private String userID;
    private String statusImageURL;
    private Timestamp uploadTime;

    public UUID getStatusID() {
        return statusID;
    }

    public void setStatusID(UUID statusID) {
        this.statusID = statusID;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getStatusImageURL() {
        return statusImageURL;
    }

    public void setStatusImageURL(String statusImageURL) {
        this.statusImageURL = statusImageURL;
    }

    public Timestamp getUploadTIme() {
        return uploadTime;
    }

    public void setUploadTIme(Timestamp uploadTime) {
        this.uploadTime = uploadTime;
    }

    public Status(UUID statusID, String userID, String statusImageURL, Timestamp uploadTime) {
        this.statusID = statusID;
        this.userID = userID;
        this.statusImageURL = statusImageURL;
        this.uploadTime = uploadTime;
    }
}
