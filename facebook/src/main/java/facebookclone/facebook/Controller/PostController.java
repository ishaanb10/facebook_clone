package facebookclone.facebook.Controller;

import facebookclone.facebook.Entity.Post;
import facebookclone.facebook.Services.PostService;
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

    @PostMapping("/save")
    public List<Post> savePost(@RequestBody Post post){
        return postService.save(post);
    }

  @GetMapping("/AllPost")
    public List<Post> getALl(){
        return postService.find();
  }
  @DeleteMapping("/delete/{postId}")
    public List<Post>delete(@PathVariable UUID postId){
        return postService.delete(postId);
  }
}
