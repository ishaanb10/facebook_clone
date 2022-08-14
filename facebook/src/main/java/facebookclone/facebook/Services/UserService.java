package facebookclone.facebook.Services;

import facebookclone.facebook.Entity.User;
import facebookclone.facebook.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

   public User saveMetaData(User user){
       Date date=new Date(System.currentTimeMillis());
       long now =date.getTime();
       Timestamp timestamp=new Timestamp(now);
       user.setJoiningDate(timestamp);
       user.setUserID(UUID.randomUUID().toString());
        return userRepo.save(user);
    }
    public List<User> getAllUsers(){
       return userRepo.findAll();
    }

    public User findUserById(String userID){
        return userRepo.findUser(userID);
    }
}
