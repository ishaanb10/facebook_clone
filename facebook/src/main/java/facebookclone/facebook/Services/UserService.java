package facebookclone.facebook.Services;

import facebookclone.facebook.Entity.User;
import facebookclone.facebook.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

   public User saveMetaData(User user){
        return userRepo.save(user);
    }
}
