package facebookclone.facebook.Controller;

import facebookclone.facebook.Entity.Comment;
import facebookclone.facebook.Services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/api/comments")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @PostMapping("/save/{postId}")
    ResponseEntity<Comment>save(@RequestBody Comment comment, @PathVariable String postId){

       comment.setPostId(postId);
       comment.setCommentId(UUID.randomUUID().toString());

   Comment saved= commentService.save(comment);
   return new ResponseEntity<>(saved,HttpStatus.CREATED);

    }

    @GetMapping("/allComments/{postId}")
    List<Comment> getAll(@PathVariable String postId){
        return commentService.findAll(postId);
    }


}
