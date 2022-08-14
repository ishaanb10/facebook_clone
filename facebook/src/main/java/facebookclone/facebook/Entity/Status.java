package facebookclone.facebook.Entity;

import org.springframework.data.annotation.Id;


import java.sql.Date;

import java.util.UUID;

public class Status {
    @Id
    private String statusID;
    private String userID;
    private String statusImageURL;
    private Date uploadTime;

    public String getStatusID() {
        return statusID;
    }

    public void setStatusID(String statusID) {
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

    public Date getUploadTime() {
        return uploadTime;
    }

    public void setUploadTime(Date uploadTime) {
        this.uploadTime = uploadTime;
    }

    public Status(String statusID, String userID, String statusImageURL, Date uploadTime) {
        this.statusID = statusID;
        this.userID = userID;
        this.statusImageURL = statusImageURL;
        this.uploadTime = uploadTime;
    }
}
