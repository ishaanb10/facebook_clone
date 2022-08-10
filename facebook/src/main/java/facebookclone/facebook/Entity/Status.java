package facebookclone.facebook.Entity;

import org.springframework.data.annotation.Id;

import java.security.Timestamp;
import java.util.UUID;

public class Status {
    @Id
    private UUID statusID;
    private String userID;
    private String statusImageURL;
    private Timestamp uploadTIme;

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
        return uploadTIme;
    }

    public void setUploadTIme(Timestamp uploadTIme) {
        this.uploadTIme = uploadTIme;
    }

    public Status(UUID statusID, String userID, String statusImageURL, Timestamp uploadTIme) {
        this.statusID = statusID;
        this.userID = userID;
        this.statusImageURL = statusImageURL;
        this.uploadTIme = uploadTIme;
    }
}
