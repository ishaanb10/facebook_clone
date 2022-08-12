package facebookclone.facebook.Services;

import facebookclone.facebook.Entity.Post;
import facebookclone.facebook.Repository.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.UUID;
@Service
public class PostService {

    @Autowired
    private  PostRepo postRepo;

    public List<Post> save(Post post){
       // post.setLikes(0);
       // post.setDateTime(new Timestamp(System.currentTimeMillis()));
        post.setLikes(0);
        post.setPostID(UUID.randomUUID());
        postRepo.save(post);
        return find();
    }

    public List<Post> find(){
        return postRepo.findAll();
    }
    public List<Post>delete(UUID postId){
        postRepo.deleteById(postId);
        return find();
    }
}
