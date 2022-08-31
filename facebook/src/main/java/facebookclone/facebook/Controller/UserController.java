package facebookclone.facebook.Controller;

import facebookclone.facebook.Entity.User;
import facebookclone.facebook.Services.CommentService;
import facebookclone.facebook.Services.PostService;
import facebookclone.facebook.Services.StatusService;
import facebookclone.facebook.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    PostService postService;
    @Autowired
    CommentService commentService;
    @Autowired
    StatusService statusService;

    @PostMapping("/save")
    User save(@RequestBody User user){
        return userService.saveMetaData(user);
    }

    @GetMapping("/{userID}")
    User getUser(@PathVariable String userID){
        return userService.findUserById(userID);
    }

    @DeleteMapping("/ban/{userID}")
    void banUser(@PathVariable String userID){
        postService.deleteALlPosts(userID);
        commentService.deleteAll(userID);
        statusService.deleteAllStatus(userID);
    }

}
