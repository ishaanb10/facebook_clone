package facebookclone.facebook.Services;

import facebookclone.facebook.Entity.Comment;
import facebookclone.facebook.Repository.CommentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CommentService {
    @Autowired
    private CommentRepo commentRepo;

    public List<Comment> findAll(String postId){
        return commentRepo.findByPostId(postId);
    }

   public Comment save(Comment comment){
       return commentRepo.save(comment);
    }

    public void deleteAll(String userID){
        commentRepo.deleteAllComments(userID);
    }
}
