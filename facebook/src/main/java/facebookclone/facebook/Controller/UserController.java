package facebookclone.facebook.Controller;

import facebookclone.facebook.Entity.User;
import facebookclone.facebook.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserService userService;
    @PostMapping("/save")
    User save(@RequestBody User user){
        return userService.saveMetaData(user);
    }


}
