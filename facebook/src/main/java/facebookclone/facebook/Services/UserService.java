package facebookclone.facebook.Services;

import facebookclone.facebook.Entity.User;
import facebookclone.facebook.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

import java.util.List;


@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

   public User saveMetaData(User user){
       Date date=new Date(System.currentTimeMillis());

       user.setJoiningDate(date);
        return userRepo.save(user);
    }
    public List<User> getAllUsers(){
       return userRepo.findAll();
    }

    public User findUserById(String userID){
        return userRepo.findById(userID).get();
    }
}
