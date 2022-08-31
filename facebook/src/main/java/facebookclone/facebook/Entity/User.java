package facebookclone.facebook.Entity;


import org.springframework.data.annotation.Id;


import java.util.Date;


public class User {
    @Id
    private String userID;

    private String userName;
    private String userImage;
    private boolean active;

    private Date joiningDate;

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

    public String getUserImage() {
        return userImage;
    }

    public void setUserImage(String userImage) {
        this.userImage = userImage;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Date getJoiningDate() {
        return joiningDate;
    }

    public void setJoiningDate(Date joiningDate) {
        this.joiningDate = joiningDate;
    }

    public User(String userID, String userName, String userImage, boolean active, Date joiningDate) {
        this.userID = userID;
        this.userName = userName;
        this.userImage = userImage;
        this.active = active;
        this.joiningDate = joiningDate;
    }
}
