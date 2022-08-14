package facebookclone.facebook.Controller;

import facebookclone.facebook.Entity.Post;
import facebookclone.facebook.Services.PostService;
import jdk.jfr.StackTrace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/Post")
public class PostController {
    @Autowired
   private PostService postService;

    @PostMapping("/save/{userId}")
    public List<Post> savePost(@RequestBody Post post, @PathVariable String userId){
        post.setUserID(userId);
        return postService.save(post);
    }

  @GetMapping("/AllPost/{userId}")
    public List<Post> getALl(@PathVariable String userID){
        return postService.find(userID);
  }
  @DeleteMapping("/delete/{userId}/{postId}")
    public List<Post>delete(@PathVariable String postId,@PathVariable String userId){
        return postService.delete(postId,userId);
  }
}
